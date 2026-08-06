import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ChatBox from "../../components/ChatBox";

export default function Chat() {
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
          alignItems: "flex-start",
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
            🤖 AI Study Chat
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
            Ask any study-related question and receive instant AI-powered
            explanations, examples, and solutions powered by Gemini AI.
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
            <ChatBox />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}