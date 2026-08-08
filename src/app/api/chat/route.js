import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Validate empty input on the server
    if (!message || !message.trim()) {
      return Response.json(
        {
          reply: "Please enter a study-related question.",
        },
        {
          status: 400,
        }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
You are StudyMate AI, a helpful study assistant.

Answer the student's question clearly and accurately.
Explain difficult concepts in simple language.
Use examples when they help understanding.
If the question is unrelated to studying, politely explain that you are designed primarily for study-related questions.

Student question:
${message.trim()}
      `,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      {
        reply: "Sorry, I couldn't process your question right now. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}