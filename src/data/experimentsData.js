export const experimentsData = [
  {
    id: "exp-token-calculator",
    title: {
      ko: "토큰 & 비용 추정기 (Token & Latency Calculator)",
      en: "Token & Latency Cost Estimator"
    },
    category: "LLM Mechanics",
    description: {
      ko: "프롬프트 입력 길이와 출력 길이에 따른 다양한 LLM 모델의 토큰 소비량 및 대략적인 API 비용/지연 시간을 계산해 볼 수 있습니다.",
      en: "Calculate estimated token consumption, API costs, and latency across popular foundation models."
    },
    status: "Interactive",
    badge: "Interactive Widget"
  },
  {
    id: "exp-temperature-sampling",
    title: {
      ko: "온도(Temperature) & Top-P 샘플링 시뮬레이터",
      en: "Temperature & Top-P Sampling Simulator"
    },
    category: "Inference Engine",
    description: {
      ko: "Temperature 파라미터가 다음 토큰 확률 분포(Softmax)를 어떻게 평탄화하거나 뾰족하게 만드는지 직관적인 확률 차트로 조작해 보세요.",
      en: "Visualize how Temperature and Top-P values reshape token probability distributions interactively."
    },
    status: "Interactive",
    badge: "Visualization"
  },
  {
    id: "exp-agent-dag",
    title: {
      ko: "자율 에이전트 작업 분해 DAG 트리",
      en: "Autonomous Agent Task DAG Visualizer"
    },
    category: "AI Agents",
    description: {
      ko: "복합 사용자 목표를 하위 의존성 그래프로 분해하고 병렬 실행 및 합류하는 오케스트레이션 과정을 다이어그램으로 살펴봅니다.",
      en: "Explore how complex user commands decompose into parallel executable task DAGs."
    },
    status: "Concept Demo",
    badge: "Architecture"
  }
];

