import { Link } from "react-router-dom";
import { useState } from "react";
import screenshot1 from "../../assets/screenshot1.png";
import screenshot2 from "../../assets/screenshot2.png";
import screenshot3 from "../../assets/screenshot3.png";
import "./Sessions.css";

const repos = [
  {
    name: "session-mobile",
    url: "https://github.com/BeloTechnologies/session-mobile",
    description:
      "Cross-platform mobile app built for iOS and Android with a native feel.",
    stack: ["Flutter", "Dart"],
  },
  {
    name: "session-user",
    url: "https://github.com/BeloTechnologies/session-user",
    description:
      "Backend API service powering user authentication, workout logging, and social features.",
    stack: ["Go", "Gin", "PostgreSQL", "AWS"],
  },
];

const fitnessWords = [
  "💪",
  "🏋️",
  "🔥",
  "⚡",
  "🏃",
  "🤸",
  "🏋️",
  "💥",
  "❤️",
  "❤️",
  "❤️",
  "❤️",
];

export function Sessions() {
  const FITNESS_RAIN_COUNT = 18;
  const [fitnessRainDrops] = useState<
    {
      left: string;
      animationDelay: string;
      animationDuration: string;
      word: string;
    }[]
  >(() =>
    Array.from({ length: FITNESS_RAIN_COUNT }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
      word: fitnessWords[i % fitnessWords.length],
    })),
  );

  return (
    <div className="sessions-page">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-shape shape-1" />
        <div className="floating-shape shape-2" />
        <div className="floating-shape shape-3" />
        <div className="fitness-rain">
          {fitnessRainDrops.map((drop, i) => (
            <span
              key={i}
              className="fitness-drop"
              style={{
                left: drop.left,
                animationDelay: drop.animationDelay,
                animationDuration: drop.animationDuration,
              }}
            >
              {drop.word}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sessions-header">
        <Link to="/" className="back-link">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </header>

      <main className="sessions-content">
        {/* Hero Section */}
        <section className="sessions-hero">
          <div className="status-badge">
            <span className="status-dot" />
            Archived Project
          </div>
          <h1 className="sessions-title">
            <span className="gradient-text">Sessions</span>
          </h1>
          <p className="sessions-tagline">
            A gym-focused social media app that was successfully deployed to the
            App Store.
          </p>
        </section>

        {/* About Section */}
        <section className="sessions-about">
          <div className="about-card">
            <h2>About Sessions</h2>
            <p>
              Sessions is a gym-focused social media app that allows users to
              log their workouts, connect with friends, and share their fitness
              journey.
            </p>
            <p className="highlight-text">
              At Sessions it's not about lifting more weight than the person
              next to you, it is about lifting each other up.
            </p>
            <p className="open-source-note">
              This project has been retired and is now open sourced for the
              community to learn from and build upon.
            </p>
          </div>
        </section>

        {/* Screenshots */}
        <section className="sessions-screenshots">
          <h2>App Screenshots</h2>
          <div className="screenshots-grid">
            <div className="screenshot-wrapper">
              <img src={screenshot1} alt="Sessions app screenshot 1" />
            </div>
            <div className="screenshot-wrapper">
              <img src={screenshot2} alt="Sessions app screenshot 2" />
            </div>
            <div className="screenshot-wrapper">
              <img src={screenshot3} alt="Sessions app screenshot 3" />
            </div>
          </div>
        </section>

        {/* Open Source Repos */}
        <section className="sessions-repos">
          <h2>Open Source Repositories</h2>
          <div className="repos-grid">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <div className="repo-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div className="repo-info">
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className="repo-stack">
                    {repo.stack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="repo-arrow">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
