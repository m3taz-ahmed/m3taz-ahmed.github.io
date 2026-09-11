import { useRef, type ReactNode } from 'react';

/**
 * 3D tilt card — tilts in 3D space on mouse hover with perspective,
 * glare effect, and smooth spring-back on leave.
 * Used to wrap project cards for an immersive feel.
 */

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `perspective(1000px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateZ(0)`;

    if (glare && glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, color-mix(in srgb, var(--primary) 15%, transparent), transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';

    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  const handleEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.1s ease-out';
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
