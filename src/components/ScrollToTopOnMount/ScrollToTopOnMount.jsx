import { useEffect } from 'react';

/**
 * Helper component that resets the scroll coordinates to the top of the page on mount.
 * Useful for React Router page transitions.
 */
export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Reset instantly on page change
    });
  }, []);

  return null;
}
