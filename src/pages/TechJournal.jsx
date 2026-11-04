import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { articlesData } from '../data/articlesData';
import { IconArrowRight } from '../components/Icons';

export function TechJournal() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Agents', 'RAG & LLM'];

  const filteredArticles = selectedCategory === 'All'
    ? articlesData
    : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-tag">Insights & Research</span>
          <h1 className="section-title">
            {lang === 'ko' ? "기술 저널" : "Tech Journal"}
          </h1>
          <p className="section-desc">
            {lang === 'ko'
              ? "AI 기술을 연구하고 실험하며 깨달은 핵심 아키텍처와 엔지니어링 통찰을 기록합니다."
              : "Technical reflections, architectural analyses, and structured breakdowns of evolving AI systems."}
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '48px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: selectedCategory === cat ? 'linear-gradient(135deg, #5B91FF 0%, #4075f0 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: selectedCategory === cat ? '#FFFFFF' : '#A3ADBD',
                border: selectedCategory === cat ? '1px solid #5B91FF' : '1px solid #263247',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards List */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {filteredArticles.map((art) => (
            <div key={art.id} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', fontSize: '0.82rem', color: '#6C7A92' }}>
                <span className="badge badge-purple">{art.category}</span>
                <span>{art.date}</span>
                <span>•</span>
                <span>{art.readTime} {t.featuredJournal.readTime}</span>
              </div>

              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '14px', lineHeight: 1.35 }}>
                <Link to={`/journal/${art.id}`} style={{ color: '#F5F7FA' }}>
                  {art.title[lang]}
                </Link>
              </h2>

              <p style={{ fontSize: '0.94rem', color: '#A3ADBD', lineHeight: 1.65, flex: 1, marginBottom: '24px' }}>
                {art.excerpt[lang]}
              </p>

              <div style={{ borderTop: '1px solid #263247', paddingTop: '18px' }}>
                <Link
                  to={`/journal/${art.id}`}
                  style={{
                    fontSize: '0.9rem',
                    color: '#5B91FF',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{t.featuredJournal.readMore}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

