"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkStyle = (path) => ({
    textDecoration: "none",
    color: pathname === path ? "#FBBF24" : "white",
    fontWeight: pathname === path ? "700" : "600",
    fontSize: "17px",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#312E81",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          fontSize: "28px",
          fontWeight: "700",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        📘 StudyMate AI
      </Link>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link href="/" style={getLinkStyle("/")}>
          Home
        </Link>

        <Link href="/chat" style={getLinkStyle("/chat")}>
          AI Chat
        </Link>

        <Link href="/quiz" style={getLinkStyle("/quiz")}>
          Quiz
        </Link>

        <Link href="/notes" style={getLinkStyle("/notes")}>
          Notes
        </Link>

        <Link href="/about" style={getLinkStyle("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
}