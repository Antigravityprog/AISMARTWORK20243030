import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import { IconArrowLeft, IconGithub, IconExternalLink, IconSparkles, IconCheckCircle } from '../components/Icons';

export function ProjectDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();

  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '60px' }}>
      <div className="container-narrow">
        
        {/* Back Button */}
        <Link
          to="/projects"
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
          <span>{lang === 'ko' ? "프로젝트 목록으로 돌아가기" : "Back to Projects"}</span>
        </Link>

        {/* Title Header */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            <span className="badge badge-purple">{project.category}</span>
            <span className="badge badge-blue">{project.status}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: '16px' }}>
            {project.title[lang]}
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#A3ADBD', lineHeight: 1.7, marginBottom: '24px' }}>
            {project.summary[lang]}
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <IconGithub size={18} />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                <IconExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="glass-card" style={{
          padding: '24px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(91, 145, 255, 0.08)',
          borderColor: 'rgba(91, 145, 255, 0.3)'
        }}>
          <IconSparkles size={20} className="" />
          <div>
            <div style={{ fontSize: '0.78rem', color: '#A3ADBD', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {lang === 'ko' ? "핵심 성과 지표" : "Key Metrics"}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38E1FF', marginTop: '2px' }}>
              {project.metrics[lang]}
            </div>
          </div>
        </div>

        {/* Structured Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          
          {/* 1. Problem & Challenge */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#5B91FF' }}>
              {lang === 'ko' ? "01. 해결하고자 한 문제 (Problem)" : "01. Problem Definition"}
            </h3>
            <p style={{ fontSize: '0.96rem', color: '#A3ADBD', lineHeight: 1.7 }}>
              {project.problem[lang]}
            </p>
          </div>

          {/* 2. Architecture & Solution */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#9275FF' }}>
              {lang === 'ko' ? "02. 해결 방안 및 아키텍처 (Solution & Architecture)" : "02. Architectural Solution"}
            </h3>
            <p style={{ fontSize: '0.96rem', color: '#A3ADBD', lineHeight: 1.7, marginBottom: '20px' }}>
              {project.solution[lang]}
            </p>

            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#F5F7FA', marginBottom: '12px' }}>
              {lang === 'ko' ? "주요 구현 특징" : "Key Engineering Highlights"}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#A3ADBD' }}>
                  <IconCheckCircle size={16} />
                  <span>{h[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Tech Stack Deep Dive */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#38E1FF' }}>
              {lang === 'ko' ? "03. 적용 기술 스택 (Technologies Used)" : "03. Technologies Used"}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid #263247',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    color: '#F5F7FA'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

