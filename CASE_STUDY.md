# StudyMate AI — Case Study

## 1. Project Overview

StudyMate AI is an AI-powered study assistant built with Next.js and Google Gemini AI. The application helps students understand academic topics through AI-powered explanations, generate quizzes, and access study-related content through a simple and responsive interface.

The project was selected as my Frontend AI Engineering capstone because it combines frontend development with a meaningful AI use case. Instead of using AI only as a basic chatbot, StudyMate AI uses AI to support multiple study workflows, including question answering and quiz generation.

## 2. Problem

Students often need quick explanations when they are studying difficult academic topics. They may also spend additional time creating practice questions or organizing learning material.

StudyMate AI addresses this problem by providing an interactive study assistant where users can ask questions and receive AI-generated explanations and generate quizzes based on a selected topic.

## 3. Approach

I built the application using Next.js and React, with Google Gemini integrated through the Google GenAI SDK.

The main application areas are:

* AI Study Chat
* AI Quiz Generator
* Study Notes
* About page
* Responsive navigation and interface
* AI error handling
* Automated component testing

The application uses Next.js API routes to communicate with the Gemini API instead of exposing the API request directly in the client interface.

### Basic AI flow

```text
User Input
    ↓
React Frontend
    ↓
Next.js API Route
    ↓
Google Gemini AI
    ↓
Generated Response
    ↓
Frontend UI
```

## 4. AI Workflow Examples

### Workflow 1 — AI-assisted implementation

I used ChatGPT during development to help plan and implement frontend and AI-related functionality. I provided the requirements for features and used the generated suggestions as a starting point for implementation.

The generated code was not accepted blindly. I reviewed the code, integrated it into the project, tested it locally, and modified parts that did not work correctly with the existing application.

This helped me understand that AI-generated code still requires developer verification.

### Workflow 2 — Debugging AI-generated code

During development, some AI-generated or AI-assisted code did not work correctly in the existing project structure. I used ChatGPT to analyze errors and suggest possible fixes.

One example involved the AI API integration. The application initially returned errors when the Gemini API request failed. I inspected the terminal output and API response, identified the failing API call, and worked through the issue instead of assuming that the generated implementation was correct.

The final implementation includes error handling so that an unsuccessful AI request does not leave the user without feedback.

### Workflow 3 — Verification and testing

I also used AI assistance while working on testing and project verification. I created a Vitest test for the ChatBox component and ran the test suite locally.

The final test confirmed that the StudyMate AI greeting and input field render correctly.

The test result was:

```text
Test Files  1 passed
Tests       1 passed
```

I also generated a coverage report using:

```bash
npm test -- --coverage
```

The recorded coverage result was:

```text
Statements: 26.08%
Branches:   30%
Functions:  25%
Lines:      33.33%
```

I kept these results as actual evidence rather than claiming a higher coverage percentage than the project currently has.

## 5. AI Prompts and Iteration

During development, I used prompts to ask ChatGPT for implementation guidance, debugging help, and improvements to the application.

The general workflow was:

```text
Describe the problem
        ↓
Ask ChatGPT for an implementation or debugging approach
        ↓
Review the generated response
        ↓
Implement the useful parts
        ↓
Run the application
        ↓
Inspect errors
        ↓
Fix and verify
```

The important part of this workflow was verification. I did not treat AI-generated code as automatically correct. I tested the changes in the actual project and corrected problems when they appeared.

## 6. Hard Parts

The most difficult part of the project was integrating AI functionality into a real frontend application while also handling failures.

The Gemini API does not always respond successfully. During testing, the application received a `503 UNAVAILABLE` response because the selected Gemini model was experiencing high demand.

For example, the development server reported:

```text
status: 503
message: "This model is currently experiencing high demand."
```

This demonstrated an important production concern: an application cannot assume that an external AI service will always be available.

I therefore focused on displaying a useful error state instead of allowing the failure to silently break the interface.

Another challenge was testing. The initial coverage setup required the V8 coverage provider to be installed before the coverage command could run. After installing the required dependency, the coverage report could be generated successfully.

## 7. What I Learned

One of the biggest lessons from this project was that integrating an AI API is only one part of building an AI-powered application.

The application also needs:

* Error handling
* Input handling
* API failure handling
* Testing
* Accessibility considerations
* Performance checks
* Clear documentation
* Production deployment

I also learned that AI-generated code needs to be reviewed and tested. A generated solution may look correct but still fail when it is placed into the actual project.

## 8. What I Would Improve

If I continued developing StudyMate AI, I would improve the automated test coverage significantly. The current test evidence covers the ChatBox component, but the coverage report shows that more components and API behavior should be tested.

I would also improve resilience around AI service failures by adding more structured fallback behavior, clearer user-facing error messages, and potentially retry handling for temporary API failures.

Further improvements could include:

* More comprehensive component tests
* API integration tests
* Better loading states
* More detailed quiz validation
* Improved accessibility testing
* More robust AI response validation
* Monitoring for production API failures

## 9. Reflection

Building StudyMate AI showed me that shipping an AI-enabled frontend is different from simply connecting a frontend to an AI API. The application has to remain usable when the external service fails, and the developer has to verify AI-generated code rather than trusting it automatically.

The most useful part of the development process was the combination of AI assistance and manual verification. ChatGPT helped me move faster when implementing and debugging features, but testing the actual application revealed problems that required my own judgment and fixes.

This project improved my understanding of how frontend development, AI integration, testing, accessibility, and deployment fit together in a production-oriented workflow.

## 10. Project Links

### Live Application

https://studymate-ai-virid.vercel.app/

### GitHub Repository

https://github.com/wadhawanianchal-dotcom/studymate-ai

### Technology Stack

* Next.js
* React
* JavaScript
* Google Gemini AI
* Google GenAI SDK
* Vitest
* Vercel
* GitHub
