import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { notes } = await request.json();

    // Validate notes
    if (!notes || !notes.trim()) {
      return Response.json(
        {
          summary: "Please enter some study notes.",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = `
You are StudyMate AI, a helpful educational assistant.

Summarize the following study notes in simple, clear language.

Requirements:
- Keep the important information.
- Remove unnecessary repetition.
- Use short bullet points.
- Explain difficult terms briefly when necessary.
- Do not add information that is not present in the notes.
- Make the summary useful for exam revision.
- Keep the structure easy to read.

Study Notes:
${notes.trim()}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return Response.json({
      summary: response.text,
    });
  } catch (error) {
    console.error("Notes API error:", error);

    return Response.json(
      {
        summary:
          "Gemini is temporarily busy. Please wait a few seconds and try again.",
      },
      {
        status: 503,
      }
    );
  }
}