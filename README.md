# 🚀 AI Developer Personal Website & Portfolio

> **"Exploring AI technologies and turning ideas into reality."**  
> AI 기술을 탐구하고 직접 구현하는 대학생 개발자의 개인 포트폴리오 웹사이트입니다.

---

## 🌟 핵심 특징 (Key Highlights)

- **디자인 시스템**: Futuristic Minimalism (Apple-inspired 다크 테마 `#080B12`, 글래스모피즘, 정제된 네온 블루/퍼플 악센트).
- **국제화 (i18n)**: 한국어(기본) 및 영어 완전 지원 (`localStorage` 선호 언어 저장).
- **인터랙티브 AI 시각화**:
  - 자율 에이전트(Autonomous Agent) 및 Model Context Protocol(MCP) JSON-RPC 파이프라인 시뮬레이터.
  - LLM Temperature 파라미터 조작에 따른 Softmax 확률 분포 실시간 인터랙티브 차트.
  - 프롬프트 토큰 수 및 모델별(Claude 3.5 Sonnet, GPT-4o, Local SLM) 실시간 비용 계산기.
- **AI 포트폴리오 어시스턴트**: 프로젝트, 철학, 기술 스택을 대화형으로 질의응답할 수 있는 데모 챗봇.
- **풀스택 포트폴리오 쇼케이스**: OmniAgent, RAG-Lens 등 실증 프로젝트 상세 케이스 스터디 및 기술 저널.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: React 18, Vite
- **Routing**: React Router DOM (v6)
- **Styling**: Modern CSS Variables, Glassmorphism, Responsive Grid/Flexbox
- **Deployment**: Netlify (`netlify.toml` SPA 리다이렉트 설정 포함)
- **Version Control**: Git & GitHub

---

## 🌐 GitHub & Netlify 배포 가이드 (Step-by-Step)

이 프로젝트는 **GitHub**에 코드를 올리면 **Netlify**가 자동으로 감지하여 빌드 및 배포하도록 사전 구성되어 있습니다.

### 1단계: GitHub 새 저장소(Repository) 생성 및 코드 업로드

1. [github.com](https://github.com)에 로그인합니다.
2. 우측 상단의 **[+]** 아이콘 클릭 → **[New repository]** 선택.
3. 저장소 이름(예: `ai-portfolio`)을 입력하고 **Public** 또는 **Private** 선택 후 **[Create repository]** 클릭.
4. 터미널(Git Bash 또는 명령 프롬프트)에서 현재 프로젝트 폴더로 이동 후 아래 명령어를 순서대로 실행합니다:

```bash
git init
git add .
git commit -m "feat: initial commit for AI developer portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

*(만약 Git CLI가 설치되어 있지 않다면, [GitHub Desktop](https://desktop.github.com) 프로그램을 이용하거나 GitHub 웹사이트의 "uploading an existing file" 버튼을 통해 이 폴더의 파일들을 업로드할 수도 있습니다.)*

---

### 2단계: Netlify(app.netlify.com)에서 원클릭 연동 및 배포

1. [app.netlify.com](https://app.netlify.com)에 로그인합니다 (GitHub 계정으로 간편 로그인 추천).
2. 대시보드에서 **[Add new site]** → **[Import an existing project]**를 클릭합니다.
3. Git 제공자로 **[GitHub]**을 선택하고 저장소 접근 권한을 승인합니다.
4. 1단계에서 생성한 저장소(`ai-portfolio`)를 목록에서 선택합니다.
5. 빌드 설정 확인:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build` (프로젝트 내 `netlify.toml`이 있어 자동 입력됩니다)
   - **Publish directory**: `dist` (자동 감지)
6. 하단의 **[Deploy site]** 버튼을 클릭합니다.
7. 약 1~2분 후 배포가 완료되면 상단에 `https://<site-name>.netlify.app` 형태의 고유 라이브 URL이 생성됩니다!

---

## 💻 로컬 개발 환경 실행 방법

Node.js 환경이 설치되어 있는 경우:

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행 (http://localhost:3000)
npm run dev

# 배포용 프로덕션 빌드
npm run build
```

---

## 📁 디렉터리 구조

```
├── index.html                  # 진입점 HTML (Pretendard & Inter 웹폰트 로드)
├── netlify.toml                # Netlify 배포 빌드 및 SPA 리다이렉트 설정
├── package.json                # 의존성 및 실행 스크립트
├── vite.config.js              # Vite 번들러 설정
├── public/
│   └── favicon.svg             # 커스텀 AI 심볼 파비콘
└── src/
    ├── main.jsx                # React DOM 렌더링
    ├── App.jsx                 # 라우터 및 글로벌 레이아웃
    ├── index.css               # 다크 테마 디자인 시스템 (#080B12)
    ├── locales/
    │   ├── ko.js               # 한국어 번역 리소스
    │   └── en.js               # 영어 번역 리소스
    ├── context/
    │   └── LanguageContext.jsx # i18n 상태 관리 및 로컬 저장소 동기화
    ├── components/
    │   ├── Navbar.jsx          # 헤더 (네비게이션, 언어 전환, AI 비서)
    │   ├── Footer.jsx          # 푸터
    │   ├── InteractiveAIVisualizer.jsx # 자율 에이전트 & MCP 파이프라인
    │   ├── AIAssistantModal.jsx# AI 질의응답 챗봇 모달
    │   ├── Timeline.jsx        # 성장 타임라인 컴포넌트
    │   └── Icons.jsx           # 독립형 모던 SVG 아이콘 셋
    ├── pages/
    │   ├── Home.jsx            # 메인 홈 (Hero, 3대 철학, 시각화, 프리뷰)
    │   ├── About.jsx           # 자기소개, 기술 역량, 개발 철학
    │   ├── Projects.jsx        # 프로젝트 갤러리 및 필터링
    │   ├── ProjectDetail.jsx   # 프로젝트 케이스 스터디 상세
    │   ├── TechJournal.jsx     # 기술 저널 아티클 목록
    │   ├── JournalDetail.jsx   # 저널 상세 본문 리더
    │   ├── Experiments.jsx     # 인터랙티브 실험실 (Softmax, Token 추정기)
    │   └── Contact.jsx         # 연락처, GitHub 링크, 문의 폼
    └── data/
        ├── projectsData.js     # 프로젝트 데이터
        ├── articlesData.js     # 기술 저널 데이터
        ├── experimentsData.js  # 실험실 메타데이터
        └── timelineData.js     # 성장 마일스톤 데이터
```

