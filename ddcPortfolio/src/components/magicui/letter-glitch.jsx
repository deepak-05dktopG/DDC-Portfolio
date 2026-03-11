import React, { useEffect, useMemo, useRef } from "react";
import { cn } from "../../lib/utils";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

const DEFAULT_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%#*+-=<>[]{}()";

export default function LetterGlitch({
  className,
  glitchSpeed = 1.6,
  fontSize = 14,
  density = 0.9,
  smooth = true,
  showVignette = true,
  showScanlines = true,
  chars = DEFAULT_CHARS,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const dropsRef = useRef([]);

  const noiseCanvas = useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const img = ctx.createImageData(128, 128);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.floor(Math.random() * 255);
      d[i] = v;
      d[i + 1] = v;
      d[i + 2] = v;
      d[i + 3] = 14;
    }
    ctx.putImageData(img, 0, 0);
    return c;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let lastTime = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(1, Math.floor(width / fontSize));
      // One "drop" per column
      dropsRef.current = Array.from({ length: cols }, () => Math.random() * height);
    };

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();

    const getChar = () => chars[Math.floor(Math.random() * chars.length)];

    const draw = (t) => {
      const time = (t || 0) * 0.001;
      const dt = lastTime ? time - lastTime : 0;
      lastTime = time;

      // Fade frame for motion trails
      if (smooth) {
        ctx.fillStyle = `rgba(0, 0, 0, ${0.12})`;
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace`;

      // Theme-friendly cyan/green blend
      const cyan = "rgba(0, 243, 255, 0.65)";
      const green = "rgba(0, 255, 140, 0.45)";

      // Occasional horizontal glitch slice
      const glitchPulse = Math.sin(time * 3.2 * glitchSpeed);
      const doGlitch = glitchPulse > 0.92;
      const sliceY = doGlitch ? Math.random() * height : 0;
      const sliceH = doGlitch ? 10 + Math.random() * 30 : 0;
      const sliceShift = doGlitch ? (Math.random() - 0.5) * 40 : 0;

      const speedPx = (70 + 90 * density) * glitchSpeed;
      const step = speedPx * (dt || 0.016);

      for (let i = 0; i < cols; i++) {
        const x = i * fontSize;
        const y = dropsRef.current[i];

        // Color variation by column
        ctx.fillStyle = i % 3 === 0 ? cyan : green;
        const ch = getChar();

        if (doGlitch && y > sliceY && y < sliceY + sliceH) {
          ctx.save();
          ctx.translate(sliceShift, 0);
          ctx.fillText(ch, x, y);
          ctx.restore();
        } else {
          ctx.fillText(ch, x, y);
        }

        // Advance drop
        dropsRef.current[i] = y + step;
        if (dropsRef.current[i] > height + 20) {
          dropsRef.current[i] = -Math.random() * height * 0.5;
        }
      }

      // Scanlines overlay
      if (showScanlines) {
        ctx.globalCompositeOperation = "overlay";
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        for (let y = 0; y < height; y += 4) {
          ctx.fillRect(0, y, width, 1);
        }
      }

      // Vignette to match ReactBits look
      if (showVignette) {
        ctx.globalCompositeOperation = "source-over";
        const g = ctx.createRadialGradient(
          width * 0.5,
          height * 0.35,
          Math.min(width, height) * 0.1,
          width * 0.5,
          height * 0.35,
          Math.max(width, height) * 0.8
        );
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(1, "rgba(0,0,0,0.72)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }

      // Film grain
      if (noiseCanvas) {
        ctx.globalCompositeOperation = "overlay";
        ctx.globalAlpha = 0.16;
        ctx.drawImage(noiseCanvas, 0, 0, width, height);
        ctx.globalAlpha = 1;
      }

      ctx.restore();

      if (!prefersReduced) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [chars, density, fontSize, glitchSpeed, noiseCanvas, showScanlines, showVignette, smooth]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
