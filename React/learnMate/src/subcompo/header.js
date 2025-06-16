import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import the CSS Module
import styles from './header.module.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) &&
          menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    // Use styles.className for single classes
    <header className={styles['site-header']}>
      <div className={styles['site-branding']}>
        <Link to="/">
          <img src="/learnmate logo.svg" alt="learnMate Logo" className={styles.logo} />
          
        </Link>
      </div>

      <button
        className={styles['hamburger-button']}
        onClick={toggleMobileMenu}
        aria-controls="main-nav-menu"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        ref={menuButtonRef}
      >
        <div className={styles['hamburger-line']}></div>
        <div className={styles['hamburger-line']}></div>
        <div className={styles['hamburger-line']}></div>
      </button>

      <nav
        id="main-nav-menu"
        // Use template literals for conditional classes and multiple classes
        className={`${styles['main-nav']} ${isMobileMenuOpen ? styles['is-open'] : ''}`}
        ref={navRef}
      >
        <ul>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link></li>
           <li><Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link></li>
          <li><Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</Link></li>
          <li><Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link></li>
         
        </ul>
        {/* <div className={styles['header-actions']}>
          <button className={styles['login-button']}>Login</button>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;