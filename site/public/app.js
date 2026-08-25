(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initThemeToggle() {
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    if (!toggles.length) return;

    function updateIcons() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      toggles.forEach((toggle) => {
        const lightIcon = toggle.querySelector('.theme-icon-light');
        const darkIcon = toggle.querySelector('.theme-icon-dark');
        if (lightIcon) lightIcon.classList.toggle('hidden', !isDark);
        if (darkIcon) darkIcon.classList.toggle('hidden', isDark);
      });
    }

    updateIcons();

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const root = document.documentElement;
        const isDark = root.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch {}
        updateIcons();
      });
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    initThemeToggle();
    initTypewriter();
    initCounters();
    initTestimonials();
    initMobileMenu();
    initBackToTop();
    initNavActive();
    initReveal();
    if (!prefersReducedMotion) {
      initParticles();
    }
    initForm();
  });

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
      el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;

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
        dot.classList.toggle('bg-border', i !== current);
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
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', start);

    goTo(0);
    start();
  }

  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('nav-links-mobile');
    if (!hamburger || !menu) return;

    const links = menu.querySelectorAll('a');
    let open = false;

    function setState(isOpen) {
      open = isOpen;
      hamburger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      menu.style.transform = open ? 'translateX(0)' : 'translateX(100%)';
      const bars = hamburger.children;
      if (bars[0]) bars[0].style.transform = open ? 'rotate(45deg) translateY(8px)' : '';
      if (bars[1]) bars[1].style.opacity = open ? '0' : '1';
      if (bars[2]) bars[2].style.transform = open ? 'rotate(-45deg) translateY(-8px)' : '';
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => setState(!open));
    links.forEach((link) => link.addEventListener('click', () => open && setState(false)));

    document.addEventListener('keydown', (e) => {
      if (open && e.key === 'Escape') setState(false);
    });
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

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
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
            link.classList.toggle('text-muted', !active);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

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
        el.style.transitionDelay = `${i * 0.05}s`;
      }
      observer.observe(el);
    });
  }

  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, particles;
    const maxParticles = window.matchMedia('(pointer: coarse)').matches ? 20 : 35;
    const connectionDistance = 120;
    const mouse = { x: null, y: null };
    let rafId;

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
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(34, 211, 238, 0.5)' : 'rgba(8, 145, 178, 0.4)';
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
            const alpha = (1 - dist / connectionDistance) * (isDark ? 0.18 : 0.12);
            ctx.strokeStyle = isDark ? `rgba(34, 211, 238, ${alpha})` : `rgba(8, 145, 178, ${alpha})`;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - dist / 150) * 0.3;
            ctx.strokeStyle = isDark ? `rgba(34, 211, 238, ${alpha})` : `rgba(8, 145, 178, ${alpha})`;
            ctx.stroke();
          }
        }
      });

      rafId = requestAnimationFrame(draw);
    }

    function onResize() {
      resize();
      create();
    }

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    resize();
    create();
    draw();

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        draw();
      }
    });
  }

  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const hp = document.getElementById('website');
    const ts = document.getElementById('form-ts');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot + time-trap
      if (hp && hp.value) return;
      if (ts) {
        const elapsed = Date.now() - parseInt(ts.value || '0', 10);
        if (elapsed < 2000) {
          if (status) {
            status.textContent = 'Please wait a moment before submitting.';
            status.classList.remove('hidden', 'text-primary');
            status.classList.add('text-red-500');
          }
          return;
        }
      }
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const sending = form.dataset.sending || 'Sending...';
      const success = form.dataset.success || 'Sent!';
      const error = form.dataset.error || 'Failed. Please try again.';

      if (status) {
        status.textContent = sending;
        status.classList.remove('hidden', 'text-red-500');
        status.classList.add('text-primary');
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
      }

      try {
        const fd = new FormData(form);
        // Remove honeypot from submission
        fd.delete('website');
        fd.delete('_ts');
        const response = await fetch(form.action, {
          method: form.method,
          body: fd,
          headers: { 'Accept': 'application/json' },
        });

        if (response.ok) {
          if (status) status.textContent = success;
          form.reset();
          if (ts) ts.value = String(Date.now());
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        if (status) {
          status.textContent = error;
          status.classList.remove('text-primary');
          status.classList.add('text-red-500');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
      }
    });
  }
})();
