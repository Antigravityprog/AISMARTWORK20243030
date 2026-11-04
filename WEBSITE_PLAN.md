# AI Developer Personal Website — Development Plan

**Project:** AI Developer Portfolio  
**Concept:** Explore · Build · Share  
**Design:** Futuristic Minimalism / Apple-inspired  
**Primary Language:** Korean  
**Secondary Language:** English  
**Deployment:** Netlify  
**Development Environment:** Google Antigravity  
**Project Status:** Planning  

---

## 1. Project Overview

### 1.1 Project Purpose
Build a personal portfolio website for a university student interested in exploring emerging AI technologies and implementing practical applications.

The website should communicate three core capabilities:
- **Explore** — Explore emerging technologies, particularly AI.
- **Build** — Turn ideas into working projects and experiments.
- **Share** — Explain complex technologies in an accessible way.

The website must function as both a personal brand platform and a technical portfolio.

### 1.2 Brand Identity
- **Primary Identity:** AI Developer
- **Supporting Identities:**
  - Technology Explorer
  - Technical Communicator
- **Core Message:** "AI 기술을 탐구하고 직접 구현하는 대학생"
- **Suggested English Introduction:** "Exploring AI technologies and turning ideas into reality."

### 1.3 Target Audience
- Technology and AI enthusiasts
- University students
- Developers and engineers
- Potential employers and collaborators
- People interested in emerging AI technologies

### 1.4 Main Objectives
1. Present personal identity and technical interests.
2. Showcase projects and development processes.
3. Publish AI technology articles.
4. Demonstrate technical understanding through interactive visualizations.
5. Record personal learning and development progress.
6. Provide a foundation for future AI-powered services.

---

## 2. Design System

### 2.1 Visual Direction
Futuristic Minimalism with Apple-inspired visual principles.
The website should feel:
- Premium
- Minimal
- Modern
- Technological
- Professional
- Elegant

Avoid excessive neon effects, crowded layouts, and unnecessary animations.

### 2.2 Color Palette
| Element | Color |
| :--- | :--- |
| Main background | `#080B12` |
| Secondary background | `#101725` |
| Card background | `#151E2E` |
| Primary text | `#F5F7FA` |
| Secondary text | `#A3ADBD` |
| Accent blue | `#5B91FF` |
| Accent purple | `#9275FF` |
| Border | `#263247` |

Use blue as the primary accent color and purple sparingly.

### 2.3 Typography
- **Korean:** Pretendard
- **English:** Inter
- System sans-serif fallback

Typography principles:
- Large and bold hero headlines.
- Clear content hierarchy.
- Generous spacing.
- Readable article body text.
- Consistent font sizes.

### 2.4 UI Principles
- Dark theme as the default.
- Large visual sections.
- Rounded cards with subtle borders.
- Soft gradients and restrained glow effects.
- Consistent spacing.
- Responsive layouts.
- Smooth transitions.

### 2.5 Animation
Medium animation intensity:
- Scroll reveal animations.
- Card hover transitions.
- Smooth navigation.
- Subtle background gradients.
- Interactive diagrams.
- Respect reduced-motion accessibility preferences.
- Do not sacrifice performance for visual effects.

---

## 3. Website Architecture

### 3.1 Main Navigation
- Home
- About
- Projects
- Tech Journal
- Experiments
- Contact
- KR / EN language switcher in the header.

### 3.2 Page Structure
- **Home**: Hero Section, Personal Introduction, Featured Projects, Featured Tech Articles, Technology Interests, Development Journey, Contact Section.
- **About**: Personal Introduction, Technical Interests, Skills and Tools, Development Philosophy, Personal Goals. (Do not invent educational qualifications or skills).
- **Projects**: Gallery layout, Project title, description, thumbnail, tech stack, status (Planning, Learning, In Progress, Completed), GitHub/Live demo links.
- **Project Detail**: Overview, Problem Definition, Objectives, Technologies Used, Architecture, Development Process, Demo, Results, Lessons Learned, Future Improvements.
- **Tech Journal**: AI & LLM, AI Agents, Development, Future Tech. Beginner-friendly explanations combined with technical principles.
- **Experiments**: Experiment title, Objective, Technology, Process, Screenshots, Results, Lessons learned.
- **Contact**: GitHub profile, optional professional email/LinkedIn. No private personal data.

---

## 4. Hero Section Specification
- Headline: "Exploring What's Possible with AI." / "AI 기술을 탐구하고 새로운 가능성을 현실로 구현합니다."
- Supporting Headline: "Ideas into Reality." / "새로운 기술을 탐구하고, 아이디어를 프로젝트로 구현하며, 그 과정에서 배운 것을 공유합니다."
- Abstract blue gradient visual, subtle 3D-inspired technology graphics, no personal profile photograph, clear navigation.
- Main CTA: "Explore Projects", "Read Tech Journal".

---

## 5. Special Features
1. **Interactive AI Visualization** (Priority: High): AI Agent workflow, LLM interaction process, MCP architecture, Multi-Agent collaboration. Interactive nodes and workflow stages without external API.
2. **Growth Timeline** (Priority: High): Date, Title, Description, Related technology, Related project.
3. **AI Portfolio Assistant** (Priority: Medium): Demonstration chatbot interface with predefined sample responses and suggestions.

---

## 6. Internationalization (i18n)
- Korean (default) & English.
- Header language switcher KR / EN.
- Persisted preference (localStorage).
- Lightweight React language context with `src/locales/ko.json` & `en.json`.

---

## 7. Content Management & Tech Stack
- React + Vite
- React Router
- Markdown-based content (`react-markdown`, `gray-matter`, frontmatter)
- Plain JavaScript / CSS modules or structured CSS variables
- Netlify hosting configuration (`netlify.toml`)

