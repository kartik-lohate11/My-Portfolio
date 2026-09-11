import React, { useState, useRef, useEffect } from "react";
import "../css/ChatApp.css";

// Built-in intelligent portfolio knowledge responder
const defaultSendQuery = async (query) => {
  // Simulate natural AI thinking delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  const q = query.toLowerCase();

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("microservice") || q.includes("grafana") || q.includes("test")) {
    return {
      answer: "Kartik's Technical Skill Set:\n• Backend & Microservices: Java 17/21, Spring Boot, Spring Data JPA, Hibernate, Spring Security, JWT/OAuth2, Resilience4j (Circuit Breakers), Apache Kafka\n• Observability & Testing: Grafana, Prometheus, Micrometer, JUnit 5, Mockito, SonarQube, Postman\n• Databases: PostgreSQL, MySQL, MinIO Object Storage\n• Frontend: React.js (18), Tailwind CSS, HTML5, CSS3, Vite\n• DevOps: Docker, Kubernetes, Jenkins CI/CD, Maven, Git"
    };
  }

  if (q.includes("project") || q.includes("work") || q.includes("build") || q.includes("cloudnest") || q.includes("pharmease") || q.includes("ticket") || q.includes("zip")) {
    return {
      answer: "Kartik's Key Projects:\n\n1. ☁️ CloudNest: Cloud file storage & workspace platform with MinIO object storage, OAuth2 & JWT auth.\n2. 🏢 Enterprise Ticket Management System: Microservices backend with Spring Boot, React, Kafka, JWT & PostgreSQL.\n3. 💊 Pharmease: Location-based pharmacy finder with OTP email verification & Map APIs.\n4. 🗜️ Huffman Zip File Project: Desktop app utilizing Huffman Coding algorithm & binary tree compression in Java."
    };
  }

  if (q.includes("experience") || q.includes("company") || q.includes("avendum") || q.includes("netlink") || q.includes("job")) {
    return {
      answer: "Kartik's Professional Experience:\n\n• Software Developer at Avendum Technology (Feb 2025 – Present): Architected Java Spring Boot backend, real-time Kafka pipelines & RBAC JWT security.\n• Java Developer Intern at Netlink Software (Sep 2024 – Dec 2024): Built custom Java ETL data migration tools & processed 500K+ daily records with Apache Spark."
    };
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("hire") || q.includes("reach") || q.includes("location")) {
    return {
      answer: "You can reach Kartik Lohate directly:\n\n📧 Email: kartiklohate2003@gmail.com\n📞 Phone: +91 7415950037\n📍 Location: Gurgaon, India\n🔗 LinkedIn: linkedin.com/in/kartik-lohate-java-developer\n🐙 GitHub: github.com/kartik-lohate11"
    };
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return {
      answer: "You can download Kartik's latest resume directly using the 'Download Resume' button in the Hero section or find it at /document/kartikResume_Java.pdf!"
    };
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("who are you")) {
    return {
      answer: "Hello! 👋 I am Kartik's AI Portfolio Assistant. I can tell you all about his Java & Spring Boot experience, projects, skills, and how to get in touch. What would you like to know?"
    };
  }

  return {
    answer: "Thanks for reaching out! Kartik is a dedicated Java Developer with expertise in Spring Boot, Microservices, and React. Feel free to ask about his projects, skills, work experience, or reach out to him directly at kartiklohate2003@gmail.com."
  };
};

function ChatApp({ theme, sendQuery = defaultSendQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  const userName = typeof window !== 'undefined' ? sessionStorage.getItem("userName") : null;

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: userName 
        ? `Hello ${userName} 👋\nHow can I help you today? Ask me anything about Kartik's work!`
        : "Hello! 👋\nI am Kartik's AI Assistant. Ask me anything about Kartik's projects, Java & Spring Boot experience, or technical skills!",
      time: new Date(),
    },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Safe theme properties
  const brandName = theme?.chat?.nexusText || "Kartik AI";
  const brandIcon = theme?.chat?.nexusIcon || "✦";
  const brandIconColor = theme?.chat?.brandIconColor || "#06b6d4";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Handle focus when chat opens/closes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
      document.body.classList.add('chat-open');
    } else {
      document.body.classList.remove('chat-open');
    }
    
    return () => {
      document.body.classList.remove('chat-open');
    };
  }, [isOpen]);

  // Apply theme variables if provided
  useEffect(() => {
    if (theme && theme.chat) {
      const root = document.documentElement;
      const chat = theme.chat;

      Object.keys(chat).forEach(key => {
        const cssVar = `--chat-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVar, chat[key]);
      });
    }
  }, [theme]);

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sendMessage = async () => {
    if (loading) return;
    if (input.trim() === "") return;

    const text = input.trim();

    setMessages((prev) => [
      ...prev,
      { sender: "user", text, time: new Date() },
    ]);

    setInput("");
    setLoading(true);
    setTyping(true);

    try {
      const response = await sendQuery(text);
      setTyping(false);

      let botReply = response?.answer || "I received your message! Kartik is open for new opportunities.";

      if (response?.sources && response.sources.length > 0) {
        botReply += `\n\n📚 Sources: ${response.sources.join(', ')}`;
      }
      if (response?.sql_used) {
        botReply += `\n\n📊 SQL: ${response.sql_used}`;
      }
      if (response?.data) {
        const dataStr = JSON.stringify(response.data, null, 2);
        botReply += `\n\n📈 Data:\n${dataStr}`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply, time: new Date() },
      ]);
    } catch (error) {
      setTyping(false);

      let errorMessage = "⚠️ Something went wrong. Please try again.";

      if (error?.message === 'RATE_LIMIT') {
        errorMessage = "⏳ Too many requests. Please wait a moment.";
      } else if (error?.message === 'INVALID_QUESTION') {
        errorMessage = "❓ Please ask a valid question.";
      } else if (error?.message === 'SERVER_ERROR') {
        errorMessage = "🔧 Server error. Please try again later.";
      } else if (error?.message === 'NETWORK_ERROR') {
        errorMessage = "🌐 Network error. Please check your connection.";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: errorMessage, time: new Date() },
      ]);
    }

    setLoading(false);
    inputRef.current?.focus();
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="nexus-chat-icon" onClick={toggleChat} role="button" aria-label="Open Chat">
          <span className="brand-icon" style={{ color: brandIconColor }}>
            {brandIcon}
          </span>
          <span className="nexus-icon-text">{brandName}</span>
        </div>
      )}

      {isOpen && (
        <div className="chat-backdrop" onClick={handleBackdropClick}>
          <div 
            className={`nexus-chat-window ${expanded ? "expanded" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="nexus-chat-header">
              <div className="header-left">
                <span className="nexus-brand">
                  <span className="brand-icon" style={{ color: brandIconColor }}>
                    {brandIcon}
                  </span>
                  {brandName}
                </span>
                <span className="status-badge">
                  <span className="online-dot"></span> Online
                </span>
              </div>
              <div className="header-actions">
                <button
                  className="icon-btn"
                  onClick={() => setExpanded(!expanded)}
                  aria-label={expanded ? "Compress" : "Expand"}
                  title={expanded ? "Compress" : "Expand"}
                >
                  {expanded ? "−" : "⤢"}
                </button>
                <button
                  className="icon-btn"
                  onClick={toggleChat}
                  aria-label="Close Chat"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="nexus-chat-body">
              {messages.map((msg, index) => (
                <div key={index} className={`message-wrapper ${msg.sender}`}>
                  <div className={`message ${msg.sender}`}>
                    {msg.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                  <div className="message-time">{formatTime(msg.time)}</div>
                </div>
              ))}

              {typing && (
                <div className="message-wrapper bot">
                  <div className="message bot typing-message">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef}></div>
            </div>

            {/* Footer */}
            <div className="nexus-chat-footer">
              <input
                ref={inputRef}
                type="text"
                placeholder={loading ? "Waiting for response..." : "Ask about skills, projects, contact..."}
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading) {
                    sendMessage();
                  }
                }}
              />
              <button
                className="send-btn"
                disabled={loading || !input.trim()}
                onClick={sendMessage}
                aria-label="Send message"
              >
                <span className="send-icon">➤</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatApp;
