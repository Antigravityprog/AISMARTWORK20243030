import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Timeline } from '../components/Timeline';
import { IconCpu, IconTerminal, IconLayers, IconSparkles, IconCheckCircle } from '../components/Icons';

export function About() {
  const { lang } = useLanguage();

  const skills = [
    {
      category: { ko: "AI & LLM 아키텍처", en: "AI & LLM Architectures" },
      items: ["Autonomous Agents (ReAct, Reflection)", "Model Context Protocol (MCP)", "RAG (Dense/Sparse Hybrid, Reranking)", "Prompt Engineering & Evaluation", "Quantization (GGUF, 4-bit SLM)"]
    },
    {
      category: { ko: "백엔드 & 시스템", en: "Backend & Systems" },
      items: ["Python", "FastAPI", "Vector DB (Qdrant, Chroma)", "Docker", "Git / GitHub Actions", "REST & JSON-RPC 2.0"]
    },
    {
      category: { ko: "프론트엔드 & 인터랙티브 웹", en: "Frontend & Interactive Web" },
      items: ["React", "JavaScript (ES6+)", "Vite", "HTML5 / Modern CSS", "Three.js / WebGL", "Netlify Deployment"]
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        
        {/* About Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-tag">About Me</span>
          <h1 className="section-title">
            {lang === 'ko' ? "AI 기술을 탐구하고 직접 구현하는 개발자" : "Exploring AI Technologies & Building Systems"}
          </h1>
          <p className="section-desc">
            {lang === 'ko'
              ? "이론적 호기심에 머무르지 않고, 복잡한 인공지능 원리를 직관적인 소프트웨어와 인터랙티브 경험으로 실체화합니다."
              : "Moving beyond passive theory to transform complex AI concepts into intuitive, functioning software applications."}
          </p>
        </div>

        {/* Narrative Section (Card) */}
        <div className="glass-card" style={{ padding: '40px 36px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge badge-blue">
              <IconSparkles size={13} />
              Identity & Mission
            </span>
          </div>

          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '16px', color: '#F5F7FA' }}>
            {lang === 'ko' ? "호기심을 코드로 검증하는 여정" : "Validating Curiosity Through Code"}
          </h3>

          <div style={{ fontSize: '0.96rem', color: '#A3ADBD', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p>
              {lang === 'ko'
                ? "저는 컴퓨터 과학을 공부하며 AI 기술의 급격한 패러다임 변화를 온몸으로 체감하고 있는 대학생 개발자입니다. LLM이 단순한 질의응답을 넘어 실제 환경과 상호작용하는 '자율 에이전트(Autonomous Agents)'로 진화하는 과정에 깊은 매력을 느끼고 있습니다."
                : "I am a computer science student experiencing firsthand the rapid evolution of artificial intelligence. I am particularly captivated by the transition from simple text prompts to autonomous agents capable of perceiving context, formulating plans, and operating real-world tools."}
            </p>
            <p>
              {lang === 'ko'
                ? "새로운 기술 문서를 읽는 것(Explore)으로 시작하여, 직접 동작하는 프로젝트를 구축하고(Build), 그 과정에서 발견한 병목과 깨달음을 개발자 커뮤니티와 투명하게 공유(Share)하는 사이클을 지향합니다."
                : "My development philosophy is anchored in a continuous loop: exploring emerging research papers and protocol specifications (Explore), architecting functional systems (Build), and openly sharing post-mortems and insights (Share)."}
            </p>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          <div className="glass-card" style={{ padding: '30px 26px' }}>
            <div style={{ color: '#5B91FF', marginBottom: '14px' }}><IconCpu size={24} /></div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
              {lang === 'ko' ? "본질 지향 학습 (Principles First)" : "Principles First"}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#A3ADBD', lineHeight: 1.6 }}>
              {lang === 'ko'
                ? "라이브러리의 API를 단순히 복사하는 대신, 어텐션 메커니즘, 임베딩 공간의 기하학적 구조, JSON-RPC 통신 규격 등 기저 원리를 집요하게 파고듭니다."
                : "Rather than treating frameworks as black boxes, I prioritize dissecting underlying mechanics—from attention weights to JSON-RPC protocols."}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '30px 26px' }}>
            <div style={{ color: '#9275FF', marginBottom: '14px' }}><IconTerminal size={24} /></div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
              {lang === 'ko' ? "실행력과 자가 검증 (Build & Verify)" : "Build & Verify"}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#A3ADBD', lineHeight: 1.6 }}>
              {lang === 'ko'
                ? "코드베이스의 신뢰도를 보장하기 위해 단위 테스트와 샌드박스 환경을 구축하고, 에이전트 시스템에 Self-Reflection 루프를 적극 도입합니다."
                : "Ensuring reproducibility through automated tests, isolated execution sandboxes, and agentic self-reflection verification loops."}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '30px 26px' }}>
            <div style={{ color: '#38E1FF', marginBottom: '14px' }}><IconLayers size={24} /></div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
              {lang === 'ko' ? "명료한 커뮤니케이션 (Accessible Sharing)" : "Accessible Sharing"}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#A3ADBD', lineHeight: 1.6 }}>
              {lang === 'ko'
                ? "기술적 난도가 높은 개념이라도 다이어그램, 시각화 도구, 단계별 코드 예시를 통해 누구나 쉽게 이해할 수 있도록 정제하여 전달합니다."
                : "Translating sophisticated technological nuances into accessible mental models, interactive diagrams, and clear technical journals."}
            </p>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span className="section-tag">Capabilities</span>
            <h3 className="section-title" style={{ fontSize: '1.8rem' }}>
              {lang === 'ko' ? "기술 스택 및 도구" : "Technical Stack & Tools"}
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {skills.map((s, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#5B91FF', marginBottom: '16px' }}>
                  {s.category[lang]}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {s.items.map((item, iIdx) => (
                    <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#F5F7FA' }}>
                      <IconCheckCircle size={15} className="" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Journey Timeline */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span className="section-tag">Milestones</span>
            <h3 className="section-title" style={{ fontSize: '1.8rem' }}>
              {lang === 'ko' ? "성장 타임라인" : "Growth Milestones"}
            </h3>
          </div>
          <Timeline />
        </div>

      </div>
    </div>
  );
}

