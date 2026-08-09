# StudyMate AI — Capstone Reflection

## 1. Project Overview

StudyMate AI is an AI-powered study assistant built with Next.js and Gemini AI. It helps students understand study topics, ask questions, and generate simple quizzes.

## 2. What I Built

The application includes:

- AI Study Chat
- AI-generated quizzes
- Notes section
- About section
- Responsive user interface
- Error handling for AI requests
- Automated component testing
- Documentation and deployment checklist

## 3. AI Integration

Gemini AI is integrated through the Google GenAI SDK. The application sends user questions and quiz topics to the Gemini API and displays the generated responses in the interface.

## 4. Testing

I added a Vitest test for the ChatBox component. The test verifies that the StudyMate AI greeting and input field render correctly.

The test passes successfully using:

```bash
npm test 