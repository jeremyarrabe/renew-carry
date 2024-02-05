import { useEffect, useState, useMemo } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState('');
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      let st = window.scrollY;
      if (st > lastScrollTop) {
        setScrollPosition('downscroll');
      } else if (st < lastScrollTop) {
        setScrollPosition('upscroll');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrollPosition];
};
