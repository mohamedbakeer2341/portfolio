import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'philosophy', 'experience', 'skills', 'architecture', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Timeline', href: '#timeline' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
            <div className="brand-terminal-icon">
              <Terminal size={20} />
            </div>
            <div className="brand-text">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-title">Backend Developer</span>
            </div>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="theme-toggle-icon sun-icon" />
              ) : (
                <Moon size={18} className="theme-toggle-icon moon-icon" />
              )}
            </button>

            <div className="status-indicator" title="Open to full-time engineering opportunities">
              <span className="status-dot"></span>
              <span>Available for Roles</span>
            </div>

            <button
              className="btn btn-outline btn-sm"
              onClick={onContactClick}
              id="nav-contact-btn"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}

        <div className="mobile-theme-row">
          <span>Theme ({theme === 'dark' ? 'Dark' : 'Light'})</span>
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-toggle-icon sun-icon" />
            ) : (
              <Moon size={18} className="theme-toggle-icon moon-icon" />
            )}
          </button>
        </div>

        <button
          className="btn btn-primary"
          style={{ marginTop: '16px' }}
          onClick={() => {
            setMobileMenuOpen(false);
            onContactClick();
          }}
        >
          <span>Contact Mohamed</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </>
  );
};
