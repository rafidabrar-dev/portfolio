'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Renders nothing. Marks the current page or section in the sidebar and the mobile pill.
 * The links themselves are server-rendered, so navigation works without this script.
 */
export default function ActiveNav() {
  const pathname = usePathname();

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));
    if (!links.length) return;

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

    // Separate pages: highlight by route.
    if (pathname !== '/') {
      setActive(pathname.replace(/^\//, '').split('/')[0]);
      return;
    }

    // Home: highlight by the section in view.
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) if (en.isIntersecting) setActive(en.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((s) => io.observe(s));

    // At the very bottom the last section can sit above the observed band, so pin it.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive('work');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    setActive('top');

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return null;
}
