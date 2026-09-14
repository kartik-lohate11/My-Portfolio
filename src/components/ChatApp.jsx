import React, { useState, useRef, useEffect } from "react";
import "../css/ChatApp.css";
import { sendGroqChatQuery } from "../utils/aiService";
import { Sparkles, Send, X, Bot, User } from "lucide-react";

function ChatApp({ theme, customSendQuery }) {
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
        ? `Hello ${userName}! 👋 I am Kartik's AI Portfolio Assistant powered by Groq.\nAsk me anything about Kartik's Java/Spring Boot experience, CloudNest, Microservices, or technical stack!`
        : "Hello! 👋 I am Kartik's AI Portfolio Assistant.\nAsk me anything about Kartik's Java/Spring Boot experience, CloudNest project, Microservices, skills, or contact info!",
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

  // Apply custom theme CSS variables if provided
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
    const newHistory = [
      ...messages,
      { sender: "user", text, time: new Date() },
    ];

    setMessages(newHistory);
    setInput("");
    setLoading(true);
    setTyping(true);

    try {
      // Call Groq API or custom handler
      const response = customSendQuery 
        ? await customSendQuery(text, newHistory) 
        : await sendGroqChatQuery(newHistory);

      setTyping(false);

      const botReply = response?.answer || "I received your query. Feel free to ask about Kartik's projects, Spring Boot experience, or contact info!";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply, time: new Date() },
      ]);
    } catch (error) {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        { 
          sender: "bot", 
          text: "I am having trouble reaching the AI service right now. Kartik is an experienced Java & Spring Boot Developer specializing in Microservices, Kafka, and Cloud architectures. Feel free to email him at kartiklohate2003@gmail.com!", 
          time: new Date() 
        },
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
        <div 
          className="nexus-chat-icon" 
          onClick={toggleChat} 
          role="button" 
          aria-label="Open AI Assistant"
          title="Chat with Kartik's AI Assistant"
        >
          <span className="brand-icon" style={{ color: brandIconColor }}>
            <Sparkles size={20} className="text-cyan-300 animate-pulse" />
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
                    <Sparkles size={18} className="text-cyan-400" />
                  </span>
                  {brandName}
                </span>
                <span className="status-badge">
                  <span className="online-dot"></span> Groq Active
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
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="nexus-chat-body custom-scrollbar">
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

            {/* Quick Prompt Suggestions */}
            <div className="px-3 pt-2 pb-1 bg-slate-950/80 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {[
                "Tell me about Kartik's experience",
                "What is CloudNest project?",
                "What backend & microservices tech does Kartik use?",
                "How to contact or hire Kartik?"
              ].map((promptText, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInput(promptText);
                    inputRef.current?.focus();
                  }}
                  className="text-[11px] bg-purple-500/15 hover:bg-cyan-500/25 text-gray-300 hover:text-white px-2.5 py-1 rounded-full border border-purple-500/30 whitespace-nowrap transition-colors"
                >
                  {promptText}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="nexus-chat-footer">
              <input
                ref={inputRef}
                type="text"
                placeholder={loading ? "Generating response with Groq..." : "Ask anything about Kartik's tech background..."}
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
                <Send size={16} className="send-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatApp;
