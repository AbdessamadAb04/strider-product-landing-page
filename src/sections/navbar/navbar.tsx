
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If at the very top of the page, show navbar
      if (currentScrollY <= 10) {
        setIsVisible(true);
      }
      // If scrolling up and not at the top, show navbar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // If scrolling down and not at the top, hide navbar
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
  <span
    className="logo"
    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
    onClick={() => window.dispatchEvent(new Event('strider-logo-click'))}
  >
    STRIDER
  </span>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/#overview" className="nav-item">Overview</Link>
          <Link to="/#testimonials" className="nav-item">Testimonials</Link>
          <Link to="/#zpattern" className="nav-item">Specs</Link>
          <Link to="/about" className="nav-item">About</Link>
        </div>

        <Link to="/product">
          <button className="ctaButton">Get It Now</button>
        </Link>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
