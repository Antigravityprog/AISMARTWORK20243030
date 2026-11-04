import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import { articlesData } from '../data/articlesData';
import { InteractiveAIVisualizer } from '../components/InteractiveAIVisualizer';
import { Timeline } from '../components/Timeline';
import {
  IconSparkles,
  IconArrowRight,
  IconExternalLink,
  IconGithub,
  IconBot,
  IconCpu,
  IconTerminal,
  IconLayers
} from '../components/Icons';

export function Home({ onOpenAssistant }) {
  const { lang, t } = useLanguage();
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const featuredArticles = articlesData.slice(0, 2);

  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '90px 0 80px 0',
        overflow: 'hidden'
      }}>
        {/* Abstract Glowing Backdrop Background */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(91, 145, 255, 0.18) 0%, rgba(146, 117, 255, 0.08) 50%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          
          {/* Badge */}
          <div className="animate-fade-in" style={{ display: 'inline-flex', marginBottom: '22px' }}>
            <span className="badge badge-blue">
              <IconSparkles size={13} />
              {t.hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            maxWidth: '920px',
            margin: '0 auto 20px auto'
          }}>
            {t.hero.title}
            <br />
            <span className="text-gradient-purple">{t.hero.highlight}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.22rem)',
            color: '#A3ADBD',
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            lineHeight: 1.65
          }}>
            {t.hero.desc}
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            marginBottom: '60px'
          }}>
            <Link to="/projects" className="btn btn-primary">
              <span>{t.hero.ctaProjects}</span>
              <IconArrowRight size={16} />
            </Link>
            <Link to="/journal" className="btn btn-secondary">
              <span>{t.hero.ctaJournal}</span>
            </Link>
            <button onClick={onOpenAssistant} className="btn btn-secondary" style={{ borderColor: 'rgba(91, 145, 255, 0.3)' }}>
              <IconBot size={16} />
              <span>{t.hero.ctaAssistant}</span>
            </button>
          </div>

          {/* Key Metrics / Highlights Strip */}
          <div className="glass-card" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            padding: '24px 20px',
            gap: '20px',
            maxWidth: '860px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#5B91FF' }}>{t.hero.metric1Val}</div>
              <div style={{ fontSize: '0.82rem', color: '#A3ADBD', marginTop: '2px' }}>{t.hero.metric1Label}</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(38, 50, 71, 0.6)', borderRight: '1px solid rgba(38, 50, 71, 0.6)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#9275FF' }}>{t.hero.metric2Val}</div>
              <div style={{ fontSize: '0.82rem', color: '#A3ADBD', marginTop: '2px' }}>{t.hero.metric2Label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38E1FF' }}>{t.hero.metric3Val}</div>
              <div style={{ fontSize: '0.82rem', color: '#A3ADBD', marginTop: '2px' }}>{t.hero.metric3Label}</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THREE PILLARS (Explore · Build · Share) */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.pillars.tag}</span>
            <h2 className="section-title">{t.pillars.title}</h2>
            <p className="section-desc">{t.pillars.desc}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {/* Pillar 1: Explore */}
            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(91, 145, 255, 0.15)',
                border: '1px solid rgba(91, 145, 255, 0.3)',
                color: '#5B91FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <IconCpu size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#F5F7FA' }}>
                {t.pillars.exploreTitle}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.65 }}>
                {t.pillars.exploreDesc}
              </p>
            </div>

            {/* Pillar 2: Build */}
            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(146, 117, 255, 0.15)',
                border: '1px solid rgba(146, 117, 255, 0.3)',
                color: '#9275FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <IconTerminal size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#F5F7FA' }}>
                {t.pillars.buildTitle}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.65 }}>
                {t.pillars.buildDesc}
              </p>
            </div>

            {/* Pillar 3: Share */}
            <div className="glass-card" style={{ padding: '36px 28px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(56, 225, 255, 0.15)',
                border: '1px solid rgba(56, 225, 255, 0.3)',
                color: '#38E1FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <IconLayers size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#F5F7FA' }}>
                {t.pillars.shareTitle}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.65 }}>
                {t.pillars.shareDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE AI VISUALIZER */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.interactiveAI.tag}</span>
            <h2 className="section-title">{t.interactiveAI.title}</h2>
            <p className="section-desc">{t.interactiveAI.desc}</p>
          </div>

          <InteractiveAIVisualizer />
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '16px' }}>
            <div>
              <span className="section-tag">{t.featuredProjects.tag}</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>{t.featuredProjects.title}</h2>
            </div>
            <Link to="/projects" className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
              <span>{t.featuredProjects.viewAll}</span>
              <IconArrowRight size={14} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {featuredProjects.map((p) => (
              <div key={p.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-purple">{p.category}</span>
                  <span className="badge badge-blue">{p.status}</span>
                </div>

                <h3 style={{ fontSize: '1.28rem', fontWeight: 700, marginBottom: '10px' }}>
                  {p.title[lang]}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#A3ADBD', lineHeight: 1.6, flex: 1, marginBottom: '18px' }}>
                  {p.summary[lang]}
                </p>

                {/* Metrics Highlight */}
                <div style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'rgba(91, 145, 255, 0.08)',
                  border: '1px solid rgba(91, 145, 255, 0.2)',
                  fontSize: '0.8rem',
                  color: '#38E1FF',
                  marginBottom: '18px'
                }}>
                  {p.metrics[lang]}
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {p.techStack.map((tech, i) => (
                    <span
                      key={i}
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
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #263247', paddingTop: '16px' }}>
                  <Link to={`/projects/${p.id}`} style={{ fontSize: '0.85rem', color: '#5B91FF', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{lang === 'ko' ? "상세 보기" : "Details"}</span>
                    <IconArrowRight size={14} />
                  </Link>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ color: '#A3ADBD' }} title="GitHub">
                        <IconGithub size={18} />
                      </a>
                    )}
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" rel="noreferrer" style={{ color: '#A3ADBD' }} title="Live Demo">
                        <IconExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED ARTICLES */}
      <section style={{ padding: '60px 0', background: 'rgba(16, 23, 37, 0.3)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '16px' }}>
            <div>
              <span className="section-tag">{t.featuredJournal.tag}</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>{t.featuredJournal.title}</h2>
            </div>
            <Link to="/journal" className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
              <span>{t.featuredJournal.viewAll}</span>
              <IconArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {featuredArticles.map((art) => (
              <div key={art.id} className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '0.8rem', color: '#6C7A92' }}>
                  <span className="badge badge-subtle">{art.category}</span>
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime} {t.featuredJournal.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>
                  <Link to={`/journal/${art.id}`} style={{ color: '#F5F7FA', transition: 'color 0.2s' }}>
                    {art.title[lang]}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#A3ADBD', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>
                  {art.excerpt[lang]}
                </p>

                <Link to={`/journal/${art.id}`} style={{ fontSize: '0.88rem', color: '#5B91FF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>{t.featuredJournal.readMore}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GROWTH TIMELINE PREVIEW */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.growthTimeline.tag}</span>
            <h2 className="section-title">{t.growthTimeline.title}</h2>
            <p className="section-desc">{t.growthTimeline.desc}</p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* 7. CONTACT CTA BANNER */}
      <section style={{ padding: '60px 0 20px 0' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '50px 36px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(21, 30, 46, 0.9) 0%, rgba(16, 23, 37, 0.95) 100%)',
            border: '1px solid #5B91FF',
            boxShadow: '0 0 50px rgba(91, 145, 255, 0.15)'
          }}>
            <span className="section-tag">{t.contact.tag}</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '14px' }}>
              {t.contact.title}
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#A3ADBD', maxWidth: '620px', margin: '0 auto 30px auto', lineHeight: 1.6 }}>
              {t.contact.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>{lang === 'ko' ? "문의하기" : "Contact Me"}</span>
                <IconArrowRight size={16} />
              </Link>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
                <IconGithub size={18} />
                <span>{t.contact.githubBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

