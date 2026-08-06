import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { topic } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `Create a quiz on "${topic}".

Generate:
- 5 multiple-choice questions
- Each question should have 4 options (A, B, C, D)
- At the end provide the correct answers.

Keep the quiz easy to understand.`,
    });

    return Response.json({
      quiz: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        quiz: "Failed to generate quiz.",
      },
      {
        status: 500,
      }
    );
  }
}