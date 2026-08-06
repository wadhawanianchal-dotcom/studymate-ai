"use client";

import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "StudyMate AI",
      text: "👋 Hello! How can I help you study today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "StudyMate AI",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "StudyMate AI",
          text: "❌ Failed to connect to Gemini.",
        },
      ]);
    }
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          padding: "25px",
          height: "550px",
          overflowY: "auto",
          background: "#F9FAFB",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                message.sender === "You" ? "flex-end" : "flex-start",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                background:
                  message.sender === "You" ? "#4F46E5" : "#E5E7EB",
                color: message.sender === "You" ? "#fff" : "#111827",
                padding: "15px 18px",
                borderRadius: "15px",
                lineHeight: "1.7",
                whiteSpace: "pre-wrap",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <strong>{message.sender}</strong>
              <br />
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #D1D5DB",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            padding: "16px 32px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}