'use client';

import { useEffect } from 'react';

/**
 * Renders nothing. Marks the current section's link in the sidebar and the mobile pill.
 * The links themselves are server-rendered, so the page works without this script.
 */
export default function ActiveNav() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    if (!links.length || !sections.length) return;

    const setActive = (id: string) => {
      // Sections with no nav link (like the focus rows) keep the previous highlight instead of clearing it.
      if (!links.some((a) => a.dataset.nav === id)) return;
      for (const a of links) {
        const on = a.dataset.nav === id;
        a.classList.toggle('active', on);
        if (on) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) if (en.isIntersecting) setActive(en.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((s) => io.observe(s));

    // At the very bottom the last section can sit above the observed band, so pin it.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive('contact');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    setActive('top');

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
