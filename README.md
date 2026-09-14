# ⚡ Kartik Lohate — Modern Java & Full-Stack Developer Portfolio

<div align="center">

  ![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
  ![Java](https://img.shields.io/badge/Java_17%2F21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Groq AI](https://img.shields.io/badge/Groq_AI_Llama_3.1-F55036?style=for-the-badge&logo=openai&logoColor=white)
  ![Apache Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

  <p align="center">
    <strong>A high-performance, responsive developer portfolio featuring modern glassmorphism aesthetics, interactive widescreen project modals, a full-size screenshot lightbox gallery, and an integrated Groq-powered AI chatbot assistant.</strong>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-architecture">Architecture</a> •
    <a href="#-featured-engineering-projects">Projects</a> •
    <a href="#-ai-chatbot-assistant--sample-prompts">AI Assistant Prompts</a> •
    <a href="#-getting-started">Setup</a>
  </p>
</div>

---

## 👨‍💻 About Kartik Lohate

Passionate **Java & Full-Stack Software Developer** based in Gurgaon, India. Specializing in architecting scalable microservices, high-throughput asynchronous event pipelines with Apache Kafka, robust RESTful APIs, Spring Security (RBAC + JWT/OAuth2), and responsive React frontend interfaces.

* 📧 **Email**: [kartiklohate2003@gmail.com](mailto:kartiklohate2003@gmail.com)
* 📞 **Phone**: [+91 7415950037](tel:+917415950037)
* 🐙 **GitHub**: [github.com/kartik-lohate11](https://github.com/kartik-lohate11)
* 💼 **LinkedIn**: [linkedin.com/in/kartik-lohate-java-developer](https://www.linkedin.com/in/kartik-lohate-java-developer/)
* 📄 **Resume**: [Download Latest PDF](/document/kartikResume_Java.pdf)

---

## ✨ Key Features

### 1. 🤖 Intelligent Groq AI Assistant (`ChatApp` + `aiService`)
* **Real-Time LLM Inferences**: Powered by Groq's high-speed inference engine utilizing `llama-3.1-8b-instant` / `llama-3.3-70b-versatile`.
* **Token-Optimized System Prompt**: Pre-trained with Kartik's verified professional experience, skills, system architectures, and project specifics.
* **Multi-Turn Context Memory**: Remembers previous questions during conversation for natural follow-ups.
* **Graceful Multi-Model Fallback**: Automatically tries backup models and offline smart knowledge responders if rate limits or network issues occur.
* **One-Click Quick Questions**: Built-in suggestion pills for recruiters and engineering leads.

### 2. 📐 Widescreen Rectangular Project Showcases
* **Modern `28px` Rounded Layout**: Smooth dual-pane widescreen modal architecture displaying:
  * **Left Pane**: Live project preview, screenshot thumbnail gallery, and System Highlight KPI tiles.
  * **Right Pane**: Structured bullet-point breakdown of architectural decisions, security workflows, and categorized tech badges.
* **Category Filter Tabs**: Instant filtering by *All*, *Cloud Storage*, *Full Stack & Cloud*, and *Core Java & DSA*.

### 3. 🔍 Big Mid-Size Screenshot Lightbox Viewer
* **High-Resolution Inspection**: Click any project preview to trigger a focused, centered lightbox canvas.
* **Carousel Navigation**: Interactive Left (`<`) / Right (`>`) navigation arrows, bottom thumbnail strip, and keyboard arrow controls (`ArrowLeft`, `ArrowRight`, `Escape`).

### 4. 📊 Technical Skill Arsenal & Verified Depth
* Categorized into 7 modules: **Languages**, **Backend Frameworks**, **Microservices & Resiliency**, **Testing & Observability**, **Databases & Storage**, **Frontend**, and **DevOps**.
* Verified proficiency meters showcasing *Java Microservices (92%)*, *Testing & Quality (88%)*, *Resilience4j (86%)*, *Grafana & Prometheus (84%)*, and *Kafka (85%)*.

---

## 🛠️ Tech Stack

| Category | Technologies & Tools |
|---|---|
| **Core Languages** | Java (8 / 11 / 17 / 21), Python, JavaScript (ES6+), SQL |
| **Backend & APIs** | Spring Boot, Spring Data JPA, Hibernate ORM, Spring Security, JWT & OAuth2, RESTful APIs |
| **Microservices & Cloud** | Microservices Architecture, Resilience4j (Circuit Breakers), Apache Kafka, Redis, Spring Cloud Gateway, Eureka, MinIO Object Storage |
| **Testing & Observability** | Grafana & Dashboards, Prometheus Metrics, JUnit 5, Mockito, SonarQube (Static Analysis), Micrometer & Tracing, Postman Automation |
| **Databases** | PostgreSQL, MySQL, Database Indexing, Query Optimization, Caching |
| **Frontend UI** | React 18, Tailwind CSS, Vite, Framer Motion, Lucide React, Context API |
| **DevOps & Build** | Docker, Kubernetes (K8s), Jenkins CI/CD, Maven, Git & GitHub |
| **AI Integration** | Groq API (`llama-3.1-8b-instant`, `llama-3.3-70b-versatile`) |

---

## 📂 Project Architecture

```
my-portfolio/
├── .env                       # Groq API Key & Model configurations
├── index.html                 # HTML5 template with SEO metadata & Poppins font
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind styling setup
├── vite.config.js             # Vite development server configuration
├── public/
│   └── document/              # Static assets (images, project screenshots, resume PDF)
│       ├── cloud_1.png ... cloud_4.png
│       ├── pharmacy_project.png
│       ├── zip.png
│       ├── kartik_img.png
│       └── kartikResume_Java.pdf
└── src/
    ├── main.jsx               # React DOM entry point
    ├── portfolio.jsx          # Main application orchestrator
    ├── index.css              # Global styles & Tailwind directives
    ├── components/
    │   ├── Navbar.jsx         # Fixed glassmorphic navigation with scroll-spy
    │   ├── HeroSection.jsx    # Hero headline, dynamic experience counter, CTA buttons
    │   ├── AboutSection.jsx   # Professional journey timeline (Avendum & Netlink)
    │   ├── ProjectsSection.jsx# Rectangular project cards & Big Screenshot Lightbox
    │   ├── SkillsSection.jsx  # Technical skill cards & engineering depth meters
    │   ├── ContactSection.jsx # Contact cards, email trigger, and social links
    │   ├── Footer.jsx         # Dynamic copyright year & back-to-top button
    │   ├── ChatApp.jsx        # Groq-powered AI Assistant component
    │   └── LoadingScreen.jsx  # Animated entry splash screen
    ├── css/
    │   ├── animations.css     # Custom keyframes, glow pulses, glass panels, scrollbars
    │   └── ChatApp.css        # Chatbot dark glassmorphism theme & animations
    ├── data/
    │   └── portfolioData.js   # Centralized data store (skills, projects, experience, bio)
    └── utils/
        ├── aiService.js       # Groq Chat API client & high-density system prompt
        └── helpers.js         # Dynamic work experience calculator
```

---

## 🚀 Featured Engineering Projects

### 1. ☁️ CloudNest – Cloud File Storage Platform
* **Overview**: A full-stack cloud file storage and personal workspace platform inspired by Google Drive.
* **Architecture**: Spring Boot REST backend with MinIO Object Storage, user registration, JWT + Google/GitHub OAuth2 authentication, dynamic Spring Data JPA search specifications, and public shareable access links.
* **Tech**: `Java 17`, `Spring Boot`, `React 18`, `MySQL`, `MinIO`, `Spring Security`, `JWT`, `OAuth2`, `Docker`.

### 2. 💊 Pharmease – Location-Based Search
* **Overview**: Real-time proximity pharmacy locator and medicine stock availability engine.
* **Architecture**: Integrated Map/Geocoding APIs to compute dynamic travel distance and routes, automated 2FA email OTP onboarding using Java Mail Sender, and store-owner inventory management.
* **Tech**: `Spring Boot`, `MySQL`, `Docker`, `Map APIs`, `Java Mail API`, `REST APIs`.

### 3. 🗜️ Zip File Project (Huffman Compression)
* **Overview**: Desktop compression & decompression tool achieving 40%–50% lossless file size reduction.
* **Architecture**: Engineered using Huffman Coding dynamic prefix trees, Min-Heap priority queues, bit-level stream serialization, and Java Swing/AWT GUI with $O(N \log N)$ runtime.
* **Tech**: `Core Java`, `Huffman Algorithm`, `Min-Heap`, `Binary Trees`, `Java Swing/AWT`, `File I/O`.

---

## 🤖 AI Chatbot Assistant — Sample Prompts

The portfolio includes an integrated AI assistant powered by Groq. You can ask it natural questions such as:

| Question Category | Example Prompt |
|---|---|
| **💼 Work Experience** | *"Tell me about Kartik's experience at Avendum Technology."* |
| **⚡ Microservices & Resiliency** | *"What microservices, Kafka, and Resilience4j tools does Kartik know?"* |
| **☁️ CloudNest Project** | *"How does CloudNest handle object storage and security?"* |
| **🧪 Testing & Observability** | *"What is Kartik's experience with Grafana, Prometheus, and JUnit?"* |
| **🚀 Algorithmic Skills** | *"Explain how the Huffman Zip File compression project works."* |
| **📞 Contact & Hiring** | *"How can I get in touch with Kartik for an interview or project?"* |
| **📄 Resume Access** | *"Where can I download Kartik's latest resume?"* |

---

## 💻 Getting Started

### Prerequisites
* **Node.js** (v18 or newer)
* **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kartik-lohate11/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create or verify your `.env` file in the root directory:
   ```env
   VITE_GROQ_API_KEY=gsk_your_groq_api_key_here
   VITE_GROQ_MODEL=llama-3.1-8b-instant
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` to view the live portfolio.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

Feel free to connect with Kartik for software engineering roles, backend architecture challenges, or open-source collaborations:

* 🌐 **Portfolio**: [Kartik Lohate Developer Portfolio](https://github.com/kartik-lohate11)
* 📧 **Email**: [kartiklohate2003@gmail.com](mailto:kartiklohate2003@gmail.com)
* 💼 **LinkedIn**: [Kartik Lohate](https://www.linkedin.com/in/kartik-lohate-java-developer/)
* 🐙 **GitHub**: [@kartik-lohate11](https://github.com/kartik-lohate11)
* ✍️ **Medium Articles**: [@kartiklohate8](https://medium.com/@kartiklohate8)
* 💡 **Stack Overflow**: [Kartik Lohate Profile](https://stackoverflow.com/users/27486399/kartik-lohate)

---

<div align="center">
  <p>© 2025 Kartik Lohate. Crafted with passion, clean code principles, and modern technologies.</p>
</div>
