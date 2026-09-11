/**
 * GSAP-powered scroll animations — professional, performant, accessible.
 * - Parallax layers
 * - Section title kinetic reveal (word-by-word)
 * - Stagger card reveals
 * - Hero image 3D tilt on mouse
 * - Scroll progress bar
 * - Magnetic buttons
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initGSAP() {
  if (prefersReducedMotion) {
    // Still add the safety class so content is visible
    document.documentElement.classList.add('gsap-ready');
    return;
  }

  // Wait for DOM to be fully ready (React islands included)
  const start = () => {
    initScrollProgress();
    initHeroTilt();
    initTitleReveal();
    initParallax();
    initCardStagger();
    initMagneticButtons();
    initTimelineAnimation();

    // Refresh after everything is set up + mark ready
    ScrollTrigger.refresh();
    document.documentElement.classList.add('gsap-ready');
  };

  // Delay to ensure React islands have hydrated
  if (document.readyState === 'complete') {
    setTimeout(start, 100);
  } else {
    window.addEventListener('load', () => setTimeout(start, 100));
  }
}

/* ── Scroll progress bar ─────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  bar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transform-origin: left;
    transform: scaleX(0);
    z-index: 100;
    pointer-events: none;
    box-shadow: 0 0 8px color-mix(in srgb, var(--primary) 50%, transparent);
  `;
  document.body.appendChild(bar);

  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  });
}

/* ── Hero image 3D tilt ──────────────────────────────────────── */
function initHeroTilt() {
  const wrap = document.querySelector('[data-tilt]') as HTMLElement | null;
  if (!wrap) return;

  const maxTilt = 12;

  wrap.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(wrap, {
      rotateY: x * maxTilt,
      rotateX: -y * maxTilt,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });
  });

  wrap.addEventListener('mouseleave', () => {
    gsap.to(wrap, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    });
  });
}

/* ── Section title kinetic reveal ────────────────────────────── */
function initTitleReveal() {
  const titles = document.querySelectorAll('section h2');

  titles.forEach((title) => {
    // Split into words
    const text = title.textContent || '';
    const words = text.trim().split(/\s+/);

    // Preserve gradient-text spans
    const html = title.innerHTML;
    const hasGradient = html.includes('gradient-text');

    if (hasGradient) {
      // For titles with gradient text, animate the whole element
      gsap.fromTo(title,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
          },
        }
      );
    } else {
      title.innerHTML = words
        .map((w) => `<span style="display:inline-block; overflow:hidden;"><span style="display:inline-block;">${w}</span></span>`)
        .join(' ');

      const innerSpans = title.querySelectorAll('span > span');
      gsap.fromTo(innerSpans,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
          },
        }
      );
    }
  });
}

/* ── Parallax layers ─────────────────────────────────────────── */
function initParallax() {
  // Radial glow parallax
  const glows = document.querySelectorAll('.radial-glow');
  glows.forEach((glow) => {
    gsap.to(glow, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: glow.closest('section') || glow,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  // Section backgrounds subtle parallax — use fromTo for safety
  const sections = document.querySelectorAll('section[id]');
  sections.forEach((section) => {
    const cards = section.querySelectorAll('.glass-card');
    if (cards.length === 0) return;

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        }
      );
    });
  });
}

/* ── Card stagger reveal ─────────────────────────────────────── */
function initCardStagger() {
  const grids = document.querySelectorAll('#projects-grid, #skills .grid, #how-i-work .grid');

  grids.forEach((grid) => {
    const items = grid.children;
    if (items.length === 0) return;

    gsap.fromTo(items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
        },
      }
    );
  });
}

/* ── Magnetic buttons ───────────────────────────────────────── */
function initMagneticButtons() {
  const magnetic = document.querySelectorAll('.btn-primary, .btn-outline, [data-magnetic]');

  magnetic.forEach((el) => {
    const element = el as HTMLElement;
    const strength = 0.3;

    element.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;

      gsap.to(element, {
        x,
        y,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
}

/* ── Timeline animation ─────────────────────────────────────── */
function initTimelineAnimation() {
  const items = document.querySelectorAll('.timeline-item');
  if (items.length === 0) return;

  items.forEach((item, i) => {
    gsap.fromTo(item,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
      }
    );

    // Animate the dot
    const dot = item.querySelector('.timeline-dot');
    if (dot) {
      gsap.fromTo(dot,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          delay: i * 0.1 + 0.2,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    }
  });
}
