import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link'; // Using HashLink for scroll 
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#top', isHash: true },
    { name: 'Full Menu', path: '/menu', isHash: false },
    { name: 'Our Story', path: '/#about', isHash: true },
    { name: 'Book Table', path: '/booking', isHash: false },
  ];

  return (
    <nav className={`navbar ${scrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <HashLink smooth to="/#top" className="logo">
          <Coffee className="logo-icon" />
          <span>Cafe Aura</span>
        </HashLink>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            link.isHash ? (
              <HashLink key={link.name} smooth to={link.path} className="nav-link">
                {link.name}
              </HashLink>
            ) : (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.name}
              </Link>
            )
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween" }}
            >
              {navLinks.map((link) => (
                link.isHash ? (
                  <HashLink
                    key={link.name}
                    smooth
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
