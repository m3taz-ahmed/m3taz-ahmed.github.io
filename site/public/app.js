(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isRtl = document.documentElement.dir === 'rtl';

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
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
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
    initCounters();
    initMobileMenu();
    initBackToTop();
    initNavActive();
    initReveal();
    initStages();
    initSectionView();
    initRail();
    initForm();
    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
      initCursor();
      initMagnetic();
    }
    if (!prefersReducedMotion) {
      initParallax();
    }
  });

  /* ── Counters ─────────────────────────────────────────────── */
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
    if (prefersReducedMotion) {
      el.textContent = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
      return;
    }
    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const value = target * ease;
      el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── Mobile menu (RTL-aware slide direction) ─────────────── */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('nav-links-mobile');
    if (!hamburger || !menu) return;

    const links = menu.querySelectorAll('a');
    const closedX = isRtl ? 'translateX(-100%)' : 'translateX(100%)';
    let open = false;

    function setState(isOpen) {
      open = isOpen;
      hamburger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      menu.style.transform = open ? 'translateX(0)' : closedX;
      const bars = hamburger.children;
      if (bars[0]) bars[0].style.transform = open ? 'rotate(45deg) translateY(8px)' : '';
      if (bars[1]) bars[1].style.opacity = open ? '0' : '1';
      if (bars[2]) bars[2].style.transform = open ? 'rotate(-45deg) translateY(-8px)' : '';
      document.body.style.overflow = open ? 'hidden' : '';
    }

    setState(false);
    hamburger.addEventListener('click', () => setState(!open));
    links.forEach((link) => link.addEventListener('click', () => open && setState(false)));
    document.addEventListener('keydown', (e) => {
      if (open && e.key === 'Escape') setState(false);
    });
  }

  /* ── Back to top ─────────────────────────────────────────── */
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

  /* ── Active nav link ─────────────────────────────────────── */
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

  /* ── Reveal ──────────────────────────────────────────────── */
  function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach((el) => observer.observe(el));
  }

  /* ── Pipeline stages go live (artifact draw-on) ──────────── */
  function initStages() {
    const stages = document.querySelectorAll('.stage');
    if (!stages.length) return;

    if (prefersReducedMotion) {
      stages.forEach((s) => s.classList.add('is-live'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-live');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    stages.forEach((stage) => observer.observe(stage));
  }

  /* ── Section in-view flag (station chip glow) ────────────── */
  function initSectionView() {
    const sections = document.querySelectorAll('section[data-station]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('in-view', entry.isIntersecting);
      });
    }, { threshold: 0.12 });

    sections.forEach((section) => observer.observe(section));
  }

  /* ── The Line — rail, packet, stations, top progress ─────── */
  function initRail() {
    const fill = document.getElementById('rail-fill');
    const packet = document.getElementById('rail-packet');
    const holder = document.getElementById('rail-stations');
    const sections = Array.from(document.querySelectorAll('section[data-station]'));

    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);

    let stations = [];

    function maxScroll() {
      return Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    }

    function layout() {
      if (!holder) return;
      const max = maxScroll();
      holder.innerHTML = '';
      stations = sections.map((sec) => {
        const target = Math.min(Math.max(sec.offsetTop - window.innerHeight * 0.5, 0), max);
        const pos = target / max;

        const node = document.createElement('span');
        node.className = 'rail-node';
        node.style.top = (pos * 100) + '%';
        const label = document.createElement('span');
        label.className = 'rail-node-label';
        label.style.top = (pos * 100) + '%';
        label.textContent = '0' + (sec.dataset.station ?? '0');
        holder.appendChild(node);
        holder.appendChild(label);
        return { node, label, pos };
      });
      update();
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    function update() {
      ticking = false;
      const max = maxScroll();
      const p = Math.min(Math.max(window.scrollY / max, 0), 1);

      bar.style.transform = `scaleX(${p})`;
      if (fill) fill.style.height = (p * 100) + '%';
      if (packet) packet.style.top = (p * 100) + '%';

      stations.forEach((s) => {
        const passed = p > s.pos + 0.008;
        const at = !passed && p >= s.pos - 0.015;
        s.node.classList.toggle('passed', passed);
        s.node.classList.toggle('active', at);
      });
    }

    layout();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { layout(); }, { passive: true });
    window.addEventListener('load', layout);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => layout());
    }
  }

  /* ── Cursor — dot + lagging ring (desktop, motion-safe) ──── */
  function initCursor() {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.style.cssText = 'position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:var(--primary);pointer-events:none;z-index:9999;mix-blend-mode:screen;';
    ring.style.cssText = 'position:fixed;top:0;left:0;width:40px;height:40px;border-radius:50%;border:1.5px solid var(--primary);pointer-events:none;z-index:9998;opacity:0.4;transition:width .3s ease,height .3s ease,opacity .3s ease,border-color .3s ease;';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    });

    (function loop() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      requestAnimationFrame(loop);
    })();

    const interactive = document.querySelectorAll('a, button, input, textarea, select, summary, .glass-card-interactive');
    const onEnter = () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.opacity = '0.8';
    };
    const onLeave = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.opacity = '0.4';
    };
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  /* ── Magnetic buttons — clamped pull, lerp return ────────── */
  function initMagnetic() {
    document.querySelectorAll('.btn-primary').forEach((el) => {
      let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

      function frame() {
        cx += (tx - cx) * 0.2;
        cy += (ty - cy) * 0.2;
        el.style.transform = `translate(${cx}px, ${cy}px)`;
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
          raf = requestAnimationFrame(frame);
        } else {
          raf = null;
          if (tx === 0 && ty === 0) el.style.transform = '';
        }
      }

      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        tx = (e.clientX - r.left - r.width / 2) * 0.22;
        ty = (e.clientY - r.top - r.height / 2) * 0.22;
        if (!raf) raf = requestAnimationFrame(frame);
      });
      el.addEventListener('pointerleave', () => {
        tx = 0;
        ty = 0;
        if (!raf) raf = requestAnimationFrame(frame);
      });
    });
  }

  /* ── Hero ambient parallax — scroll-driven drift ─────────── */
  function initParallax() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const glows = hero.querySelectorAll('[aria-hidden="true"]');
    if (!glows.length) return;

    let ticking = false;
    function update() {
      ticking = false;
      const y = Math.min(window.scrollY, window.innerHeight) * 0.18;
      glows.forEach((g) => { g.style.transform = `translateY(${y}px)`; });
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
  }

  /* ── Contact form ────────────────────────────────────────── */
  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const hp = document.getElementById('website');
    const ts = document.getElementById('form-ts');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

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

      const captcha = form.querySelector('textarea[name="h-captcha-response"]');
      if (captcha && !captcha.value) {
        if (status) {
          status.textContent = form.dataset.captchaError || 'Please complete the verification first.';
          status.classList.remove('hidden', 'text-primary');
          status.classList.add('text-red-500');
        }
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
          if (typeof hcaptcha !== 'undefined') {
            try { hcaptcha.reset(); } catch (_) {}
          }
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
