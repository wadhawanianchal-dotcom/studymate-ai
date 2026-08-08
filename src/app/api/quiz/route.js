import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { topic } = await request.json();

    // Prevent empty or invalid topics
    if (!topic || !topic.trim()) {
      return Response.json(
        {
          quiz: "Please enter a study topic.",
        },
        {
          status: 400,
        }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
Create an easy-to-understand multiple-choice quiz about "${topic.trim()}".

Requirements:
- Generate exactly 5 questions.
- Each question must have exactly 4 options labeled A, B, C, and D.
- Only one option must be correct for each question.
- At the end, provide an Answer Key.
- For every answer, write the correct option letter AND the exact text of the correct option.
- Before giving the final answer, carefully verify that every answer-key letter matches the option containing the correct answer.
- Never give an answer letter that points to a different option.
- Keep the questions accurate, clear, and suitable for students.

Use this format:

Question 1:
[question]

A) [option]
B) [option]
C) [option]
D) [option]

Question 2:
[question]

A) [option]
B) [option]
C) [option]
D) [option]

Continue until Question 5.

Answer Key:
1. [correct letter] - [exact correct option text]
2. [correct letter] - [exact correct option text]
3. [correct letter] - [exact correct option text]
4. [correct letter] - [exact correct option text]
5. [correct letter] - [exact correct option text]
      `,
    });

    return Response.json({
      quiz: response.text,
    });
  } catch (error) {
    console.error("Quiz generation error:", error);

    return Response.json(
      {
        quiz: "Failed to generate quiz. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}