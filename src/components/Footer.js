export default function Footer() {
  return (
    <footer
      style={{
        background: "#312E81",
        color: "white",
        textAlign: "center",
        padding: "30px",
        marginTop: "60px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>📘 StudyMate AI</h3>

      <p>AI-powered study assistant built with Next.js & Gemini AI.</p>

      <p
        style={{
          marginTop: "12px",
          fontSize: "14px",
          opacity: 0.8,
        }}
      >
        © 2026 StudyMate AI. All Rights Reserved.
      </p>
    </footer>
  );
}