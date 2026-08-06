"use client";

import { useState } from "react";

export default function QuizBox() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setQuiz("");

    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
        }),
      });

      const data = await response.json();

      setQuiz(data.quiz);
    } catch (error) {
      setQuiz("❌ Failed to generate quiz.");
    }

    setLoading(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <button
        onClick={generateQuiz}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#4F46E5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {quiz && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            background: "#fafafa",
            whiteSpace: "pre-wrap",
          }}
        >
          {quiz}
        </div>
      )}
    </>
  );
}