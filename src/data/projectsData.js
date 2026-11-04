export const projectsData = [
  {
    id: "omni-agent-mcp",
    title: {
      ko: "OmniAgent: MCP 기반 자율 멀티 에이전트 시스템",
      en: "OmniAgent: MCP-based Autonomous Multi-Agent System"
    },
    summary: {
      ko: "Model Context Protocol(MCP)을 준수하여 외부 개발 도구, 브라우징, 데이터베이스를 능동적으로 제어하는 자율 에이전트 오케스트레이터입니다.",
      en: "An autonomous multi-agent orchestrator integrating the Model Context Protocol (MCP) to automate developer workflows and external tool interactions."
    },
    category: "AI Agents",
    status: "Completed", // Completed, In Progress, Planning
    featured: true,
    techStack: ["Python", "FastAPI", "Anthropic Claude API", "MCP Protocol", "Docker"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.netlify.app",
    metrics: {
      ko: "태스크 완료율 94.2% · 도구 호출 지연시간 32% 절감",
      en: "94.2% Task Success Rate · 32% Tool Call Latency Reduction"
    },
    problem: {
      ko: "기존의 단일 LLM 프롬프팅은 복합적인 도구 연동과 장기 실행 태스크에서 문맥 손실 및 환각(Hallucination) 현상이 빈번했습니다.",
      en: "Single-prompt LLM pipelines frequently suffer from context overflow and hallucination during multi-step tool executions."
    },
    solution: {
      ko: "MCP 표준 규격을 준수한 모듈형 툴 서버와 Planner-Executor-Critic 3단계 역할 분담 구조를 설계하여 안정성과 재시도 가능성을 확보했습니다.",
      en: "Implemented an MCP-compliant modular server with a Planner-Executor-Critic pattern, achieving robust retry logic and state persistence."
    },
    highlights: [
      { ko: "표준 MCP 툴 프로토콜 완전 지원", en: "Full support for standard Model Context Protocol" },
      { ko: "AST 기반 자동 코드 분석 및 리팩토링", en: "AST-based automatic code inspection and refactoring" },
      { ko: "에러 발생 시 자가 치유(Self-Correction) 피드백 루프", en: "Self-correcting execution feedback loop" }
    ]
  },
  {
    id: "rag-lens-hybrid",
    title: {
      ko: "RAG-Lens: 하이브리드 지식 검색 증강 엔진",
      en: "RAG-Lens: Hybrid Vector & Sparse Retrieval Engine"
    },
    summary: {
      ko: "Dense Vector 임베딩과 BM25 희소 검색을 결합하고 Cross-Encoder Reranker로 검색 정확도를 극대화한 RAG 파이프라인입니다.",
      en: "A high-precision RAG pipeline combining dense vector embeddings with BM25 sparse search and cross-encoder reranking."
    },
    category: "RAG & LLM",
    status: "Completed",
    featured: true,
    techStack: ["Python", "Qdrant", "HuggingFace Transformers", "LangChain", "Next.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.netlify.app",
    metrics: {
      ko: "정확도(Recall@5) 89.4% 달성 · 검색 응답 180ms",
      en: "89.4% Recall@5 · 180ms average retrieval response"
    },
    problem: {
      ko: "순수 벡터 유사도 기반 검색은 고유명사나 코드 식별자 같은 정확한 키워드 일치 검색에서 취약점이 발생했습니다.",
      en: "Pure vector similarity often fails to accurately retrieve exact identifiers, keywords, or domain codes."
    },
    solution: {
      ko: "Reciprocal Rank Fusion(RRF) 알고리즘을 도입하여 희소/밀집 검색 점수를 통합하고 메타데이터 필터링을 결합했습니다.",
      en: "Applied Reciprocal Rank Fusion (RRF) to merge sparse and dense retrieval ranks with dynamic metadata filtering."
    },
    highlights: [
      { ko: "하이브리드 검색 및 Cross-Encoder 리랭킹", en: "Hybrid retrieval & Cross-Encoder re-ranking" },
      { ko: "문맥 보존 청킹(Context-Aware Chunking)", en: "Context-preserving intelligent chunking" },
      { ko: "실시간 벡터 공간 시각화 지원", en: "Real-time vector space visual inspector" }
    ]
  },
  {
    id: "llm-cognitive-visualizer",
    title: {
      ko: "LLM Cognitive Visualizer: 신경망 추론 시각화 도구",
      en: "LLM Cognitive Visualizer: Neural Reasoning Inspector"
    },
    summary: {
      ko: "LLM의 토큰 생성 확률 분포와 어텐션 가중치 흐름을 브라우저에서 실시간으로 대화형 3D 노드로 탐색할 수 있는 프론트엔드 시각화 도구입니다.",
      en: "An interactive browser-based visualization tool illustrating token probability distributions and attention heatmaps."
    },
    category: "Interactive Tech",
    status: "In Progress",
    featured: true,
    techStack: ["React", "Three.js", "Web Audio API", "WebAssembly", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.netlify.app",
    metrics: {
      ko: "60 FPS 렌더링 유지 · WebGL 가속",
      en: "Maintains 60 FPS · WebGL-accelerated rendering"
    },
    problem: {
      ko: "비전공자 및 초심자에게 LLM의 다음 토큰 예측 원리와 온도(Temperature) 파라미터의 영향을 직관적으로 설명하기 어려웠습니다.",
      en: "Explaining next-token sampling and temperature dynamics visually to learners was previously abstract and non-intuitive."
    },
    solution: {
      ko: "토큰 선택 확률을 실시간으로 트리 구조와 히트맵으로 시각화하여 사용자가 직접 파라미터를 조작하며 원리를 체득하도록 설계했습니다.",
      en: "Created real-time probability trees and attention graphs, enabling users to interactively tweak hyper-parameters."
    },
    highlights: [
      { ko: "Top-k, Top-p, Temperature 실시간 비교", en: "Live comparison of Top-k, Top-p, and Temperature" },
      { ko: "가벼운 클라이언트 단 동작 (서버 불필요)", en: "Lightweight client-side processing" },
      { ko: "반응형 인터랙티브 3D 캔버스", en: "Responsive interactive 3D canvas" }
    ]
  },
  {
    id: "local-slm-agent-cli",
    title: {
      ko: "Local SLM Copilot: 온디바이스 개발자 CLI 보조도구",
      en: "Local SLM Copilot: On-Device Developer CLI Assistant"
    },
    summary: {
      ko: "인터넷 연결 없이도 로컬에서 3B~7B 소형 언어 모델(SLM)을 구동하여 터미널 명령어 추천 및 Git 커밋 메시지를 생성하는 CLI 툴입니다.",
      en: "An on-device CLI assistant running quantized 3B-7B small language models locally for offline commit generation and shell assistance."
    },
    category: "Developer Tools",
    status: "Planning",
    featured: false,
    techStack: ["Rust", "Llama.cpp", "GGUF Quantization", "CLI"],
    githubUrl: "https://github.com",
    demoUrl: null,
    metrics: {
      ko: "메모리 점유 2.5GB 미만 목표",
      en: "Sub-2.5GB RAM footprint target"
    },
    problem: {
      ko: "네트워크가 제한된 환경이나 민감한 코드를 다룰 때 외부 클라우드 API를 사용할 수 없는 보안 문제가 있었습니다.",
      en: "Air-gapped environments or private proprietary codebases cannot rely on external third-party cloud APIs."
    },
    solution: {
      ko: "4-bit 양자화된 최신 오픈소스 SLM을 로컬 CPU/Metal 환경에서 구동하는 초경량 CLI 아키텍처를 설계 중입니다.",
      en: "Architecting an ultra-lightweight CLI running 4-bit quantized SLMs on local hardware without cloud latency or risk."
    },
    highlights: [
      { ko: "100% 완전 오프라인 프라이버시 보장", en: "100% offline privacy preservation" },
      { ko: "Git Diff 분석 기반 커밋 메시지 자동화", en: "Automated git diff commit message generation" },
      { ko: "초저지연(Zero API Cost)", en: "Zero API token costs & instant execution" }
    ]
  }
];

