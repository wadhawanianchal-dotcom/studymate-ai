import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: message,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        reply: error.message,
      },
      {
        status: 500,
      }
    );
  }
}