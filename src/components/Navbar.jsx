import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { IconSparkles, IconBot, IconGlobe, IconMenu, IconX } from './Icons';

export function Navbar({ onOpenAssistant }) {
  const { lang, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/projects', label: t.nav.projects },
    { path: '/journal', label: t.nav.journal },
    { path: '/experiments', label: t.nav.experiments },
    { path: '/contact', label: t.nav.contact }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(8, 11, 18, 0.88)' : 'rgba(8, 11, 18, 0.5)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(38, 50, 71, 0.7)' : '1px solid transparent',
      padding: '14px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #5B91FF 0%, #9275FF 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(91, 145, 255, 0.4)'
          }}>
            <IconSparkles size={18} className="" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#F5F7FA' }}>
              ANTIGRAVITY<span style={{ color: '#5B91FF' }}>.AI</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: '#A3ADBD', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Explore · Build · Share
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '0.92rem',
                fontWeight: isActive(link.path) ? 600 : 500,
                color: isActive(link.path) ? '#5B91FF' : '#A3ADBD',
                position: 'relative',
                transition: 'color 0.2s ease',
                padding: '6px 2px'
              }}
              onMouseEnter={(e) => { if (!isActive(link.path)) e.target.style.color = '#F5F7FA'; }}
              onMouseLeave={(e) => { if (!isActive(link.path)) e.target.style.color = '#A3ADBD'; }}
            >
              {link.label}
              {isActive(link.path) && (
                <span style={{
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #5B91FF, #9275FF)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Action Tools: Language switch + AI Assistant Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            title={lang === 'ko' ? "Switch to English" : "한국어로 변경"}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid #263247',
              color: '#F5F7FA',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#5B91FF'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#263247'}
          >
            <IconGlobe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={onOpenAssistant}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '7px 16px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, rgba(91, 145, 255, 0.15) 0%, rgba(146, 117, 255, 0.15) 100%)',
              border: '1px solid rgba(91, 145, 255, 0.35)',
              color: '#F5F7FA',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(91, 145, 255, 0.4)';
              e.currentTarget.style.borderColor = '#5B91FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(91, 145, 255, 0.35)';
            }}
          >
            <IconBot size={16} />
            <span className="assistant-btn-label">{t.nav.assistant}</span>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#38E1FF',
              boxShadow: '0 0 8px #38E1FF'
            }} />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-burger-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#F5F7FA',
              cursor: 'pointer',
              padding: '6px'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(8, 11, 18, 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '32px 24px',
          gap: '20px',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '1.25rem',
                fontWeight: isActive(link.path) ? 700 : 500,
                color: isActive(link.path) ? '#5B91FF' : '#A3ADBD',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive Inline CSS for desktop nav display */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger-btn {
            display: none !important;
          }
        }
        @media (max-width: 819px) {
          .mobile-burger-btn {
            display: flex !important;
          }
          .assistant-btn-label {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

