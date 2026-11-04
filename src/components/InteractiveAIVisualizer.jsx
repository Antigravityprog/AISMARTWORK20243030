import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconSparkles, IconTerminal, IconCpu, IconNetwork, IconCheckCircle } from './Icons';

export function InteractiveAIVisualizer() {
  const { lang } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const steps = [
    {
      id: "intent",
      icon: IconSparkles,
      title: {
        ko: "1. 의도 분석 & 컨텍스트 주입",
        en: "1. Intent & Context Ingestion"
      },
      tag: "LLM Reasoning",
      badgeColor: "blue",
      summary: {
        ko: "사용자의 프롬프트를 임베딩하고 목표(Goal), 제약사항(Constraints), 가용 도구를 구조화합니다.",
        en: "Embeds incoming prompt, parsing primary goal, system constraints, and available tool schemas."
      },
      codeSnippet: `// Step 1: Input Analysis & Prompt Framing
{
  "user_intent": "Analyze git diff and draft automated release notes",
  "temperature": 0.2,
  "context_tokens": 1420,
  "required_tools": ["mcp::git_diff", "mcp::github_releases", "verifier"]
}`
    },
    {
      id: "planning",
      icon: IconCpu,
      title: {
        ko: "2. 자율 계획 및 DAG 작업 분해",
        en: "2. Autonomous DAG Planning"
      },
      tag: "Orchestration",
      badgeColor: "purple",
      summary: {
        ko: "복잡한 복합 태스크를 의존성 순서(DAG)에 따라 순차/병렬 실행 가능한 원자적 하위 태스크로 분해합니다.",
        en: "Deconstructs compound requests into an acyclic dependency graph of atomic, executable sub-tasks."
      },
      codeSnippet: `// Step 2: Hierarchical Task Graph (DAG)
[
  { "id": "t1", "action": "fetch_commits", "deps": [] },
  { "id": "t2", "action": "filter_breaking_changes", "deps": ["t1"] },
  { "id": "t3", "action": "generate_markdown_summary", "deps": ["t2"] }
]`
    },
    {
      id: "mcp",
      icon: IconNetwork,
      title: {
        ko: "3. MCP 표준 도구 실행",
        en: "3. MCP Protocol Tool Call"
      },
      tag: "Tool Execution",
      badgeColor: "cyan",
      summary: {
        ko: "Model Context Protocol JSON-RPC 규격을 통해 샌드박스 파일 시스템 및 외부 API를 안전하게 호출합니다.",
        en: "Dispatches standardized JSON-RPC 2.0 payloads to sandboxed MCP servers and external APIs."
      },
      codeSnippet: `// Step 3: MCP JSON-RPC 2.0 Invocation
--> {
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "git_get_diff",
    "arguments": { "base": "main", "head": "feature/agent" }
  },
  "id": "req-9842"
}
<-- { "status": "200 OK", "changed_files": 4, "lines_added": 182 }`
    },
    {
      id: "reflection",
      icon: IconCheckCircle,
      title: {
        ko: "4. 자가 검증 & 최종 응답",
        en: "4. Self-Correction & Output"
      },
      tag: "Verification",
      badgeColor: "blue",
      summary: {
        ko: "실행 결과를 사전 정의된 신뢰도 기준과 비교 검증(Self-Reflection)하여 무결한 최종 산출물을 전달합니다.",
        en: "Evaluates outputs against acceptance assertions, triggering automatic recovery if errors are detected."
      },
      codeSnippet: `// Step 4: Verification & Response
{
  "verification_passed": true,
  "confidence_score": 0.98,
  "output_status": "READY_FOR_DEPLOYMENT",
  "execution_time_ms": 340
}`
    }
  ];

  // Auto-play simulation
  useEffect(() => {
    let interval;
    if (isSimulating) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsSimulating(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isSimulating, steps.length]);

  const current = steps[activeStep];

  return (
    <div className="glass-card" style={{ padding: '36px 30px', margin: '40px 0' }}>
      
      {/* Visualizer Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '32px' }}>
        <div>
          <div className="badge badge-purple" style={{ marginBottom: '8px' }}>
            Interactive Demo
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 700 }}>
            {lang === 'ko' ? "실시간 AI Agent & MCP 파이프라인 시뮬레이터" : "Real-time AI Agent & MCP Pipeline Simulator"}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#A3ADBD', marginTop: '4px' }}>
            {lang === 'ko'
              ? "단계를 클릭하거나 시뮬레이션을 실행하여 각 계층의 데이터 교환 방식을 살펴보세요."
              : "Click each phase or run the simulation to inspect real-time data flows."}
          </p>
        </div>

        <button
          onClick={() => {
            setActiveStep(0);
            setIsSimulating(!isSimulating);
          }}
          className="btn btn-secondary"
          style={{
            fontSize: '0.85rem',
            padding: '8px 18px',
            borderColor: isSimulating ? '#38E1FF' : '#263247'
          }}
        >
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: isSimulating ? '#38E1FF' : '#6C7A92',
            boxShadow: isSimulating ? '0 0 8px #38E1FF' : 'none',
            display: 'inline-block'
          }} />
          {isSimulating
            ? (lang === 'ko' ? "시뮬레이션 중단" : "Stop Simulation")
            : (lang === 'ko' ? "파이프라인 자동 실행" : "Run Simulation")}
        </button>
      </div>

      {/* Pipeline Step Tabs (Grid) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px',
        marginBottom: '28px'
      }}>
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => {
                setIsSimulating(false);
                setActiveStep(idx);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                padding: '16px 14px',
                borderRadius: '14px',
                background: isSelected ? 'rgba(91, 145, 255, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                border: isSelected ? '1px solid #5B91FF' : '1px solid #263247',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '10px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: isSelected ? 'rgba(91, 145, 255, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#5B91FF' : '#A3ADBD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <StepIcon size={16} />
                </div>
                <span className={`badge badge-${step.badgeColor}`} style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                  {step.tag}
                </span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? '#FFFFFF' : '#A3ADBD' }}>
                {step.title[lang]}
              </div>
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: '#5B91FF'
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Inspector Details View */}
      <div style={{
        background: '#0B101B',
        borderRadius: '16px',
        border: '1px solid #263247',
        padding: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        alignItems: 'center'
      }}>
        {/* Left: Explanation */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className={`badge badge-${current.badgeColor}`}>
              Stage 0{activeStep + 1}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#6C7A92', fontFamily: 'var(--font-mono)' }}>
              STATE: ACTIVE
            </span>
          </div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
            {current.title[lang]}
          </h4>
          <p style={{ fontSize: '0.92rem', color: '#A3ADBD', lineHeight: 1.7, marginBottom: '16px' }}>
            {current.summary[lang]}
          </p>
          <div style={{
            fontSize: '0.8rem',
            color: '#5B91FF',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <IconSparkles size={14} />
            <span>{lang === 'ko' ? "실시간 JSON-RPC 데이터 교환" : "Live JSON-RPC Payload Protocol"}</span>
          </div>
        </div>

        {/* Right: Code/JSON Inspector Window */}
        <div style={{
          background: '#070A10',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)'
        }}>
          {/* Window bar */}
          <div style={{
            padding: '8px 14px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F56' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27C93F' }} />
            </div>
            <span style={{ fontSize: '0.72rem', color: '#6C7A92' }}>
              agent_runtime.json
            </span>
          </div>

          <pre style={{
            padding: '16px',
            fontSize: '0.8rem',
            lineHeight: 1.5,
            color: '#38E1FF',
            overflowX: 'auto',
            maxHeight: '220px'
          }}>
            <code>{current.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

