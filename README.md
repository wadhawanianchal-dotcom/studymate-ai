# 📘 StudyMate AI

StudyMate AI is an AI-powered study assistant built with **Next.js, React, and Google Gemini AI**. It helps students understand academic topics through AI-powered explanations, generate practice quizzes, and organize study notes through a simple and responsive interface.

## 🚀 Live Application

https://studymate-ai-virid.vercel.app/

## 💻 GitHub Repository

https://github.com/wadhawanianchal-dotcom/studymate-ai

---

## 📌 Project Brief

StudyMate AI helps students get quick, easy-to-understand explanations and practice material for academic topics. It is designed for university and college students who need quick clarification while studying, want to practice a topic through quizzes, or want to simplify study notes. I chose this idea because students often need immediate academic support while studying, and an AI-powered assistant can provide personalized explanations and learning material through one accessible interface.

---

## 🎯 Problem It Solves

Students can struggle with difficult academic concepts, creating practice questions, or simplifying large amounts of study material.

StudyMate AI provides an interactive study environment where users can:

* Ask academic questions and receive AI-generated explanations
* Generate quizzes for different topics
* Simplify study notes
* Access study features from a responsive web interface

### Target Users

* University students
* College students
* Learners preparing for exams
* Students who want quick explanations of academic concepts

---

## ✨ Features

### 🤖 AI Study Chat

Students can ask study-related questions and receive AI-powered explanations, examples, and solutions.

The request follows this flow:

```text
User Question
      ↓
Chat Interface
      ↓
Next.js API Route
      ↓
Google Gemini AI
      ↓
AI Response
      ↓
Chat Interface
```

---

### 📝 AI Quiz Generator

Users can enter a topic and generate an AI-powered quiz.

The generated quiz is designed around:

* 5 multiple-choice questions
* 4 options per question
* Correct answers
* Topic-based question generation

The quiz API was also tested during development and successfully returned a `200` response during local testing.

---

### 📚 Study Notes

The Notes section provides an AI-powered way to work with study material and generate simplified summaries.

The request follows:

```text
Study Notes
      ↓
Next.js API Route
      ↓
Google Gemini AI
      ↓
Simplified Summary
```

---

### 📱 Responsive Interface

The application is designed to work across different screen sizes, including desktop and mobile devices.

---

### 🛡️ Error Handling

The application includes error handling for failed AI requests.

If an AI request cannot be completed, the interface can display an error message instead of leaving the user without feedback.

For example:

```text
Sorry, I couldn't process your question right now.
Please try again.
```

The application also handles temporary Gemini API availability problems.

---

## 🧠 AI Integration

StudyMate AI uses Google's Gemini AI through the:

```text
@google/genai
```

package.

The application uses AI for three main study workflows:

### 1. AI Chat

The user submits a study question to the Chat interface.

```text
User question
    ↓
/api/chat
    ↓
Gemini API
    ↓
Generated explanation
    ↓
Chat UI
```

The AI prompt instructs Gemini to behave as a helpful study assistant and provide explanations suitable for learning.

---

### 2. AI Quiz Generation

The Quiz feature sends the selected topic to the Gemini API.

```text
Topic
    ↓
/api/quiz
    ↓
Gemini API
    ↓
5-question quiz
    ↓
Quiz interface
```

The AI is used to generate questions and answer options instead of relying on hard-coded quiz content.

---

### 3. AI Study Notes

The Notes feature sends study material to the Gemini API and requests a simplified summary.

```text
Study notes
    ↓
/api/notes
    ↓
Gemini API
    ↓
Simplified notes
    ↓
Notes interface
```

---

## 🏗️ Technology Stack

### Frontend

* React
* Next.js
* JavaScript
* HTML
* CSS / Tailwind CSS

### Backend / API

* Next.js App Router API Routes
* Google Gemini API

### AI

* Google Gemini
* `@google/genai`

### Testing

* Vitest
* React Testing Library
* jsdom
* `@vitest/coverage-v8`

### Deployment

* Vercel

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

The application uses the Next.js App Router structure.

A simplified architecture is:

```text
studymate-ai/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/
│   │   │   ├── quiz/
│   │   │   └── notes/
│   │   │
│   │   ├── chat/
│   │   ├── quiz/
│   │   ├── notes/
│   │   ├── about/
│   │   └── page
│   │
│   └── components/
│       ├── ChatBox.jsx
│       └── ChatBox.test.jsx
│
├── public/
│
├── package.json
├── vitest.config.js
└── README.md
```

### Main Components

#### `src/app/`

Contains the application's pages and API routes.

#### `src/app/api/chat/`

Handles AI chat requests.

#### `src/app/api/quiz/`

Handles AI quiz generation.

#### `src/app/api/notes/`

Handles AI-powered note summarization.

#### `src/components/`

Contains reusable React components.

#### `ChatBox.test.jsx`

Contains the automated test for the StudyMate AI chat component.

---

# 🧪 Testing Evidence

Testing was implemented using **Vitest and React Testing Library**.

The current test suite includes a test for the main ChatBox component.

### Test Command

```bash
npm test -- --coverage
```

### Current Test Result

```text
Test Files  1 passed (1)
Tests       1 passed (1)

✓ src/components/ChatBox.test.jsx
  ✓ renders the StudyMate AI greeting and input
```

### Coverage Result

```text
All files

Statements: 26.08%
Branches:   30%
Functions:  25%
Lines:      33.33%
```

Current coverage output:

```text
------------|---------|----------|---------|---------|
All files   | 26.08   | 30       | 25      | 33.33   |
```

### Test Covered

The current automated test verifies that the ChatBox component:

* Renders the StudyMate AI greeting
* Renders the user input
* Loads correctly in the testing environment

### Coverage Status

The current coverage is **below the FlyRank target of 50% component coverage**.

This is an area for future improvement by adding tests for:

* Chat submission
* Loading state
* Error state
* Quiz functionality
* Notes functionality
* API failure handling

The existing test nevertheless provides automated evidence that the main chat component renders correctly.

---

# ⚡ Performance & Accessibility

Performance and accessibility were considered during development and deployment.

### Lighthouse

The application was evaluated using Lighthouse during development.

The audit was used to identify performance and accessibility issues and guide improvements.

The main areas checked were:

* Performance
* Accessibility
* Best Practices
* SEO

### Accessibility

Accessibility was considered using WCAG principles.

Important areas include:

* Readable text
* Clear interface structure
* Keyboard-friendly controls
* Responsive layout
* Appropriate form controls
* Visible error feedback

### Improvement Process

Accessibility and performance audits were used to identify issues and improve the application before deployment.

---

# 🚀 Deployment

The production application is deployed using Vercel.

### Production URL

https://studymate-ai-virid.vercel.app/

### Deployment Flow

```text
Local Development
       ↓
GitHub Repository
       ↓
Vercel
       ↓
Production Deployment
```

The application can be redeployed from the GitHub repository if a production rollback or recovery is required.

---

# 🛡️ Failure Handling & Known Limitations

AI services depend on external API availability, so AI features can temporarily fail even when the frontend application itself is working correctly.

During local testing, Gemini returned a `503 UNAVAILABLE` response for some Chat and Notes requests because the selected model was experiencing high demand.

Example:

```text
status: 503

This model is currently experiencing high demand.
Spikes in demand are usually temporary.
```

The application handles these failures by returning an error response rather than crashing the entire frontend.

### Current Limitations

* AI responses depend on Gemini API availability.
* Temporary Gemini service errors can prevent Chat or Notes generation.
* Automated test coverage is currently below the desired 50% target.
* The application does not currently provide a complete offline AI fallback.
* AI-generated content may require user verification for academic accuracy.

---

# 🔄 Rollback Plan

If a production deployment introduces a breaking change:

1. Identify the problematic deployment.
2. Check the GitHub commit responsible for the change.
3. Revert the problematic commit if necessary.
4. Push the corrected code to GitHub.
5. Allow Vercel to create a new deployment.
6. Verify the production application after deployment.

For a larger production issue, the previous stable Vercel deployment can also be used as the recovery point.

---

# 📋 Deployment Checklist

Before production deployment, the following areas were checked:

* [x] Application builds successfully
* [x] Production deployment created
* [x] Live URL available
* [x] Main pages accessible
* [x] AI API routes implemented
* [x] Error handling implemented
* [x] Automated test implemented
* [x] Lighthouse audit performed
* [x] Accessibility considered
* [x] GitHub repository available
* [ ] Automated coverage at 50%+ components
* [ ] Full offline AI fallback

---

# 📖 Local Setup

## 1. Clone the Repository

```bash
git clone https://github.com/wadhawanianchal-dotcom/studymate-ai.git
```

## 2. Enter the Project

```bash
cd studymate-ai
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env.local` file in the project root.

Add the Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Do not commit `.env.local` or expose the API key publicly.

## 5. Start Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 🧪 Running Tests

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

The coverage report is generated by Vitest using `@vitest/coverage-v8`.

---

# 🧩 Application Pages

### Home

```text
/
```

Provides the main introduction to StudyMate AI.

### AI Chat

```text
/chat
```

Allows students to ask AI-powered study questions.

### Quiz

```text
/quiz
```

Allows students to generate AI-powered quizzes.

### Notes

```text
/notes
```

Provides AI-powered study note functionality.

### About

```text
/about
```

Provides information about the StudyMate AI application.

---

# 🔐 Security

The Gemini API key is stored as an environment variable and should never be hard-coded into frontend components.

The API key is accessed server-side through Next.js API routes.

Environment files containing secrets should not be committed to GitHub.

---

# 🎓 Why AI Is Meaningful in This Project

AI is not being used only as a chatbot.

StudyMate AI uses AI for actual learning workflows:

1. Explaining academic questions
2. Generating practice quizzes
3. Simplifying study notes

These workflows directly address common study tasks and allow the application to generate personalized learning material based on user input.

---

# 🔮 Future Improvements

Possible future improvements include:

* Increase automated test coverage to at least 50%+
* Add tests for API failure scenarios
* Add stronger structured validation for AI responses
* Improve AI response reliability
* Add user authentication
* Save user quizzes and notes
* Add study progress tracking
* Add more accessibility testing
* Add streaming AI responses
* Add multiple AI model fallback support
* Add stronger academic-content validation

---

# 💭 Reflection

Building StudyMate AI demonstrated that integrating an AI model into a frontend application involves more than simply sending a prompt and displaying the response. One of the challenging parts was handling external AI service failures because the application can be functioning correctly while the model service is temporarily unavailable.

Another important lesson was that testing and production readiness require attention beyond the main happy path. The application needed error states and automated testing so that failures could be detected and communicated instead of leaving users with an unexplained broken interface.

The project also showed the importance of accessibility and performance audits. Building a feature that works is only part of shipping a frontend application; the application also needs to be usable, testable, deployable, and understandable to another developer.

If I continued developing StudyMate AI, I would prioritize increasing automated test coverage, adding stronger AI response validation, and improving reliability when the primary AI model is temporarily unavailable.

The biggest lesson was that an AI-powered feature is only useful when the AI solves a real user problem. The AI itself is not the product; it is a capability inside the product.

---

# 📄 Project Information

**Project:** StudyMate AI

**Type:** AI-Powered Study Assistant

**Framework:** Next.js

**AI:** Google Gemini

**Testing:** Vitest + React Testing Library

**Deployment:** Vercel

**Repository:**
https://github.com/wadhawanianchal-dotcom/studymate-ai

**Live Application:**
https://studymate-ai-virid.vercel.app/
