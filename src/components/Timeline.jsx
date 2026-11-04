import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/timelineData';
import { IconSparkles } from './Icons';

export function Timeline() {
  const { lang } = useLanguage();

  return (
    <div style={{ position: 'relative', padding: '20px 0' }}>
      
      {/* Central Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '24px',
        width: '2px',
        background: 'linear-gradient(180deg, #5B91FF 0%, #9275FF 50%, rgba(38, 50, 71, 0.2) 100%)'
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              position: 'relative',
              paddingLeft: '64px'
            }}
          >
            {/* Timeline Node Icon/Dot */}
            <div style={{
              position: 'absolute',
              left: '14px',
              top: '4px',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: '#080B12',
              border: '2px solid #5B91FF',
              boxShadow: '0 0 10px rgba(91, 145, 255, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38E1FF' }} />
            </div>

            {/* Content Card */}
            <div className="glass-card" style={{ flex: 1, padding: '22px 24px' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <span className="badge badge-blue">
                  {lang === 'ko' ? item.period : item.periodEn}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9275FF', fontWeight: 600 }}>
                  {item.tag}
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: '#F5F7FA' }}>
                {item.title[lang]}
              </h4>

              <p style={{ fontSize: '0.9rem', color: '#A3ADBD', lineHeight: 1.6, marginBottom: '14px' }}>
                {item.description[lang]}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid #263247',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      color: '#A3ADBD'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

