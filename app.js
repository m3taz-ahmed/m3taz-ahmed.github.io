(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    initTypewriter();
    initCounters();
    initTestimonials();
    initMobileMenu();
    initBackToTop();
    initNavActive();
    initReveal();
    initParticles();
    initForm();
  }

  function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = JSON.parse(el.dataset.phrases || '[]');
    if (!phrases.length) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pause = 2000;

    function tick() {
      const current = phrases[phraseIndex];
      el.textContent = current.slice(0, charIndex);

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, pause);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    tick();
  }

  function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const isFloat = !Number.isInteger(target);
    const duration = 2000;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const value = target * ease;
      el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function initTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;

    const track = slider.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('#testimonials-dots button');
    if (!track || !dots.length) return;

    let current = 0;
    let interval;
    const items = track.children.length;

    function goTo(index) {
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-primary', i === current);
        dot.classList.toggle('bg-white/20', i !== current);
      });
    }

    function next() {
      goTo((current + 1) % items);
    }

    function start() {
      interval = setInterval(next, 5000);
    }

    function stop() {
      clearInterval(interval);
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        stop();
        goTo(Number(dot.dataset.index));
        start();
      });
    });

    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    goTo(0);
    start();
  }

  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
    if (!hamburger || !menu) return;

    const links = menu.querySelectorAll('a');
    let open = false;

    function toggle() {
      open = !open;
      hamburger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      menu.style.transform = open ? 'translateX(0)' : 'translateX(100%)';
      hamburger.children[0].style.transform = open ? 'rotate(45deg) translateY(8px)' : '';
      hamburger.children[1].style.opacity = open ? '0' : '1';
      hamburger.children[2].style.transform = open ? 'rotate(-45deg) translateY(-8px)' : '';
    }

    hamburger.addEventListener('click', toggle);
    links.forEach((link) => link.addEventListener('click', () => open && toggle()));
  }

  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const observer = new IntersectionObserver((entries) => {
      const hero = entries[0];
      if (hero.isIntersecting) {
        btn.classList.add('opacity-0', 'invisible');
        btn.classList.remove('opacity-100', 'visible');
      } else {
        btn.classList.remove('opacity-0', 'invisible');
        btn.classList.add('opacity-100', 'visible');
      }
    }, { threshold: 0 });

    const hero = document.querySelector('section');
    if (hero) observer.observe(hero);
  }

  function initNavActive() {
    const links = document.querySelectorAll('#nav-links a');
    if (!links.length) return;

    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            const active = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('text-primary', active);
            link.classList.toggle('text-dim', !active);
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach((section) => observer.observe(section));
  }

  function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach((el, i) => {
      if (el.dataset.stagger) {
        el.style.transitionDelay = `${i * 0.1}s`;
      }
      observer.observe(el);
    });
  }

  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, particles;
    const maxParticles = 40;
    const connectionDistance = 120;
    const mouseDistance = 150;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function create() {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    resize();
    create();
    draw();
    window.addEventListener('resize', resize);
  }

  function initForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form || !status) return;

    const sending = form.dataset.sending || 'Sending...';
    const success = form.dataset.success || 'Message sent.';
    const error = form.dataset.error || 'Failed to send. Please try again.';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = sending;
      btn.disabled = true;

      try {
        const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
        if (response.ok) {
          status.textContent = success;
          status.classList.remove('hidden');
          form.reset();
        } else {
          throw new Error('Failed');
        }
      } catch {
        status.textContent = error;
        status.classList.remove('hidden');
      } finally {
        btn.textContent = original;
        btn.disabled = false;
      }
    });
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('active'));
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('astro:page-load', init);
})();
