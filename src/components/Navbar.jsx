import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force solid white navbar styles on subpages, but use scroll-transition on homepage
  const showSolidHeader = !isHomePage || isScrolled;

  return (
    <header className={`header-nav ${showSolidHeader ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-container" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logoImg} alt="Hexaweb Studio Logo" className="logo-img" />
        </Link>

        {/* Mobile menu toggle */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Menu Items */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end // Only highlight active if path matches URL exactly
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="nav-cta">
            <Link 
              to="/contact" 
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
