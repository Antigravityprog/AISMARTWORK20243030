import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { IconSparkles, IconGithub, IconMail } from './Icons';

export function Footer() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid #263247',
      background: '#0B101B',
      padding: '60px 0 36px 0',
      marginTop: '100px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #5B91FF 0%, #9275FF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconSparkles size={16} />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#F5F7FA' }}>
                ANTIGRAVITY<span style={{ color: '#5B91FF' }}>.AI</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#A3ADBD', lineHeight: 1.6, maxWidth: '320px' }}>
              {lang === 'ko'
                ? "AI 기술의 기저 원리를 집요하게 탐구하고, 실질적인 소프트웨어로 구현하여 지식을 공유합니다."
                : "Exploring underlying AI mechanics, building functional software, and sharing actionable insights."}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5B91FF', marginBottom: '16px' }}>
              {lang === 'ko' ? "내비게이션" : "Navigation"}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" style={{ color: '#A3ADBD', fontSize: '0.9rem', transition: 'color 0.2s' }}>{t.nav.home}</Link></li>
              <li><Link to="/about" style={{ color: '#A3ADBD', fontSize: '0.9rem', transition: 'color 0.2s' }}>{t.nav.about}</Link></li>
              <li><Link to="/projects" style={{ color: '#A3ADBD', fontSize: '0.9rem', transition: 'color 0.2s' }}>{t.nav.projects}</Link></li>
              <li><Link to="/journal" style={{ color: '#A3ADBD', fontSize: '0.9rem', transition: 'color 0.2s' }}>{t.nav.journal}</Link></li>
              <li><Link to="/experiments" style={{ color: '#A3ADBD', fontSize: '0.9rem', transition: 'color 0.2s' }}>{t.nav.experiments}</Link></li>
            </ul>
          </div>

          {/* Col 3: Core Philosophy */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9275FF', marginBottom: '16px' }}>
              {lang === 'ko' ? "핵심 가치" : "Core Values"}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.88rem', color: '#F5F7FA' }}>
                <span style={{ color: '#5B91FF', fontWeight: 700 }}>• Explore</span> — Emerging AI Tech
              </div>
              <div style={{ fontSize: '0.88rem', color: '#F5F7FA' }}>
                <span style={{ color: '#9275FF', fontWeight: 700 }}>• Build</span> — Working Systems
              </div>
              <div style={{ fontSize: '0.88rem', color: '#F5F7FA' }}>
                <span style={{ color: '#38E1FF', fontWeight: 700 }}>• Share</span> — Clear Knowledge
              </div>
            </div>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38E1FF', marginBottom: '16px' }}>
              {lang === 'ko' ? "소셜 & 링크" : "Connect"}
            </h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid #263247',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5F7FA',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#5B91FF'; e.currentTarget.style.color = '#5B91FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#263247'; e.currentTarget.style.color = '#F5F7FA'; }}
                aria-label="GitHub Profile"
              >
                <IconGithub size={18} />
              </a>
              <Link
                to="/contact"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid #263247',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5F7FA',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#9275FF'; e.currentTarget.style.color = '#9275FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#263247'; e.currentTarget.style.color = '#F5F7FA'; }}
                aria-label="Contact Email"
              >
                <IconMail size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(38, 50, 71, 0.5)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#6C7A92'
        }}>
          <div>
            © {currentYear} AI Developer Portfolio. {t.footer.rights}
          </div>
          <div>
            {t.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
}

