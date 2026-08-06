import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#EEF2FF 0%,#F8FAFC 50%,#FFFFFF 100%)",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "46px",
              fontWeight: "800",
              color: "#312E81",
              marginBottom: "12px",
            }}
          >
            ℹ️ About StudyMate AI
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#6B7280",
              fontSize: "18px",
              lineHeight: "30px",
              marginBottom: "40px",
              maxWidth: "750px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            StudyMate AI is an AI-powered learning platform built with Next.js
            and Gemini AI. It helps students study smarter by answering
            questions, generating quizzes, and summarizing notes instantly.
          </p>

          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 15px 40px rgba(79,70,229,.12)",
              border: "1px solid #E5E7EB",
            }}
          >
            <h2
              style={{
                color: "#312E81",
                marginBottom: "20px",
              }}
            >
              🚀 Features
            </h2>

            <ul
              style={{
                color: "#555",
                fontSize: "17px",
                lineHeight: "34px",
                paddingLeft: "25px",
              }}
            >
              <li>🤖 AI-powered Study Chat using Gemini AI</li>
              <li>📚 Automatic Quiz Generator</li>
              <li>📝 AI Notes Summarizer</li>
              <li>⚡ Fast and Responsive Next.js Interface</li>
              <li>🎓 Designed to improve student learning experience</li>
            </ul>

            <hr
              style={{
                margin: "35px 0",
                border: "none",
                borderTop: "1px solid #E5E7EB",
              }}
            />

            <h2
              style={{
                color: "#312E81",
                marginBottom: "20px",
              }}
            >
              🛠 Technologies Used
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {[
                "Next.js",
                "React",
                "Gemini AI",
                "JavaScript",
                "HTML",
                "CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "#EEF2FF",
                    color: "#312E81",
                    padding: "10px 18px",
                    borderRadius: "30px",
                    fontWeight: "600",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <hr
              style={{
                margin: "35px 0",
                border: "none",
                borderTop: "1px solid #E5E7EB",
              }}
            />

            <p
              style={{
                textAlign: "center",
                color: "#6B7280",
                fontSize: "16px",
              }}
            >
              © 2026 StudyMate AI • Built with ❤️ using Next.js & Gemini AI
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}