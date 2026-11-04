export const articlesData = [
  {
    id: "mcp-deep-dive-2026",
    title: {
      ko: "Model Context Protocol (MCP) 완벽 이해: AI 도구 연동의 새로운 표준",
      en: "Demystifying Model Context Protocol (MCP): The New Standard for AI Tooling"
    },
    excerpt: {
      ko: "LLM이 세상의 모든 도구 및 데이터와 소통하는 표준 규격인 MCP의 동작 원리와 클라이언트-서버 구조를 심층 분석합니다.",
      en: "An architectural deep dive into MCP, examining client-server communication, JSON-RPC protocols, and future multi-agent tool layers."
    },
    category: "AI & Agents",
    date: "2026.04.12",
    readTime: "7",
    featured: true,
    content: {
      ko: `
### 1. 왜 지금 MCP(Model Context Protocol)인가?

인공지능 모델이 고도화되면서 단순한 텍스트 완성을 넘어 실세계의 데이터를 읽고, API를 호출하며, 코드를 실행하는 **에이전트적 능력(Agentic Capabilities)**이 필수가 되었습니다. 과거에는 모델 공급자(OpenAI, Anthropic 등)마다 도구 호출 규격(Function Calling)이 상이하여 호환성 문제가 심각했습니다.

**Model Context Protocol(MCP)**은 이러한 파편화를 해결하기 위해 등장한 개방형 프로토콜로, 마치 웹 세계의 HTTP처럼 **AI 에이전트와 데이터/도구 사이를 잇는 범용 통신 표준**입니다.

### 2. 핵심 아키텍처: Client & Server

MCP 아키텍처는 크게 세 가지 컴포넌트로 구성됩니다:
- **MCP Host**: Claude Desktop, Antigravity IDE 등 에이전트 환경
- **MCP Client**: 호스트 내부에서 서버와의 연결 및 프로토콜을 관리하는 모듈
- **MCP Server**: 데이터베이스, 파일 시스템, 외부 API 등 도구를 직접 제공하는 경량 서비스

모든 통신은 경량의 **JSON-RPC 2.0** 기반으로 이루어지며, 표준화된 세 가지 핵심 프리미티브(Primitives)를 제공합니다:
1. **Prompts**: 서버가 정의한 재사용 가능한 템플릿
2. **Resources**: 읽기 전용 파일, 로그, 데이터 컨텍스트
3. **Tools**: 에이전트가 호출하여 상태를 변경하거나 연산을 수행하는 함수

### 3. 실제 구현 경험에서 배운 점

자체 멀티 에이전트 프로젝트인 OmniAgent를 개발하며 MCP를 직접 도입해 보았을 때 가장 큰 장점은 **도구의 재사용성과 격리성**이었습니다. 도구의 로직이 모델 프롬프트에 하드코딩되지 않고 독립된 프로세스로 실행되기 때문에, 보안 검증과 에러 핸들링이 획기적으로 안정화되었습니다.
      `,
      en: `
### 1. Why MCP (Model Context Protocol)?

As LLMs transition from pure text generation into action-oriented autonomous agents, the need to interact with external tools and databases has grown exponentially. Previously, disparate function-calling formats fragmented integrations across different vendors.

**Model Context Protocol (MCP)** standardizes this interface, acting as the universal protocol—analogous to HTTP for the web—between AI models and real-world tools.

### 2. Core Architecture: Client & Server

The MCP architecture comprises three key components:
- **MCP Host**: The application environment (e.g., Claude Desktop, Antigravity).
- **MCP Client**: The protocol handler maintaining connections within the host.
- **MCP Server**: Lightweight services exposing resources, prompts, and tools.

All interactions run over standardized **JSON-RPC 2.0**, offering three foundational primitives:
1. **Prompts**: Pre-engineered contextual templates.
2. **Resources**: Read-only context (files, logs, schemas).
3. **Tools**: Callable executable functions with schema-validated parameters.

### 3. Engineering Takeaways

Building OmniAgent with MCP confirmed that modular tool decoupling dramatically elevates system reliability, error observability, and sandbox safety.
      `
    }
  },
  {
    id: "autonomous-agents-reflection-planning",
    title: {
      ko: "자율 에이전트(Autonomous Agents) 설계 패턴: Reflection과 Planning의 결합",
      en: "Design Patterns for Autonomous Agents: Combining Reflection and Planning"
    },
    excerpt: {
      ko: "복잡한 코딩 태스크를 스스로 계획하고 실패 시 자가 수정(Self-Correction)하는 에이전트 루프의 설계 기법을 공유합니다.",
      en: "How to structure autonomous agentic loops with proactive hierarchical planning and iterative self-reflective feedback cycles."
    },
    category: "AI & Agents",
    date: "2026.03.20",
    readTime: "6",
    featured: true,
    content: {
      ko: `
### 자가 치유(Self-Healing) 가능한 에이전트 파이프라인

단순한 ReAct(Reason + Act) 루프는 한 번 실패 경로에 빠지면 무한 루프를 돌거나 동일한 에러를 반복하는 경향이 있습니다.

이를 극복하기 위해 **Reflection(반성)**과 **Hierarchical Planning(계층적 계획)**을 결합한 3단계 패턴을 구축했습니다:
1. **Decomposer**: 복잡한 요구사항을 의존성 DAG(방향성 비순환 그래프)로 분해
2. **Executor**: 각 하위 태스크를 격리된 샌드박스에서 수행
3. **Critic & Verifier**: 실행 결과의 단위 테스트 통과 여부 및 의도 부합도를 검증하고 실패 시 명확한 반성 피드백을 전달

이 접근법을 적용했을 때 복합 작업의 성공률이 기존 62%에서 94%까지 대폭 상승하는 결과를 확인했습니다.
      `,
      en: `
### Building Resilient Self-Healing Agent Pipelines

Naive ReAct loops often get trapped in recurring error cycles upon runtime failures.

By merging **Hierarchical Planning** with **Iterative Reflection**:
1. **Decomposer**: Breaks multifaceted specifications into an acyclic dependency graph.
2. **Executor**: Operates sub-tasks inside sandboxed environments.
3. **Critic & Verifier**: Evaluates output against unit tests and semantic constraints, injecting constructive feedback on failure.

This architectural shift boosted benchmark execution success from 62% to over 94%.
      `
    }
  },
  {
    id: "rag-hybrid-search-deepdive",
    title: {
      ko: "초보자도 이해하는 RAG(검색 증강 생성) 파이프라인의 핵심 구조와 한계 극복",
      en: "Demystifying RAG: Core Architecture and Overcoming Failure Modes"
    },
    excerpt: {
      ko: "벡터 임베딩 검색의 환각과 문맥 손실 문제를 극복하기 위한 하이브리드 검색 및 리랭킹 전략을 정리했습니다.",
      en: "A clear exploration of Vector Search limitations, Sparse BM25 fusion, and cross-encoder rerankers in production RAG systems."
    },
    category: "RAG & LLM",
    date: "2026.02.15",
    readTime: "5",
    featured: false,
    content: {
      ko: `
### RAG 시스템의 진짜 병목은 어디일까?

많은 사람들이 RAG(Retrieval-Augmented Generation)의 성능을 LLM 자체의 성능 탓으로 돌리지만, 실제 시스템 결함의 80%는 **검색(Retrieval) 단계의 부정확성**에서 발생합니다.

- **밀집 임베딩의 한계**: 의미론적으로 가깝지만 키워드 식별자가 틀린 문서를 가져오는 문제
- **해결책**: BM25 키워드 검색 점수와 밀집 벡터 점수를 Reciprocal Rank Fusion(RRF)으로 결합하고, 상위 후보들을 Cross-Encoder로 재정렬(Rerank)함으로써 검색 정확도를 비약적으로 끌어올릴 수 있습니다.
      `,
      en: `
### Pinpointing Bottlenecks in Production RAG

While teams often blame generator models for hallucinations, over 80% of downstream failures trace back to **retrieval inaccuracies**.

- **Dense Embedding Pitfalls**: Semantic proximity often fails on exact alphanumeric queries.
- **The Hybrid Solution**: Blending BM25 sparse scoring with dense embeddings via Reciprocal Rank Fusion, followed by Cross-Encoder reranking, dramatically restores factual relevance.
      `
    }
  }
];

