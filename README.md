# 🚀 TaskForge AI

**TaskForge AI** is an AI-powered project and task management platform designed to help developers plan projects, generate development tasks, improve task descriptions, and understand project progress using artificial intelligence.

This project was developed as part of a **Full Stack Development Internship at Innovation Hacks**.

---

## ✨ Features

### 🤖 AI Task Generator
Enter a project idea and TaskForge AI generates practical development tasks automatically.

### ✨ AI Task Improver
Enter a simple task description and AI improves it by providing:
- Improved task description
- Suggested priority
- Useful subtasks

### 📊 AI Project Summary
Analyze project tasks and receive an AI-generated summary containing:
- Project progress
- Completed tasks
- Pending tasks
- Priority recommendations

### 📋 Project Dashboard
The dashboard provides quick project statistics:
- Total Tasks
- Completed Tasks
- Pending Tasks
- High Priority Tasks

### ⚡ Fast AI Processing
AI responses are generated locally using Ollama and the Qwen 2.5 1.5B model.

### 📱 Responsive Interface
The frontend is designed to work across desktop, tablet, and mobile screen sizes.

---

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS3

### Backend
- Node.js
- Express.js
- TypeScript
- REST API

### Database
- Supabase
- PostgreSQL

### Artificial Intelligence
- Ollama
- Qwen 2.5 1.5B

### Development & Testing
- VS Code
- Postman
- Git
- GitHub
- Vercel

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │    React Frontend   │
                    │      Vite + CSS     │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │   Node.js + TS      │
                    └───────┬───────┬─────┘
                            │       │
                 ┌──────────┘       └──────────┐
                 ▼                             ▼
        ┌─────────────────┐          ┌─────────────────┐
        │ Supabase /      │          │ Ollama AI       │
        │ PostgreSQL      │          │ Qwen 2.5 1.5B  │
        └─────────────────┘          └─────────────────┘