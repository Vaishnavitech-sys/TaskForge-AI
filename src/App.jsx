import { useState } from "react";
import "./App.css";

function App() {
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");
  const [summaryProject, setSummaryProject] = useState("");

  // AI Task Generator
  const generateTasks = async () => {
    if (!project) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/generate-tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ project }),
        }
      );

      const data = await response.json();
      setResult(data.generated_tasks || data.error);
    } catch (error) {
      setResult("Unable to connect to TaskForge API.");
    }

    setLoading(false);
  };

  // AI Task Improver
  const improveTask = async () => {
    if (!task) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/improve-task",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task }),
        }
      );

      const data = await response.json();
      setResult(data.ai_suggestion || data.error);
    } catch (error) {
      setResult("Unable to connect to TaskForge API.");
    }

    setLoading(false);
  };

  // AI Project Summary
  const projectSummary = async () => {
    if (!summaryProject) return;

    setLoading(true);
    setResult("");

    try {
      const tasks = [
        {
          title: "Create database",
          status: "completed",
          priority: "high",
        },
        {
          title: "Build dashboard",
          status: "pending",
          priority: "high",
        },
        {
          title: "Test API",
          status: "pending",
          priority: "medium",
        },
      ];

      const response = await fetch(
        "http://localhost:5000/api/ai/project-summary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          project: summaryProject,
          tasks,
          }),
        }
      );

      const data = await response.json();

      setResult(data.ai_summary || data.error);
    } catch (error) {
      setResult("Unable to connect to TaskForge API.");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      <header>
        <div>
          <h1>🚀 TaskForge AI</h1>
          <p>AI-Powered Project & Task Management</p>
        </div>

        <span className="status">● AI Online</span>
      </header>

      <main>

        <section className="hero">
          <h2>Build smarter. Manage better.</h2>

          <p>
            Use AI to generate development tasks and improve your project
            workflow.
          </p>
        </section>
        <div className="stats">

  <div className="stat-card">
    <span>📋</span>
    <h3>12</h3>
    <p>Total Tasks</p>
  </div>

  <div className="stat-card">
    <span>✅</span>
    <h3>5</h3>
    <p>Completed</p>
  </div>

  <div className="stat-card">
    <span>⏳</span>
    <h3>7</h3>
    <p>Pending</p>
  </div>

  <div className="stat-card">
    <span>🔥</span>
    <h3>3</h3>
    <p>High Priority</p>
  </div>

</div>

        <div className="cards">

          {/* AI TASK GENERATOR */}
          <div className="card">

            <div className="icon">🤖</div>

            <h3>AI Task Generator</h3>

            <p>
              Enter your project idea and let AI generate practical
              development tasks.
            </p>

            <textarea
              placeholder="Example: Build a student attendance management system"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />

            <button onClick={generateTasks}>
              {loading ? "Generating..." : "Generate Tasks"}
            </button>

          </div>


          {/* AI TASK IMPROVER */}
          <div className="card">

            <div className="icon">✨</div>

            <h3>AI Task Improver</h3>

            <p>
              Turn a simple task into a clear, detailed and actionable task.
            </p>

            <textarea
              placeholder="Example: Make login page"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={improveTask}>
              {loading ? "Improving..." : "Improve Task"}
            </button>

          </div>


          {/* AI PROJECT SUMMARY */}
          <div className="card">

            <div className="icon">📊</div>

            <h3>AI Project Summary</h3>

            <p>
              Get an AI-powered summary of your project's progress,
              pending tasks and priorities.
            </p>

            <textarea
              placeholder="Enter your project name"
              value={summaryProject}
              onChange={(e) => setSummaryProject(e.target.value)}
            />

            <button onClick={projectSummary}>
              {loading ? "Analyzing..." : "Generate Summary"}
            </button>

          </div>

        </div>


        {/* AI RESULT */}
        {result && (
          <section className="result">

            <h2>🤖 AI Result</h2>

            <pre>{result}</pre>

          </section>
        )}

      </main>

    </div>
  );
}

export default App;