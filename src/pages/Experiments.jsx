import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconSparkles, IconCpu, IconTerminal } from '../components/Icons';

export function Experiments() {
  const { lang } = useLanguage();

  // Widget 1: Token & Cost Estimator State
  const [inputText, setInputText] = useState(
    lang === 'ko'
      ? "AI 에이전트가 사용자의 요구사항을 자율적으로 분해하고 도구를 실행하여 최적의 결과를 생성합니다."
      : "Autonomous AI agents decompose complex user objectives into structured sub-tasks and execute MCP tools."
  );

  // Widget 2: Temperature Softmax Simulator State
  const [temperature, setTemperature] = useState(0.7);

  // Calculate estimated tokens
  const charCount = inputText.length;
  // Approximation: Korean ~ 1.5 chars/token, English ~ 4 chars/token
  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(inputText);
  const estimatedTokens = Math.max(1, Math.round(isKorean ? charCount / 1.5 : charCount / 3.8));

  // Compute live Softmax distribution for 5 candidate tokens
  // Base raw logits
  const rawLogits = [4.2, 3.8, 3.1, 2.0, 1.2];
  const candidateTokens = ["agent", "system", "model", "pipeline", "function"];

  const expValues = rawLogits.map((logit) => Math.exp(logit / Math.max(temperature, 0.05)));
  const sumExp = expValues.reduce((a, b) => a + b, 0);
  const probabilities = expValues.map((val) => (val / sumExp) * 100);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-tag">Interactive Sandbox</span>
          <h1 className="section-title">
            {lang === 'ko' ? "실험실 (Experiments)" : "Interactive Experiments"}
          </h1>
          <p className="section-desc">
            {lang === 'ko'
              ? "LLM의 기저 수학적 원리와 에이전트 아키텍처를 브라우저에서 직접 조작하며 체득할 수 있는 대화형 실험 공간입니다."
              : "Interactive sandboxes designed to visualize the mathematical intuition and system mechanics of foundation models."}
          </p>
        </div>

        {/* 1. Experiment 1: Temperature & Softmax Sampling Visualizer */}
        <div className="glass-card" style={{ padding: '36px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="badge badge-purple">
              <IconSparkles size={13} />
              Interactive Lab 01
            </span>
          </div>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: '#F5F7FA' }}>
            {lang === 'ko' ? "Temperature(온도) 파라미터와 Softmax 확률 시각화" : "Temperature Parameter & Softmax Sampling Distribution"}
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.6, marginBottom: '28px' }}>
            {lang === 'ko'
              ? "온도 파라미터 T가 낮을수록 가장 높은 점수의 토큰 확률이 극대화(결정론적)되며, T가 높아질수록 확률 분포가 균등(평탄화)해져 창의적/무작위성이 증가합니다."
              : "Lower temperature sharply concentrates probability on the top-ranking token (greedy), while higher temperature flattens logits across candidates (exploratory)."}
          </p>

          {/* Slider Control */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid #263247',
            borderRadius: '14px',
            padding: '20px 24px',
            marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F5F7FA' }}>
                Temperature: <span style={{ color: '#5B91FF', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>{temperature.toFixed(2)}</span>
              </label>
              <span style={{ fontSize: '0.78rem', color: '#A3ADBD' }}>
                {temperature < 0.4
                  ? (lang === 'ko' ? "매우 보수적/정확 (Deterministic)" : "Deterministic & Focused")
                  : temperature > 1.2
                  ? (lang === 'ko' ? "다양성/창의적 (High Entropy)" : "Creative & High Entropy")
                  : (lang === 'ko' ? "균형 상태 (Standard)" : "Balanced State")}
              </span>
            </div>

            <input
              type="range"
              min="0.1"
              max="2.0"
              step="0.05"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#5B91FF',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Probability Bars Visualization */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9275FF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {lang === 'ko' ? "다음 토큰 예측 확률 분포 (Next-Token Probabilities)" : "Next-Token Softmax Distribution"}
            </div>

            {candidateTokens.map((token, i) => {
              const prob = probabilities[i];
              return (
                <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: '80px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#F5F7FA' }}>
                    "{token}"
                  </span>
                  <div style={{
                    flex: 1,
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${prob}%`,
                      height: '100%',
                      background: i === 0 ? 'linear-gradient(90deg, #5B91FF, #38E1FF)' : 'linear-gradient(90deg, #9275FF, #5B91FF)',
                      borderRadius: '6px',
                      transition: 'width 0.25s ease'
                    }} />
                  </div>
                  <span style={{ width: '65px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#38E1FF', fontWeight: 600 }}>
                    {prob.toFixed(1)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Experiment 2: Token & Cost Profiler */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="badge badge-blue">
              <IconCpu size={13} />
              Interactive Lab 02
            </span>
          </div>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: '#F5F7FA' }}>
            {lang === 'ko' ? "실시간 토큰 추정 & 모델별 비용 비교기" : "Live Token Consumption & Model Cost Estimator"}
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.6, marginBottom: '20px' }}>
            {lang === 'ko'
              ? "텍스트를 입력하거나 수정하면 토큰 수와 주요 파운데이션 모델별 예상 호출 비용을 실시간으로 산출합니다."
              : "Type or paste prompt text to calculate estimated token lengths and estimated API token expenses."}
          </p>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              background: '#080B12',
              border: '1px solid #263247',
              borderRadius: '12px',
              padding: '14px 16px',
              color: '#F5F7FA',
              fontSize: '0.92rem',
              fontFamily: 'inherit',
              lineHeight: 1.6,
              outline: 'none',
              marginBottom: '24px'
            }}
          />

          {/* Results Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid #263247', padding: '16px 20px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#A3ADBD', textTransform: 'uppercase' }}>
                {lang === 'ko' ? "추정 토큰 수" : "Estimated Tokens"}
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38E1FF', marginTop: '4px' }}>
                {estimatedTokens} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#A3ADBD' }}>tokens</span>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid #263247', padding: '16px 20px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#A3ADBD', textTransform: 'uppercase' }}>
                Claude 3.5 Sonnet
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F5F7FA', marginTop: '6px' }}>
                ${((estimatedTokens * 0.003) / 1000).toFixed(6)}
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid #263247', padding: '16px 20px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#A3ADBD', textTransform: 'uppercase' }}>
                GPT-4o
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F5F7FA', marginTop: '6px' }}>
                ${((estimatedTokens * 0.005) / 1000).toFixed(6)}
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid #5B91FF', padding: '16px 20px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#5B91FF', textTransform: 'uppercase', fontWeight: 600 }}>
                On-Device SLM (Local)
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#38E1FF', marginTop: '6px' }}>
                $0.00 (Free)
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

