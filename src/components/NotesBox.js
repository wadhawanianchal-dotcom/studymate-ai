"use client";

import { useState } from "react";

export default function NotesBox() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarizeNotes = async () => {
    if (!notes.trim()) return;

    setLoading(true);
    setSummary("");

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes,
        }),
      });

      const data = await response.json();

      setSummary(data.summary);
    } catch (error) {
      setSummary("❌ Failed to summarize notes.");
    }

    setLoading(false);
  };

  return (
    <>
      <textarea
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <button
        onClick={summarizeNotes}
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
        {loading ? "Summarizing..." : "Summarize Notes"}
      </button>

      {summary && (
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
          {summary}
        </div>
      )}
    </>
  );
}