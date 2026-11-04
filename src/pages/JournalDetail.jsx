import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { articlesData } from '../data/articlesData';
import { IconArrowLeft, IconSparkles } from '../components/Icons';

export function JournalDetail() {
  const { id } = useParams();
  const { lang, t } = useLanguage();

  const article = articlesData.find((a) => a.id === id) || articlesData[0];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container-narrow">
        
        {/* Back Link */}
        <Link
          to="/journal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#A3ADBD',
            fontSize: '0.9rem',
            marginBottom: '32px',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#5B91FF'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#A3ADBD'}
        >
          <IconArrowLeft size={16} />
          <span>{lang === 'ko' ? "기술 저널 목록으로" : "Back to Tech Journal"}</span>
        </Link>

        {/* Article Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '0.85rem', color: '#6C7A92' }}>
          <span className="badge badge-purple">{article.category}</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} {t.featuredJournal.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 2.7rem)',
          fontWeight: 800,
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          marginBottom: '24px'
        }}>
          {article.title[lang]}
        </h1>

        {/* Abstract Box */}
        <div className="glass-card" style={{
          padding: '24px 28px',
          marginBottom: '48px',
          borderLeft: '4px solid #5B91FF',
          background: 'rgba(91, 145, 255, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: '#5B91FF', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
            <IconSparkles size={14} />
            <span>Abstract</span>
          </div>
          <p style={{ fontSize: '1rem', color: '#F5F7FA', lineHeight: 1.65, fontStyle: 'italic' }}>
            {article.excerpt[lang]}
          </p>
        </div>

        {/* Article Body */}
        <div className="article-body" style={{
          color: '#D1D7E0',
          fontSize: '1.05rem',
          lineHeight: 1.85,
          letterSpacing: '-0.01em'
        }}>
          {article.content[lang].split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={index} style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#F5F7FA',
                  margin: '40px 0 16px 0',
                  paddingBottom: '8px',
                  borderBottom: '1px solid #263247'
                }}>
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }

            if (trimmed.startsWith('- ')) {
              const listItems = trimmed.split('\n').map((item, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>
                  {item.replace(/^- /, '')}
                </li>
              ));
              return (
                <ul key={index} style={{ paddingLeft: '24px', margin: '16px 0', color: '#A3ADBD' }}>
                  {listItems}
                </ul>
              );
            }

            if (/^\d+\./.test(trimmed)) {
              const listItems = trimmed.split('\n').map((item, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>
                  {item.replace(/^\d+\.\s*/, '')}
                </li>
              ));
              return (
                <ol key={index} style={{ paddingLeft: '24px', margin: '16px 0', color: '#A3ADBD' }}>
                  {listItems}
                </ol>
              );
            }

            return (
              <p key={index} style={{ marginBottom: '22px', color: '#A3ADBD' }}>
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="glass-card" style={{
          marginTop: '60px',
          padding: '28px',
          textAlign: 'center',
          background: 'rgba(16, 23, 37, 0.7)'
        }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#F5F7FA' }}>
            {lang === 'ko' ? "글에 대한 피드백이나 질문이 있으신가요?" : "Have feedback or questions on this article?"}
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#A3ADBD', marginBottom: '18px' }}>
            {lang === 'ko'
              ? "새로운 시각이나 토론은 언제나 환영합니다. 편하게 문의를 남겨주세요."
              : "Discussions and counterpoints are always welcome. Feel free to reach out via Contact."}
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.88rem' }}>
            <span>{lang === 'ko' ? "의견 보내기" : "Send Feedback"}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

