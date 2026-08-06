import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { notes } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
Summarize these study notes in simple bullet points.

Notes:
${notes}
      `,
    });

    return Response.json({
      summary: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        summary: "❌ Failed to summarize notes.",
      },
      {
        status: 500,
      }
    );
  }
}