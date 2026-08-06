import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NotesBox from "../../components/NotesBox";

export default function NotesPage() {
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
            📝 AI Notes Summarizer
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#6B7280",
              fontSize: "18px",
              lineHeight: "30px",
              marginBottom: "35px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Paste your study notes and instantly convert long paragraphs into
            short, clear, and easy-to-understand summaries using Gemini AI.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 15px 40px rgba(79,70,229,.12)",
              border: "1px solid #E5E7EB",
            }}
          >
            <NotesBox />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}