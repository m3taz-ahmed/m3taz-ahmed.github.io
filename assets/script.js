/**
 * Portfolio Core Orchestrator v2.1
 * Author: Antigravity AI
 * Security: Lead Systems Architect Grade
 */

(function() {
    "use strict";

    // === 1. ULTIMATE LOADER HANDLER (Runs immediately) ===
    const dismissLoader = () => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(() => {
                loader.classList.add('hidden');
                loader.style.display = 'none';
            }, 500);
        }
    };

    // Multiple triggers for loader dismissal
    window.addEventListener('load', () => setTimeout(dismissLoader, 500));
    document.addEventListener('DOMContentLoaded', () => setTimeout(dismissLoader, 2000));
    setTimeout(dismissLoader, 4000); // Absolute failsafe

    // === 2. DOM-DEPENDENT INITIALIZATION ===
    document.addEventListener('DOMContentLoaded', () => {
        console.log("Portfolio v2.1: DOM Ready. Orchestrating components...");

        // Safety helper for class operations
        const safeClass = (id, method, className) => {
            const el = document.getElementById(id);
            if (el && el.classList) {
                el.classList[method](className);
                return true;
            }
            return false;
        };

        // 2.1 Particles.js initialization
        try {
            if (typeof particlesJS !== 'undefined') {
                particlesJS('particles-js', {
                    "particles": {
                        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": "#00d4ff" },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.4, "random": false },
                        "size": { "value": 2, "random": true },
                        "line_linked": { "enable": true, "distance": 150, "color": "#00d4ff", "opacity": 0.2, "width": 1 },
                        "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
                    },
                    "retina_detect": true
                });
            }
        } catch (e) {
            console.warn("Particles engine bypassed.");
        }

        // 2.2 Typewriter Effect
        const typewriter = document.getElementById('typewriter');
        if (typewriter) {
            const phrases = ["System Architect", "Laravel Expert", "Audit-Ready Designer", "Backend Orchestrator"];
            let pIdx = 0, cIdx = 0, isDel = false, speed = 100;

            function typeEffect() {
                const phrase = phrases[pIdx];
                typewriter.textContent = isDel ? phrase.substring(0, cIdx--) : phrase.substring(0, cIdx++);
                
                if (!isDel && cIdx > phrase.length) { isDel = true; speed = 2000; }
                else if (isDel && cIdx < 0) { isDel = false; pIdx = (pIdx + 1) % phrases.length; cIdx = 0; speed = 500; }
                else { speed = isDel ? 50 : 100; }
                
                setTimeout(typeEffect, speed);
            }
            typeEffect();
        }

        // 2.3 Scroll Animations & Counters
        const animateCounter = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += step;
                if (current < target) {
                    el.innerText = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
                    requestAnimationFrame(update);
                } else {
                    el.innerText = target;
                }
            };
            update();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Counter animation
                    if (entry.target.classList.contains('stats-grid')) {
                        entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
                    }
                    
                    // Pipeline activation logic
                    if (entry.target.classList.contains('pipeline-item')) {
                        entry.target.classList.add('active');
                    }

                    // For staggers
                    if (entry.target.hasAttribute('data-stagger')) {
                        const children = entry.target.children;
                        Array.from(children).forEach((child, i) => {
                            setTimeout(() => child.classList.add('active'), i * 150);
                        });
                    }
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal, .stats-grid, .glass-card, .pipeline-item, .skill-category').forEach(el => observer.observe(el));

        // 2.4 Magnetic Effect
        const magneticEls = document.querySelectorAll('.magnetic');
        magneticEls.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = el.getBoundingClientRect();
                const x = e.clientX - (left + width / 2);
                const y = e.clientY - (top + height / 2);
                el.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });

        // 2.5 Navigation Logic
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(s => {
                const top = s.offsetTop - 150;
                if (window.scrollY >= top) current = s.getAttribute('id');
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) link.classList.add('active');
            });
        });

        // 2.6 Hamburger & Back-to-Top
        const burger = document.getElementById('hamburger');
        const menu = document.getElementById('nav-links');
        if (burger && menu) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('active');
                menu.classList.toggle('active');
            });
            menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('active');
            }));
        }

        const btt = document.getElementById('back-to-top');
        if (btt) {
            window.addEventListener('scroll', () => {
                btt.classList.toggle('visible', window.scrollY > 600);
            });
            btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }

        // 2.7 Testimonials Slider
        const slider = document.getElementById('testimonials-slider');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        const totalSlides = dots.length;

        const updateSlider = (index) => {
            if (slider) {
                slider.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
                currentSlide = index;
            }
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => updateSlider(index));
        });

        // Auto-slide every 6 seconds
        setInterval(() => {
            let next = (currentSlide + 1) % totalSlides;
            updateSlider(next);
        }, 6000);

        // 2.8 Resume Download Feedback
        const resumeBtn = document.querySelector('a[href*="Resume.pdf"]');
        if (resumeBtn) {
            resumeBtn.addEventListener('click', () => {
                const originalText = resumeBtn.innerHTML;
                resumeBtn.innerHTML = '<i class="fas fa-check"></i> Preparing Download...';
                setTimeout(() => {
                    resumeBtn.innerHTML = originalText;
                }, 3000);
            });
        }

        // 2.9 Contact Form Async Feedback (Web3Forms handles the actual POST, we just add UI)
        const contactForm = document.querySelector('.contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const feedback = document.getElementById('form-feedback');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                const btnText = submitBtn.querySelector('.btn-text');
                const btnLoader = submitBtn.querySelector('.btn-loader');
                
                btnText.style.opacity = '0.5';
                btnLoader.style.display = 'inline-block';
                submitBtn.disabled = true;

                // We let the browser handle the redirect/POST to Web3Forms, 
                // but we add a nice touch if they use an AJAX approach (optional)
                // For now, just visual feedback before the native submit.
                setTimeout(() => {
                    feedback.style.display = 'block';
                    feedback.className = 'success';
                    feedback.innerHTML = '<i class="fas fa-check-circle"></i> Connection established. Dispatching...';
                }, 500);
            });
        }
    });

})();
