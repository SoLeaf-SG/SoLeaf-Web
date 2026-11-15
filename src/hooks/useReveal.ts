import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Adds `is-visible` to `.reveal` elements as they scroll into view.
 * Content is fully visible without JavaScript and for reduced-motion users
 * (see `.js .reveal` and the prefers-reduced-motion block in index.css).
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const replayAnimation = entry.target.hasAttribute('data-replay-animation');
          if (replayAnimation) entry.target.classList.toggle('is-in-view', entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (!replayAnimation) observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
