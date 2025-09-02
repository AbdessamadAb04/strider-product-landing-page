import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  // Listen for custom event to force scroll to top even if already on home
  useEffect(() => {
    const handler = () => {
      if (pathname === '/') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else {
        navigate('/');
      }
    };
    window.addEventListener('strider-logo-click', handler);
    return () => window.removeEventListener('strider-logo-click', handler);
  }, [pathname, navigate]);

  return null;
};

export default ScrollToTop;
