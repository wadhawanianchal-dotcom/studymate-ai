# 📘 StudyMate AI

StudyMate AI is an AI-powered study assistant built with Next.js and Google Gemini AI. It helps students understand academic topics through AI-powered explanations, interactive quizzes, and study notes in a simple and accessible interface.

## 🚀 Live Application

https://studymate-ai-virid.vercel.app/

## 💻 GitHub Repository

https://github.com/wadhawanianchal-dotcom/studymate-ai

---

## 📌 Project Brief

StudyMate AI helps students get quick, easy-to-understand explanations and practice material for academic topics. It is designed for students who want an accessible study assistant that can explain concepts, answer study-related questions, and generate quizzes. I chose this project because students often need quick clarification while studying and an AI assistant can provide immediate, personalized support.

---

## 🎯 Problem It Solves

Students may struggle to understand difficult academic concepts or create practice questions while studying. StudyMate AI provides an interactive interface where students can ask questions and receive AI-generated explanations and can generate quizzes for different topics.

### Target Users

- University students
- College students
- Learners preparing for exams
- Students who want quick explanations of academic concepts

---

## ✨ Features

### 🤖 AI Study Chat

Students can ask study-related questions and receive AI-powered explanations, examples, and solutions.

### 📝 AI Quiz Generator

Users can enter a topic and generate a quiz containing:

- 5 multiple-choice questions
- 4 options per question
- Correct answers at the end

### 📚 Study Notes

The application provides a dedicated area for study-related notes and learning content.

### 📱 Responsive Interface

The interface is designed to work across different screen sizes, including desktop and mobile devices.

### 🛡️ Error Handling

The application handles failed AI requests and displays an error message instead of leaving the user without feedback.

---

## 🧠 AI Integration

StudyMate AI uses Google's Gemini AI through the `@google/genai` package.

The application uses two AI capabilities:

### AI Chat

The chat API sends the user's message to Gemini:

```text
User question → Next.js API route → Gemini AI → AI response → Chat interface