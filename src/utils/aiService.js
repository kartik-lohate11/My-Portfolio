import { portfolioData } from '../data/portfolioData';

// High-density, token-optimized system prompt covering all technical background
const SYSTEM_PROMPT = `You are the official AI Assistant for Kartik Lohate's developer portfolio. Your goal is to represent Kartik accurately, professionally, and concisely to recruiters, engineering managers, and visitors.
--- STRICT RULES ---
- ONLY use facts from this prompt. Never invent tools, projects, or details.
- If something isn't listed above, say "Kartik hasn't listed that, but you can ask him directly."
- NEVER use tables. Use short bullets only.
- Max 100-150 words per reply.

- Lead with a 1-line summary.
- Then 3-4 tight bullets (max 8 words each).
- End with one CTA line (email/resume link) only when relevant.

--- MISSING SKILL RULE ---
If asked about a skill/tool NOT listed above, NEVER say "he hasn't listed it" or "no expertise." Instead:
1. Acknowledge it positively in one line.
2. Pivot to his closest transferable strength.
3. Optionally add one forward-looking line (fast learner, open to new tech).
4. Keep it under 60 words.
Never sound like a rejection.

--- CANDIDATE PROFILE ---
• Name: Kartik Lohate | Role: Java Developer / Backend & Full-Stack Engineer | Location: Gurgaon, India
• Email: ${portfolioData.personal.email} | Phone: ${portfolioData.personal.phone}
• GitHub: ${portfolioData.social.find(s => s.icon === 'github')?.url || 'https://github.com/kartik-lohate11'}
• LinkedIn: ${portfolioData.social.find(s => s.icon === 'linkedin')?.url || 'https://www.linkedin.com/in/kartik-lohate-java-developer/'}
• Resume: Available to download from the header/hero section (${portfolioData.resume})

--- WORK EXPERIENCE ---
1. Avendum Technology Private Limited (Airtel) | Software Developer (Feb 2025 – Present)
    Developed REST APIs for Pan-India Airtel network management, enabling users to plan, deploy, shift traffic,
and dismantle network sites through defined lifecycle workflows.– Implemented workflow logic for network deployment, traffic shifting, and dismantling, handling business
rules, status transitions, validations, and role-based actions across the asset lifecycle.– Built bulk processing features for large-scale network operations, using Spring Batch and multi-threading to
process 500K+ records while reducing manual effort for users.– Improved application reliability through centralized exception handling and structured logging with SLF4J and
Logback, simplifying debugging and production issue tracking

2. Netlink Software Private Limited | Java Developer Intern (Sep 2024 – Dec 2024)
    Developed a high-performance Data Connector using Scala and Play Framework to fetch unstructured data
through non-blocking I/O, supporting 1,000+ concurrent requests in high-concurrency environments.– Processed unstructured datasets using Apache Spark (RDDs/DataFrames) and optimized persistence with
JDBC batch processing, achieving 98% data consistency and reducing latency by 35% for daily workloads
over 500K+ records.– Collaborated in an Agile/Scrum environment to deliver 20+ RESTful endpoints for JSON/XML
communication and used Docker to package the Data Connector for UAT deployment and testing.

--- TECHNICAL SKILLS ---
• Languages: Java (8/11/17/21), Python, JavaScript, SQL
• Backend & Microservices: Spring Boot, Spring Data JPA, Hibernate ORM, Spring Security, JWT & OAuth2, RESTful APIs, Resilience4j (Circuit Breakers), Apache Kafka (Event-Driven), Redis (Caching), Spring Cloud Gateway, Eureka, MinIO Object Storage
• Testing & Observability: Grafana, Prometheus, Micrometer, JUnit 5, Mockito, SonarQube (Code Quality), Postman API Automation
• Databases: MySQL, PostgreSQL, Query Optimization, Indexing
• Frontend & Web: React.js (18), Tailwind CSS, HTML5, CSS3, Vite, Context API
• DevOps & Cloud: Docker, Kubernetes (K8s), Jenkins CI/CD, Maven, Git/GitHub

--- FEATURED PROJECTS ---
1. CloudNest (Cloud File Storage Platform): Full-stack Google Drive-inspired workspace. Features MinIO object storage, OAuth2 + JWT auth, file lifecycle (trash, restore, share links), Spring Data JPA specifications, and React dashboard.
2. Pharmease (Location-Based Search): Proximity medical store locator with dynamic map distance calculation, OTP email 2FA verification, and merchant medicine inventory portal.
3. Zip File Project (Huffman Compression): Core Java desktop tool (Swing/AWT) achieving 40-50% lossless file size reduction using Min-Heap priority queues & binary prefix tree traversal.
4. TinyRoute (URL Shortener & Link Management): Full-stack Spring Boot + React platform for creating, managing, and tracking short links.
   - Base62 short-code generation (7-char) from DB IDs.
   - Full URL lifecycle: create, read, update, delete, duplicate validation, click tracking.
   - User→URL one-to-many ownership model.
   - Redis caching for hot user/URL data to cut DB hits.
   - JPA/Hibernate with DTO projections for lean queries.
   - Click analytics + dashboard, profile, auth pages in React 18.
   - Stack: Java, Spring Boot, Spring Security, JWT/OAuth2, MySQL, Redis, Docker, Vite, Axios.
   - GitHub: https://github.com/kartik-lohate11/TinyRoute---A-Scalable-URL-Shortening-Service

--- INSTRUCTIONS ---
- Always be helpful, confident, polite, and concise.
- Use clear bullet points and markdown formatting when appropriate.
- If asked about hiring or interviews, encourage contacting Kartik at ${portfolioData.personal.email} or downloading his resume.
- Answer accurately based on Kartik's background without making up unrelated claims.`;

// Local smart fallback in case API key is unavailable or network is offline
const localFallbackQuery = (text) => {
  const q = text.toLowerCase();

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("microservice") || q.includes("grafana") || q.includes("resilience") || q.includes("redis")) {
    return {
      answer: "Here is Kartik's Technical Stack:\n\n• Backend & Microservices: Java 17/21, Spring Boot, Spring Security (JWT & OAuth2), Resilience4j, Apache Kafka, Redis, Eureka, MinIO\n• Testing & Observability: Grafana, Prometheus, JUnit 5, Mockito, SonarQube, Postman\n• Databases: PostgreSQL, MySQL, Hibernate/JPA\n• Frontend & DevOps: React.js 18, Tailwind CSS, Docker, Kubernetes, Jenkins, Maven, Git"
    };
  }

 if (q.includes("project") || q.includes("cloudnest") || q.includes("pharmease") || q.includes("zip") || q.includes("tinyroute") || q.includes("url short") || q.includes("work")) {
    return {
      answer: "Kartik's Featured Projects:\n\n1. ☁️ CloudNest: Cloud storage platform with MinIO object storage, OAuth2/JWT auth & React.\n2. 💊 Pharmease: Proximity pharmacy finder with Map APIs & OTP verification.\n3. 🗜️ Zip File Tool: Lossless Huffman compression desktop application in Core Java."
    };
  }

  if (q.includes("experience") || q.includes("company") || q.includes("avendum") || q.includes("netlink")) {
    return {
      answer: "Kartik's Professional Experience:\n\n• Software Developer at Avendum Technology (Feb 2025–Present): Java, Spring Boot, Kafka pipelines & RBAC JWT security.\n• Java Developer Intern at Netlink Software (Sep–Dec 2024): Java ETL data migration & Apache Spark handling 500K+ daily records."
    };
  }

  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone")) {
    return {
      answer: `You can reach Kartik Lohate directly:\n\n📧 Email: ${portfolioData.personal.email}\n📞 Phone: ${portfolioData.personal.phone}\n📍 Location: ${portfolioData.personal.location}\n🐙 GitHub: https://github.com/kartik-lohate11`
    };
  }

  if (q.includes("tinyroute") || q.includes("url") || q.includes("short")) {
  return {
    answer: "TinyRoute — URL Shortener:\n\n• Spring Boot + React full-stack link management\n• Base62 7-char short codes from DB IDs\n• Redis caching + click analytics\n• JWT/OAuth2-secured user-owned links\n• MySQL + JPA/Hibernate with DTO projections\nGitHub: github.com/kartik-lohate11/TinyRoute"
  };
}

  if (q.includes("resume") || q.includes("cv")) {
    return {
      answer: `You can download Kartik's latest resume directly from the header/hero section or find it at ${portfolioData.resume}.`
    };
  }

  return {
    answer: "Hello! I am Kartik's AI Assistant. I can tell you all about his Java/Spring Boot experience, Microservices, CloudNest & other projects, skills, or contact info. How can I help you today?"
  };
};

// Updated list of active and recommended models on Groq
const ACTIVE_GROQ_MODELS = [
  "llama-3.3-70b-versatile", // Keep as first try if you believe you have access
  "openai/gpt-oss-120b",     // Recommended replacement for deprecated models [citation:4]
  "openai/gpt-oss-20b",      // Lighter, faster alternative [citation:1]
  "llama-3.1-8b-instant"     // Fast and reliable fallback
];

/**
 * Helper to call Groq Chat API with a specific model
 */
const callGroqAPI = async (apiKey, modelName, formattedMessages) => {
  // Debug log to verify the exact model name being sent
  console.log(`Attempting Groq API call with model: "${modelName}"`);

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey.trim()}`
    },
    body: JSON.stringify({
      model: modelName.trim(),
      messages: formattedMessages,
      temperature: 0.6,
      max_tokens: 300,
      top_p: 0.9
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    // Log the full error for debugging
    console.error(`Groq API Error for model "${modelName}": Status ${response.status}`, errorBody);
    return { ok: false, status: response.status, error: errorBody, model: modelName };
  }

  const data = await response.json();
  const botReply = data?.choices?.[0]?.message?.content;
  return { ok: true, answer: botReply };
};

/**
 * Send query to Groq Chat Completion API with conversation context & automatic model fallback
 * @param {Array<{ sender: 'user' | 'bot', text: string }>} conversationHistory
 * @returns {Promise<{ answer: string }>}
 */
export const sendGroqChatQuery = async (conversationHistory) => {
  const apiKey = 
    import.meta.env.VITE_GROQ_API_KEY || 
    import.meta.env.VITE_AI_API_KEY || 
    import.meta.env.AI_API_KEY || 
    "";

  const configuredModel = 
    import.meta.env.VITE_GROQ_MODEL || 
    import.meta.env.GROQ_MODE || 
    "llama-3.3-70b-versatile";

  const latestUserMessage = conversationHistory[conversationHistory.length - 1]?.text || "";

  // If no API key configured, use local fallback
  if (!apiKey || apiKey === "your_groq_api_key_here") {
    await new Promise((r) => setTimeout(r, 400));
    return localFallbackQuery(latestUserMessage);
  }

  // Format messages array for Groq/OpenAI compatible chat completions
  const formattedMessages = [
    { role: "system", content: SYSTEM_PROMPT }
  ];

  // Include last 6 conversation turns for natural context without token bloat
  const recentHistory = conversationHistory.slice(-6);
  recentHistory.forEach((msg) => {
    formattedMessages.push({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text
    });
  });

  // Build model priority queue with active verified models
  const modelsToTry = [
    configuredModel,
    ...ACTIVE_GROQ_MODELS.filter(m => m !== configuredModel)
  ];

  for (const model of modelsToTry) {
    try {
      const result = await callGroqAPI(apiKey, model, formattedMessages);
      if (result.ok && result.answer && result.answer.trim()) {
        return { answer: result.answer.trim() };
      }
      
      // If 400 or 404 (model decommissioned or not found), seamlessly try the next active model
      if (result.status === 400 || result.status === 404) {
        console.warn(`Groq model '${model}' is unavailable (${result.status}). Trying next active model...`);
        continue;
      } else if (result.status === 401) {
        console.warn("Groq API Key is invalid or unauthorized (401). Falling back to local responder.");
        break;
      } else {
        console.warn(`Groq API returned status ${result.status}:`, result.error);
        continue;
      }
    } catch (err) {
      console.warn(`Network error calling Groq with model ${model}:`, err);
      continue;
    }
  }

  // If all Groq attempts fail, return smart local response
  return localFallbackQuery(latestUserMessage);
};