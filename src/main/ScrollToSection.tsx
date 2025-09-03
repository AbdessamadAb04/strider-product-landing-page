import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToSection = (hash: string) => {
  if (!hash) return;
  const el = document.getElementById(hash.replace('#', ''));
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const ScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      // Wait for DOM to update
      setTimeout(() => scrollToSection(hash), 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToSection;
