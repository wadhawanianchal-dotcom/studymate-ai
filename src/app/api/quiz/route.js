import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
  try {
    const { topic } = await request.json();

    // Validate topic
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

    const prompt = `
You are StudyMate AI, a helpful educational quiz generator.

Create an easy-to-understand multiple-choice quiz about:
"${topic.trim()}"

Requirements:
- Generate exactly 5 questions.
- Each question must have exactly 4 options.
- Label the options exactly A), B), C), and D).
- Only one option must be correct.
- Questions must be accurate and suitable for students.
- Keep the difficulty beginner to intermediate.
- At the end, provide an Answer Key.
- For every answer, provide both the correct letter and the exact option text.
- Carefully verify that every answer-key letter matches the correct option.

Use exactly this format:

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

Question 3:
[question]

A) [option]
B) [option]
C) [option]
D) [option]

Question 4:
[question]

A) [option]
B) [option]
C) [option]
D) [option]

Question 5:
[question]

A) [option]
B) [option]
C) [option]
D) [option]

Answer Key:
1. [correct letter] - [exact correct option text]
2. [correct letter] - [exact correct option text]
3. [correct letter] - [exact correct option text]
4. [correct letter] - [exact correct option text]
5. [correct letter] - [exact correct option text]
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return Response.json({
      quiz: response.text,
    });
  } catch (error) {
    console.error("Quiz API error:", error);

    return Response.json(
      {
        quiz:
          "Gemini is temporarily busy. Please wait a few seconds and try again.",
      },
      {
        status: 503,
      }
    );
  }
}