import { useEffect, useRef, useState, useCallback } from 'react';
import './CircularGallery.css';

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function CircularGallery({
  items = [],
  scrollSpeed = 2,
  scrollEase = 0.07,
  textColor = '#ffffff',
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const currentOffsetRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const rafRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Duplicate list for infinite feel
  const looped = [...items, ...items, ...items];
  const CARD_W = 280;
  const GAP = 20;
  const STEP = CARD_W + GAP;
  const total = looped.length;
  const center = Math.floor(looped.length / 2);

  // Clamp / wrap target offset to keep it scrollable
  const minOffset = -(total - 1) * STEP / 2;
  const maxOffset =  (total - 1) * STEP / 2;

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !items.length) return;

    /* ── Wheel ───────────────────────────── */
    const onWheel = (e) => {
      e.preventDefault();
      targetOffsetRef.current -= e.deltaY * 0.4 * scrollSpeed;
    };
    el.addEventListener('wheel', onWheel, { passive: false });

    /* ── Pointer drag (desktop) ──────────── */
    const onPointerDown = (e) => {
      if (e.pointerType === 'touch') return; // handled by touch events below
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      startOffsetRef.current = targetOffsetRef.current;
      el.style.cursor = 'grabbing';
    };
    const onPointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      if (!isDraggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      targetOffsetRef.current = startOffsetRef.current + dx * 0.8;
    };
    const onPointerUp = (e) => {
      if (e.pointerType === 'touch') return;
      isDraggingRef.current = false;
      el.style.cursor = 'grab';
    };

    /* ── Touch events (mobile) ───────────── */
    const onTouchStart = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].clientX;
      startOffsetRef.current = targetOffsetRef.current;
    };
    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault(); // prevent page scroll while dragging gallery
      const dx = e.touches[0].clientX - startXRef.current;
      targetOffsetRef.current = startOffsetRef.current + dx * 0.8;
    };
    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd);

    /* ── RAF ─────────────────────────────── */
    const tick = () => {
      // Soft clamp at edges
      if (targetOffsetRef.current < minOffset) targetOffsetRef.current = lerp(targetOffsetRef.current, minOffset, 0.15);
      if (targetOffsetRef.current > maxOffset) targetOffsetRef.current = lerp(targetOffsetRef.current, maxOffset, 0.15);
      currentOffsetRef.current = lerp(currentOffsetRef.current, targetOffsetRef.current, scrollEase);
      setOffset(currentOffsetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      cancelAnimationFrame(rafRef.current);
    };
  }, [items.length, scrollSpeed, scrollEase, minOffset, maxOffset]);

  return (
    <div ref={containerRef} className="circular-gallery">
      <div className="cg-track" ref={trackRef}>
        {looped.map((item, i) => {
          // Position each card on the horizontal axis
          const x = (i - center) * STEP + offset;

          // How close to center (in card-widths) — 0 = center
          const distFromCenter = Math.abs(x) / STEP;

          // Fade and scale based on distance
          const scale = Math.max(0.7, 1 - distFromCenter * 0.12);
          const opacity = Math.max(0.35, 1 - distFromCenter * 0.22);
          const zIndex = Math.round(100 - distFromCenter * 10);

          // Slight 3D tilt — cards to left tilt right, right tilt left
          const rotateY = Math.max(-35, Math.min(35, -(x / STEP) * 18));

          // Only render cards near visible area
          if (Math.abs(x) > STEP * 4) return null;

          return (
            <div
              key={i}
              className="cg-card"
              style={{
                transform: `translateX(calc(-50% + ${x}px)) scale(${scale}) perspective(900px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex,
              }}
            >
              <div className={`cg-card-inner ${distFromCenter < 0.6 ? 'active' : ''}`}>
                {/* Index badge */}
                <span className="cg-card-index">
                  {String((i % items.length) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>

                {/* Title + Link */}
                <div className="cg-card-header">
                  <h3 className="cg-card-title" style={{ color: textColor }}>
                    {item.title}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="cg-card-link"
                    >
                      ↗
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="cg-card-desc">{item.desc}</p>

                {/* Tags */}
                <div className="cg-card-tags">
                  {item.tags?.map((tag, t) => (
                    <span key={t} className="cg-card-tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <div className="cg-hint" style={{ color: textColor }}>
        ← drag or scroll to explore →
      </div>
    </div>
  );
}
