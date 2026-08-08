# StudyMate AI

StudyMate AI is an AI-powered study assistant built with Next.js and Google Gemini AI. It helps students understand academic concepts, ask study-related questions, generate quizzes, and summarize study notes.

## Live Application

https://studymate-ai-virid.vercel.app/

## GitHub Repository

https://github.com/wadhawanianchal-dotcom/studymate-ai

## Features

- AI-powered study chat
- Simple explanations of academic concepts
- AI-generated quizzes
- Study notes assistance
- Student-focused interface
- Error handling for failed AI requests
- Responsive web interface
- Google Gemini AI integration

## Technology Stack

- Next.js
- React
- JavaScript
- Google Gemini AI
- @google/genai
- Vitest
- React Testing Library
- HTML/CSS

## AI Integration

StudyMate AI uses Google Gemini AI through the `@google/genai` package.

The application sends the user's study question to a Next.js API route. The API route sends the request to Gemini and returns the generated response to the frontend.

The Gemini API key is stored using an environment variable and is not exposed directly in the frontend.

## Application Structure

```text
src/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   ├── notes/
│   │   └── quiz/
│   ├── chat/
│   ├── notes/
│   ├── quiz/
│   └── page.js
│
├── components/
│   ├── ChatBox.js
│   ├── Footer.js
│   ├── Navbar.js
│   ├── NotesBox.js
│   └── QuizBox.js
│
└── ...