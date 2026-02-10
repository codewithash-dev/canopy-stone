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

      // —— “Areas we serve” / dark sections: slide from sides ——
      const areasSection = document.querySelector('#areas-serve');
      if (areasSection) {
        const left = areasSection.querySelector('[data-gsap="slide-left"]');
        const right = areasSection.querySelector('[data-gsap="slide-right"]');
        if (left) {
          gsap.fromTo(left, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: DURATION, ease: 'power3.out', scrollTrigger: { trigger: areasSection, start: 'top 82%', toggleActions: 'play none none none' } });
        }
        if (right) {
          gsap.fromTo(right, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: DURATION, ease: 'power3.out', scrollTrigger: { trigger: areasSection, start: 'top 82%', toggleActions: 'play none none none' } });
        }
      }

      // —— Contact form: fade up ——
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const form = contactSection.querySelector('form');
        if (form) {
          gsap.fromTo(form, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: contactSection, start: 'top 80%', toggleActions: 'play none none none' } });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
