import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import { IconArrowRight, IconGithub, IconExternalLink, IconSparkles } from '../components/Icons';

export function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI Agents', 'RAG & LLM', 'Interactive Tech', 'Developer Tools'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-tag">Portfolio</span>
          <h1 className="section-title">
            {lang === 'ko' ? "프로젝트 갤러리" : "Featured Projects"}
          </h1>
          <p className="section-desc">
            {lang === 'ko'
              ? "이론에서 멈추지 않고 실제로 구현하여 문제를 해결한 대표 결과물들입니다."
              : "Software implementations designed to validate emerging AI paradigms and solve concrete engineering problems."}
          </p>
        </div>

        {/* Filter Pills */}
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
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: filter === cat ? 'linear-gradient(135deg, #5B91FF 0%, #4075f0 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: filter === cat ? '#FFFFFF' : '#A3ADBD',
                border: filter === cat ? '1px solid #5B91FF' : '1px solid #263247',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {filteredProjects.map((p) => (
            <div key={p.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '32px' }}>
              
              {/* Category & Status badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge badge-purple">{p.category}</span>
                <span className={`badge ${p.status === 'Completed' ? 'badge-blue' : p.status === 'In Progress' ? 'badge-cyan' : 'badge-subtle'}`}>
                  {p.status}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.35 }}>
                <Link to={`/projects/${p.id}`} style={{ color: '#F5F7FA' }}>
                  {p.title[lang]}
                </Link>
              </h3>

              {/* Summary */}
              <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>
                {p.summary[lang]}
              </p>

              {/* Metrics Box */}
              <div style={{
                padding: '10px 14px',
                borderRadius: '10px',
                background: 'rgba(91, 145, 255, 0.08)',
                border: '1px solid rgba(91, 145, 255, 0.2)',
                fontSize: '0.82rem',
                color: '#38E1FF',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <IconSparkles size={14} />
                <span>{p.metrics[lang]}</span>
              </div>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {p.techStack.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid #263247',
                      padding: '3px 9px',
                      borderRadius: '4px',
                      color: '#A3ADBD'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #263247',
                paddingTop: '18px'
              }}>
                <Link
                  to={`/projects/${p.id}`}
                  style={{
                    fontSize: '0.88rem',
                    color: '#5B91FF',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{lang === 'ko' ? "프로젝트 상세" : "Project Case Study"}</span>
                  <IconArrowRight size={14} />
                </Link>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ color: '#A3ADBD', transition: 'color 0.2s' }} title="GitHub Repository">
                      <IconGithub size={19} />
                    </a>
                  )}
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" style={{ color: '#A3ADBD', transition: 'color 0.2s' }} title="Live Deployment">
                      <IconExternalLink size={19} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

