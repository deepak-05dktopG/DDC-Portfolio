import React, { useEffect, useMemo, useRef } from "react";
import { cn } from "../../lib/utils";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseHslColor(color) {
  // Accept any valid canvas color string; used as-is.
  return color;
}

function createNoiseCanvas(size = 96) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = Math.floor(Math.random() * 255);
    d[i] = v;
    d[i + 1] = v;
    d[i + 2] = v;
    d[i + 3] = 18;
  }
  ctx.putImageData(img, 0, 0);
  return canvas;
}

export default function LightRays({
  className,
  rayColor = "hsl(var(--foreground))",
  rayOpacity = 0.28,
  rayCount = 9,
  raySpread = 0.65,
  raySpeed = 1,
  rayLength = 1.25,
  fadeDistance = 1,
  noiseAmount = 0.12,
  pulsating = true,
  respectReducedMotion = true,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  const noiseCanvas = useMemo(() => {
    if (typeof document === "undefined") return null;
    return createNoiseCanvas(96);
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
    const shouldAnimate = !(prefersReduced && respectReducedMotion);

    let width = 0;
    let height = 0;

    const rays = Array.from({ length: Math.max(1, rayCount) }).map((_, i) => {
      const t = i / Math.max(1, rayCount - 1);
      const angle = (t - 0.5) * Math.PI * raySpread;
      return {
        angle,
        phase: Math.random() * Math.PI * 2,
        width: 28 + Math.random() * 60,
        blur: 18 + Math.random() * 22,
        speed: (0.6 + Math.random() * 0.9) * raySpeed,
      };
    });

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
    };

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();

    const color = parseHslColor(rayColor);

    const draw = (t) => {
      const time = (t || 0) * 0.001;
      ctx.clearRect(0, 0, width, height);

      const originX = width * 0.5;
      const originY = -height * 0.15;
      const maxLen = height * rayLength;

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < rays.length; i++) {
        const r = rays[i];
        const drift = Math.sin(time * r.speed + r.phase) * 0.07;
        const a = r.angle + drift;
        const pulse = pulsating
          ? 0.55 + 0.45 * Math.sin(time * (1.15 * raySpeed) + r.phase)
          : 1;
        const alpha = clamp(rayOpacity * pulse, 0, 1);

        ctx.save();
        ctx.translate(originX, originY);
        ctx.rotate(a);

        ctx.filter = `blur(${r.blur}px)`;

        const grad = ctx.createLinearGradient(0, 0, 0, maxLen);
        grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
        grad.addColorStop(clamp(fadeDistance * 0.6, 0.05, 0.95), `rgba(255,255,255,${alpha * 0.25})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        // Tint the white gradient using shadowColor.
        ctx.fillStyle = grad;
        ctx.shadowColor = color;
        ctx.shadowBlur = 32;
        ctx.globalAlpha = 1;

        ctx.fillRect(-r.width * 0.5, 0, r.width, maxLen);

        ctx.restore();
      }

      ctx.restore();

      // Noise / film grain overlay
      if (noiseCanvas && noiseAmount > 0) {
        ctx.save();
        ctx.globalCompositeOperation = "overlay";
        ctx.globalAlpha = clamp(noiseAmount, 0, 0.5);
        ctx.drawImage(noiseCanvas, 0, 0, width, height);
        ctx.restore();
      }

      if (shouldAnimate) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [fadeDistance, noiseAmount, noiseCanvas, pulsating, rayColor, rayCount, rayLength, rayOpacity, raySpeed, raySpread, respectReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
