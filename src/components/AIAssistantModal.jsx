import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconBot, IconX, IconSend, IconSparkles } from './Icons';

export function AIAssistantModal({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: lang === 'ko'
        ? "안녕하세요! AI 개발자의 인터랙티브 포트폴리오 어시스턴트입니다. 프로젝트, 기술 스택, 연구 관심사에 대해 궁금한 점을 편하게 물어보세요."
        : "Hello! I am the portfolio AI Assistant. Feel free to ask about projects, tech stack, research interests, or development philosophy."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const presets = [
    {
      ko: "주요 프로젝트(OmniAgent)에 대해 알려줘",
      en: "Tell me about the OmniAgent project",
      replyKo: "OmniAgent는 Model Context Protocol(MCP)을 준수하여 자율적으로 도구를 선택하고 복잡한 개발 작업을 수행하는 멀티 에이전트 시스템입니다. Planner, Executor, Verifier 3단계 파이프라인으로 94%의 태스크 완료율을 기록했습니다.",
      replyEn: "OmniAgent is an autonomous multi-agent system complying with the Model Context Protocol (MCP). It plans, executes, and verifies tasks through a three-stage pipeline, reaching a 94% task completion rate."
    },
    {
      ko: "Explore · Build · Share의 의미는 무엇인가요?",
      en: "What does Explore · Build · Share mean?",
      replyKo: "Explore는 빠르게 변화하는 AI 기술의 본질을 깊이 파고드는 것, Build는 단순한 지식을 넘어 실제 동작하는 소프트웨어로 구현하는 것, Share는 그 과정에서 얻은 인사이트를 투명하게 공유하는 것을 의미합니다.",
      replyEn: "Explore stands for investigating cutting-edge AI breakthroughs, Build means architecting working software solutions, and Share represents distilling complex technical concepts for the developer community."
    },
    {
      ko: "주요 기술 스택은 어떻게 되나요?",
      en: "What is your core tech stack?",
      replyKo: "Python, FastAPI, MCP Protocol, LangChain/LlamaIndex, Qdrant 벡터 DB와 함께 프론트엔드로 React, Vite, Tailwind/Modern CSS를 능숙하게 활용합니다. GitHub와 Netlify를 통해 안정적인 CI/CD 배포를 진행합니다.",
      replyEn: "Core technologies include Python, FastAPI, Model Context Protocol (MCP), vector databases (Qdrant), and modern frontend stacks (React, Vite, CSS). Projects are deployed using GitHub and Netlify CI/CD."
    }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (userText, predefinedReply) => {
    if (!userText.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: userText }];
    setMessages(newMsgs);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let aiReply = predefinedReply;
      if (!aiReply) {
        aiReply = lang === 'ko'
          ? `"${userText}"에 대한 질문 감사드립니다! 이 사이트는 AI 기술을 직접 탐구하고 구현하는 대학생 개발자의 포트폴리오입니다. 상단 내비게이션의 프로젝트(Projects)와 기술 저널(Tech Journal)에서 더욱 구체적인 코드와 아키텍처를 확인하실 수 있습니다.`
          : `Thank you for asking about "${userText}"! This website showcases practical implementations by an AI developer student. You can explore full code repositories and architecture notes in the Projects and Tech Journal sections.`;
      }
      setMessages([...newMsgs, { sender: 'ai', text: aiReply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(4, 7, 13, 0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '16px'
    }}>
      <div style={{
        background: '#0D1424',
        border: '1px solid #263247',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '560px',
        height: '620px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(91, 145, 255, 0.15)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #263247',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #5B91FF 0%, #9275FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <IconBot size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>AI Portfolio Assistant</div>
              <div style={{ fontSize: '0.72rem', color: '#38E1FF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38E1FF' }} />
                Online & Ready
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#A3ADBD',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Message Area */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '82%',
                display: 'flex',
                gap: '8px'
              }}
            >
              {m.sender === 'ai' && (
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'rgba(91, 145, 255, 0.2)',
                  border: '1px solid #5B91FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconSparkles size={12} />
                </div>
              )}
              <div style={{
                background: m.sender === 'user'
                  ? 'linear-gradient(135deg, #5B91FF 0%, #4075f0 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: m.sender === 'user' ? 'none' : '1px solid #263247',
                color: '#F5F7FA',
                padding: '10px 14px',
                borderRadius: '14px',
                fontSize: '0.88rem',
                lineHeight: 1.55,
                borderBottomRightRadius: m.sender === 'user' ? '2px' : '14px',
                borderBottomLeftRadius: m.sender === 'ai' ? '2px' : '14px'
              }}>
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div style={{ alignSelf: 'flex-start', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid #263247',
                padding: '8px 14px',
                borderRadius: '14px',
                display: 'flex',
                gap: '4px'
              }}>
                <span className="dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5B91FF', animation: 'pulseGlow 1s infinite' }} />
                <span className="dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9275FF', animation: 'pulseGlow 1s infinite 0.2s' }} />
                <span className="dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38E1FF', animation: 'pulseGlow 1s infinite 0.4s' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Suggestions */}
        <div style={{
          padding: '8px 16px',
          borderTop: '1px solid rgba(38, 50, 71, 0.5)',
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}>
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p[lang], lang === 'ko' ? p.replyKo : p.replyEn)}
              style={{
                background: 'rgba(91, 145, 255, 0.08)',
                border: '1px solid rgba(91, 145, 255, 0.25)',
                color: '#A3ADBD',
                padding: '6px 12px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F5F7FA'; e.currentTarget.style.borderColor = '#5B91FF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A3ADBD'; e.currentTarget.style.borderColor = 'rgba(91, 145, 255, 0.25)'; }}
            >
              {p[lang]}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
          style={{
            padding: '14px 16px',
            borderTop: '1px solid #263247',
            display: 'flex',
            gap: '10px',
            background: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={lang === 'ko' ? "AI 또는 프로젝트에 대해 물어보세요..." : "Ask anything about projects or AI..."}
            style={{
              flex: 1,
              background: '#080B12',
              border: '1px solid #263247',
              borderRadius: '9999px',
              padding: '10px 18px',
              color: '#F5F7FA',
              fontSize: '0.88rem',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              padding: '10px 16px',
              borderRadius: '9999px',
              width: '42px',
              height: '42px'
            }}
          >
            <IconSend size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

