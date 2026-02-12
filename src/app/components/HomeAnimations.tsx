'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DURATION = 0.6;
const STAGGER = 0.08;
const Y_OFFSET = 48;

export default function HomeAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // —— Hero background: pan/zoom effect ——
      const heroBg = document.querySelector('[data-gsap-hero-bg]');
      if (heroBg) {
        gsap.fromTo(
          heroBg,
          { scale: 1.15, x: 0, y: 0 },
          {
            scale: 1,
            duration: 2,
            ease: 'power2.out',
            delay: 0.1,
          }
        );
      }

      // —— Hero: on-load timeline ——
      const hero = document.querySelector('[data-gsap="hero"]');
      if (hero) {
        const items = hero.querySelectorAll('[data-gsap-hero-item]');
        gsap.fromTo(
          items,
          { opacity: 0, y: Y_OFFSET },
          {
            opacity: 1,
            y: 0,
            duration: DURATION,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
        const card = hero.closest('[data-gsap-hero-card]');
        if (card) {
          gsap.fromTo(card, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' });
        }
      }

      // —— Nav: subtle fade down ——
      const nav = document.querySelector('nav.fixed');
      if (nav) {
        gsap.fromTo(nav, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 });
      }

      // —— Section reveals (scroll-triggered) ——
      const revealSections = document.querySelectorAll('[data-gsap="reveal"]');
      revealSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: Y_OFFSET },
          {
            opacity: 1,
            y: 0,
            duration: DURATION,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // —— Stagger children (e.g. cards, list items) ——
      const staggerContainers = document.querySelectorAll('[data-gsap="stagger"]');
      staggerContainers.forEach((container) => {
        const children = container.children;
        if (children.length === 0) return;
        gsap.fromTo(
          children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: DURATION,
            stagger: STAGGER,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });


      // —— Contact form: fade up ——
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const form = contactSection.querySelector('form');
        if (form) {
          gsap.fromTo(form, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: contactSection, start: 'top 80%', toggleActions: 'play none none none' } });
        }
      }

      // —— Animate all buttons (bronze/brown colored buttons) ——
      const buttons = document.querySelectorAll('[data-gsap-button], a[href*="/book-now"], a[href*="/order"], button[type="button"], button[type="submit"]');
      buttons.forEach((btn, index) => {
        // Initial animation on load
        gsap.fromTo(
          btn,
          { opacity: 0, scale: 0.9, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            delay: 0.3 + index * 0.05,
            ease: 'back.out(1.2)',
          }
        );

        // Hover animation with bounce
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // —— Animate bronze badges/tags ——
      const bronzeBadges = document.querySelectorAll('[data-gsap-bronze]');
      bronzeBadges.forEach((badge, index) => {
        gsap.fromTo(
          badge,
          { opacity: 0, scale: 0.8, rotation: -5 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: badge,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover pulse for badges
        badge.addEventListener('mouseenter', () => {
          gsap.to(badge, {
            scale: 1.1,
            rotation: 2,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        badge.addEventListener('mouseleave', () => {
          gsap.to(badge, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // —— Animate bronze text elements ——
      const bronzeText = document.querySelectorAll('[data-gsap-bronze-text]');
      bronzeText.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Hover pulse
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });

      // —— Animate stats numbers with bounce ——
      const stats = document.querySelectorAll('[data-gsap-hero-item] p.font-bold');
      stats.forEach((stat, index) => {
        const text = stat.textContent || '';
        if (text.match(/[\d$+]+/)) {
          gsap.fromTo(
            stat,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: 0.5 + index * 0.1,
              ease: 'elastic.out(1, 0.5)',
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
