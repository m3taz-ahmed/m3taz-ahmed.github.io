import { useEffect, useRef, useState } from 'react';

/**
 * Custom magnetic cursor — a glowing dot that follows the mouse
 * with spring physics, grows on hover over interactive elements,
 * and blends into the page design. Desktop only (pointer: fine).
 */

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only on devices with precise pointer
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    // Ring follows with lag (spring)
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // Grow on interactive elements
    const onEnter = () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--primary)';
      ring.style.opacity = '0.8';
    };
    const onLeave = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'var(--primary)';
      ring.style.opacity = '0.4';
    };

    const interactive = document.querySelectorAll(
      'a, button, [data-tilt], .glass-card-interactive, input, textarea, .filter-btn'
    );
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
          transition: 'opacity 0.2s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1.5px solid var(--primary)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.4,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  );
}
