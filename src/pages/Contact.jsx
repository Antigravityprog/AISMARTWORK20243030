import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconGithub, IconMail, IconCopy, IconCheck, IconSend, IconSparkles } from '../components/Icons';

export function Contact() {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactEmail = "developer.antigravity@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container-narrow">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '44px' }}>
          <span className="section-tag">{t.contact.tag}</span>
          <h1 className="section-title">{t.contact.title}</h1>
          <p className="section-desc">{t.contact.desc}</p>
        </div>

        {/* Channels Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {/* GitHub Card */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="glass-card"
            style={{
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none'
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid #263247',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F5F7FA'
            }}>
              <IconGithub size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#5B91FF', fontWeight: 600, textTransform: 'uppercase' }}>
                Open Source
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F5F7FA' }}>
                GitHub Profile
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A3ADBD', marginTop: '2px' }}>
                @antigravity-dev
              </div>
            </div>
          </a>

          {/* Email Copy Card */}
          <div
            onClick={handleCopyEmail}
            className="glass-card"
            style={{
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(91, 145, 255, 0.12)',
                border: '1px solid rgba(91, 145, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5B91FF'
              }}>
                <IconMail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#38E1FF', fontWeight: 600, textTransform: 'uppercase' }}>
                  Email Inquiry
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#F5F7FA' }}>
                  {contactEmail}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#A3ADBD', marginTop: '2px' }}>
                  {copied ? (
                    <span style={{ color: '#38E1FF', fontWeight: 600 }}>{t.contact.copySuccess}</span>
                  ) : (
                    lang === 'ko' ? "클릭하여 주소 복사" : "Click to copy address"
                  )}
                </div>
              </div>
            </div>
            <div style={{ color: copied ? '#38E1FF' : '#A3ADBD' }}>
              {copied ? <IconCheck size={20} /> : <IconCopy size={20} />}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px' }}>
            {lang === 'ko' ? "메시지 남기기" : "Send a Direct Message"}
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#A3ADBD', marginBottom: '28px' }}>
            {lang === 'ko'
              ? "프로젝트 협업, 기술 문의, 커피챗 등 무엇이든 환영합니다."
              : "Open for technical discussions, collaborations, or casual coffee chats."}
          </p>

          {submitted ? (
            <div style={{
              padding: '32px',
              textAlign: 'center',
              background: 'rgba(91, 145, 255, 0.08)',
              borderRadius: '14px',
              border: '1px solid #5B91FF'
            }}>
              <div style={{ color: '#38E1FF', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                <IconCheck size={32} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                {lang === 'ko' ? "메시지가 전송되었습니다!" : "Message Sent Successfully!"}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#A3ADBD' }}>
                {lang === 'ko'
                  ? "내용을 확인한 후 작성해주신 이메일로 빠르게 답변드리겠습니다."
                  : "Thank you! I will get back to you at your provided email shortly."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#F5F7FA' }}>
                  {lang === 'ko' ? "이름 / 소속" : "Your Name / Organization"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'ko' ? "홍길동" : "Alex Kim"}
                  style={{
                    width: '100%',
                    background: '#080B12',
                    border: '1px solid #263247',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#F5F7FA',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#F5F7FA' }}>
                  {lang === 'ko' ? "답변받으실 이메일" : "Your Email Address"}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    background: '#080B12',
                    border: '1px solid #263247',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#F5F7FA',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: '#F5F7FA' }}>
                  {lang === 'ko' ? "메시지 내용" : "Message"}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'ko' ? "문의하실 프로젝트나 협업 내용을 자유롭게 적어주세요." : "Describe your project or questions..."}
                  style={{
                    width: '100%',
                    background: '#080B12',
                    border: '1px solid #263247',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#F5F7FA',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    lineHeight: 1.6
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 28px' }}>
                <IconSend size={16} />
                <span>{lang === 'ko' ? "메시지 보내기" : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

