import { useEffect } from 'react';

/**
 * Custom React hook that sets up an IntersectionObserver to trigger scroll reveal animations
 * on elements with the 'reveal' class by adding the 'active' class.
 * @param {Array} dependencies Optional dependencies to trigger re-observation (e.g. active tabs changing)
 */
export default function useScrollReveal(dependencies = []) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // trigger slightly before entering the full screen
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // One-shot animation: unobserve once revealed
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Allow React time to render DOM nodes
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, dependencies);
}
