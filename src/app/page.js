"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const cards = [
    {
      title: "🤖 AI Chat",
      text: "Ask study-related questions and receive instant AI-powered answers using Gemini AI.",
    },
    {
      title: "📝 Notes Summarizer",
      text: "Convert lengthy notes into short, simple and easy-to-read summaries.",
    },
    {
      title: "📚 Quiz Generator",
      text: "Generate AI-powered quizzes on any topic to test your knowledge.",
    },
    {
      title: "⚡ Fast & Responsive",
      text: "Built using Next.js and Gemini AI for a fast, modern and responsive experience.",
    },
  ];

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#EEF2FF 0%,#F8FAFC 50%,#FFFFFF 100%)",
          padding: "40px 20px 60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Hero */}

          <section
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "800",
                color: "#312E81",
                marginBottom: "20px",
                letterSpacing: "-2px",
              }}
            >
              📘 StudyMate AI
            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#555",
                maxWidth: "850px",
                margin: "0 auto",
                lineHeight: "38px",
              }}
            >
              Your personal AI-powered study assistant. Chat with AI,
              summarize long notes instantly, generate quizzes, and learn
              smarter using Gemini AI.
            </p>

            <div
              style={{
                marginTop: "45px",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/chat">
                <button
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-4px)";
                    e.target.style.boxShadow =
                      "0 15px 30px rgba(79,70,229,.35)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 10px 25px rgba(79,70,229,.25)";
                  }}
                  style={{
                    padding: "16px 38px",
                    background:
                      "linear-gradient(90deg,#4F46E5,#6366F1)",
                    color: "white",
                    border: "none",
                    borderRadius: "14px",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: ".3s",
                    boxShadow:
                      "0 10px 25px rgba(79,70,229,.25)",
                  }}
                >
                  🤖 Start Chat
                </button>
              </Link>

              <Link href="/quiz">
                <button
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-4px)";
                    e.target.style.boxShadow =
                      "0 15px 30px rgba(6,182,212,.35)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 10px 25px rgba(6,182,212,.25)";
                  }}
                  style={{
                    padding: "16px 38px",
                    background:
                      "linear-gradient(90deg,#06B6D4,#3B82F6)",
                    color: "white",
                    border: "none",
                    borderRadius: "14px",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: ".3s",
                    boxShadow:
                      "0 10px 25px rgba(6,182,212,.25)",
                  }}
                >
                  📚 Generate Quiz
                </button>
              </Link>
            </div>
          </section>

          {/* Cards */}

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(79,70,229,.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,.08)";
                }}
                style={{
                  background: "white",
                  padding: "30px",
                  minHeight: "220px",
                  borderRadius: "18px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                  transition: ".3s",
                  cursor: "pointer",
                }}
              >
                <h2
                  style={{
                    color: "#312E81",
                    marginBottom: "15px",
                  }}
                >
                  {card.title}
                </h2>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "28px",
                  }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}