# 📘 StudyMate AI

StudyMate AI is an AI-powered study assistant built with **Next.js, React, and Google Gemini AI**. It helps students understand academic topics through AI-powered explanations, generate practice quizzes, and simplify study notes through a simple and responsive web interface.

## 🚀 Live Application

https://studymate-ai-virid.vercel.app/

## 💻 GitHub Repository

https://github.com/wadhawanianchal-dotcom/studymate-ai

---

## 📌 Project Brief

StudyMate AI helps university and college students get quick, easy-to-understand explanations and personalized study material for academic topics. Users can ask questions, generate practice quizzes, and simplify study notes through one accessible interface. I chose this idea because students often need immediate academic support while studying, and AI can provide personalized explanations and learning material based on the student's input.

---

## 🎯 Problem It Solves

Students can struggle with difficult academic concepts, creating practice questions, or simplifying large amounts of study material.

StudyMate AI provides an interactive study environment where users can:

* Ask academic questions and receive AI-generated explanations
* Generate quizzes for different topics
* Simplify study notes
* Access study features through a responsive web interface

### Target Users

* University students
* College students
* Learners preparing for exams
* Students who want quick explanations of academic concepts

---

# ✨ Features

## 🤖 AI Study Chat

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

## 📝 AI Quiz Generator

Users can enter a topic and generate an AI-powered quiz.

The generated quiz is designed around:

* 5 multiple-choice questions
* 4 options per question
* Correct answers
* Topic-based question generation

The quiz API was also tested during development and successfully returned a `200` response during local testing.

---

## 📚 AI Study Notes

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

## 📱 Responsive Interface

The application is designed to work across different screen sizes, including desktop and mobile devices.

---

## 🛡️ Error Handling

The application includes error handling for failed AI requests.

If an AI request cannot be completed, the interface displays an error message instead of leaving the user without feedback.

For example:

```text
❌ Failed to connect to Gemini.
```

The application also handles temporary Gemini API availability problems.

---

# 🧠 AI Integration

StudyMate AI uses Google's Gemini AI through the:

```text
@google/genai
```

package.

AI is integrated into three main study workflows.

## 1. AI Chat

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

The AI prompt is designed to make Gemini behave as a helpful study assistant and provide explanations suitable for learning.

---

## 2. AI Quiz Generation

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

The AI generates questions and answer options dynamically instead of relying only on hard-coded quiz content.

---

## 3. AI Study Notes

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

# 🏗️ Technology Stack

## Frontend

* React
* Next.js
* JavaScript
* HTML
* CSS
* Tailwind CSS

## Backend / API

* Next.js App Router API Routes
* Google Gemini API

## AI

* Google Gemini
* `@google/genai`

## Testing

* Vitest
* React Testing Library
* jsdom
* `@vitest/coverage-v8`

## Deployment

* Vercel

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

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

### `src/app/`

Contains the application's pages and API routes.

### `src/app/api/chat/`

Handles AI chat requests.

### `src/app/api/quiz/`

Handles AI quiz generation.

### `src/app/api/notes/`

Handles AI-powered note summarization.

### `src/components/`

Contains reusable React components.

### `ChatBox.test.jsx`

Contains automated tests for the main ChatBox component and its user interactions.

---

# 🧪 Testing Evidence

Testing was implemented using **Vitest and React Testing Library**.

The ChatBox test suite covers the main user interactions and error handling.

## Test Command

```bash
npm test -- --coverage
```

## Current Test Result

```text
Test Files  1 passed (1)
Tests       5 passed (5)
```

The test suite verifies:

* StudyMate AI greeting and input rendering
* Sending a message and displaying the AI response
* API connection failure handling
* Preventing empty messages from being sent
* Sending a message using the Enter key

## Coverage Result

```text
All files   | 100% Statements | 90% Branches | 100% Functions | 100% Lines
ChatBox.jsx | 100% Statements | 90% Branches | 100% Functions | 100% Lines
```

The final test run achieved:

* **100% statement coverage**
* **90% branch coverage**
* **100% function coverage**
* **100% line coverage**

This exceeds the capstone requirement of at least **50% component coverage**.

---

# ♿ Accessibility Audit

Accessibility was tested using **axe DevTools / axe-core 4.12.1** against the application.

## Final axe Result

```text
Test URL:
https://studymate-ai-virid.vercel.app/

Total Issues: 0
Automatic Issues: 0
Guided Issues: 0
Manual Issues: 0
Critical: 0
Serious: 0
Moderate: 0
Minor: 0

WCAG 2.1 AA
Total Issues: 0
```

The final local accessibility audit also reported:

```text
Total Issues: 0
```

### Accessibility Improvement

The initial audit identified a serious WCAG 2.1 AA color-contrast issue in the Home navigation link.

The original yellow text had insufficient contrast against the white background:

```text
Foreground: #FBBF24
Background: #FFFFFF
Contrast: 1.66:1
Required: 4.5:1
```

The navigation color was changed to a darker accessible color:

```css
a[href="/"] {
  color: #4338ca !important;
}
```

After the change, the axe DevTools audit reported **0 issues**.

---

# ⚡ Performance & Lighthouse Audit

The application was evaluated using **Google Lighthouse**.

The audit covered:

* Performance
* Accessibility
* Best Practices
* SEO

Lighthouse was used during development to identify areas that could be improved before final deployment.

The application was also tested on the production deployment to verify that the deployed version was functional.

---

# 🚀 Deployment

The production application is deployed using **Vercel**.

## Production URL

https://studymate-ai-virid.vercel.app/

## Deployment Flow

```text
Local Development
       ↓
GitHub Repository
       ↓
Vercel
       ↓
Production Deployment
```

The project is connected to GitHub so changes pushed to the `main` branch can be deployed through Vercel.

---

# 🛡️ Failure Handling & Known Limitations

AI services depend on external API availability, so AI features can temporarily fail even when the frontend application itself is working correctly.

During development, Gemini returned a `503 UNAVAILABLE` response for some Chat and Notes requests because the selected model was experiencing high demand.

Example:

```text
status: 503

This model is currently experiencing high demand.
Spikes in demand are usually temporary.
```

The application handles these failures by returning an error response rather than crashing the entire frontend.

## Current Limitations

* AI responses depend on Gemini API availability.
* Temporary Gemini service errors can prevent Chat or Notes generation.
* The application does not currently provide a complete offline AI fallback.
* AI-generated content may require user verification for academic accuracy.
* The application currently does not include user authentication or persistent user accounts.

---

# 🔄 Rollback Plan

If a production deployment introduces a breaking change:

1. Identify the problematic deployment.
2. Check the GitHub commit responsible for the change.
3. Revert the problematic commit if necessary.
4. Push the corrected code to GitHub.
5. Allow Vercel to create a new deployment.
6. Verify the production application after deployment.

For a larger production issue, a previous stable Vercel deployment can be used as the recovery point.

---

# 📋 Deployment Checklist

Before final production submission, the following areas were checked:

* [x] Application builds successfully
* [x] Production deployment created
* [x] Live URL available
* [x] Main pages accessible
* [x] AI API routes implemented
* [x] Error handling implemented
* [x] Automated tests implemented
* [x] All automated tests passing
* [x] Test coverage above 50%
* [x] Lighthouse audit performed
* [x] Accessibility audit performed
* [x] WCAG 2.1 AA automated accessibility issues resolved
* [x] GitHub repository available
* [x] Deployment rollback process documented

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

Coverage is generated by Vitest using:

```text
@vitest/coverage-v8
```

---

# 🧩 Application Pages

## Home

```text
/
```

Provides the main introduction to StudyMate AI.

## AI Chat

```text
/chat
```

Allows students to ask AI-powered study questions.

## Quiz

```text
/quiz
```

Allows students to generate AI-powered quizzes.

## Notes

```text
/notes
```

Provides AI-powered study note functionality.

## About

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

The AI is therefore a functional capability inside the product rather than a separate feature added only for demonstration.

---

# 🔮 Future Improvements

Possible future improvements include:

* Add stronger structured validation for AI responses
* Improve AI response reliability
* Add user authentication
* Save user quizzes and notes
* Add study progress tracking
* Add streaming AI responses
* Add multiple AI model fallback support
* Add stronger academic-content validation
* Expand automated tests to additional components and API routes

---

# 💭 Reflection

Building StudyMate AI demonstrated that integrating an AI model into a frontend application involves more than simply sending a prompt and displaying the response. One of the challenging parts was handling external AI service failures because the application can be functioning correctly while the model service is temporarily unavailable.

Another important lesson was that testing and production readiness require attention beyond the main happy path. The ChatBox test suite was expanded to cover successful requests, failed requests, empty input, and keyboard interaction. This helped verify that the main AI interaction behaves correctly under different conditions.

The accessibility audit also exposed a real color-contrast problem in the navigation. Fixing the issue and running the audit again showed that accessibility needs to be tested rather than assumed.

The project also demonstrated that performance, accessibility, testing, deployment, and error handling are all part of shipping a frontend application. Building a feature that works is only one part of production readiness.

If I continued developing StudyMate AI, I would prioritize stronger AI response validation, additional API and component tests, and improved reliability when the primary AI model is temporarily unavailable.

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
