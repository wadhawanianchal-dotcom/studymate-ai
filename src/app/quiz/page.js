import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QuizBox from "../../components/QuizBox";

export default function Quiz() {
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
            📚 AI Quiz Generator
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
            Enter any study topic and instantly generate AI-powered practice
            quizzes to test your knowledge.
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
            <QuizBox />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}