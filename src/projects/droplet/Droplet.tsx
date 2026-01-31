import { Link } from "react-router-dom";
import { useState } from "react";
import "./Droplet.css";

const features = [
  {
    icon: "🎯",
    title: "Personalized Goals",
    description:
      "Daily water intake calculated from your body weight - minimum and recommended goals tailored just for you.",
  },
  {
    icon: "⚡",
    title: "Quick Logging",
    description:
      "Log water with a single tap. Set up your bottle size for even faster tracking.",
  },
  {
    icon: "🎉",
    title: "Celebrations",
    description:
      "Watch Droplet cheer you on and celebrate with confetti when you hit your goals.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "All data stays on your device. No account required, no data collected.",
  },
];

const waterEmojis = ["💧", "💦", "🌊", "💧", "💦", "💧", "💧", "💦"];

export function Droplet() {
  const WATER_RAIN_COUNT = 20;
  const [waterRainDrops] = useState<
    {
      left: string;
      animationDelay: string;
      animationDuration: string;
      emoji: string;
    }[]
  >(() =>
    Array.from({ length: WATER_RAIN_COUNT }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
      emoji: waterEmojis[i % waterEmojis.length],
    }))
  );

  return (
    <div className="droplet-page">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-shape shape-1" />
        <div className="floating-shape shape-2" />
        <div className="floating-shape shape-3" />
        <div className="water-rain">
          {waterRainDrops.map((drop, i) => (
            <span
              key={i}
              className="water-drop"
              style={{
                left: drop.left,
                animationDelay: drop.animationDelay,
                animationDuration: drop.animationDuration,
              }}
            >
              {drop.emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="droplet-header">
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

      <main className="droplet-content">
        {/* Hero Section */}
        <section className="droplet-hero">
          <div className="status-badge">
            <span className="status-dot" />
            Available on iOS
          </div>
          <h1 className="droplet-title">
            <span className="gradient-text">Droplet</span>
          </h1>
          <p className="droplet-tagline">
            Your friendly hydration companion that makes drinking water fun and personal.
          </p>
        </section>

        {/* About Section */}
        <section className="droplet-about">
          <div className="about-card">
            <h2>About Droplet</h2>
            <p>
              Droplet is a native iOS app that helps you stay hydrated throughout the day.
              With smart goals based on your body weight and an adorable animated buddy
              that reacts to your progress, staying hydrated has never been more enjoyable.
            </p>
            <p className="highlight-text">
              It's not just about drinking water — it's about building a healthy habit
              with a companion that cheers you on every step of the way.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="droplet-features">
          <h2>Features</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="droplet-tech">
          <h2>Built With</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-name">SwiftUI</span>
              <span className="tech-desc">Modern declarative UI</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">SwiftData</span>
              <span className="tech-desc">Native persistence</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Canvas API</span>
              <span className="tech-desc">Custom animations</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="droplet-footer">
          <Link to="/droplet/privacy" className="privacy-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Privacy Policy
          </Link>
        </footer>
      </main>
    </div>
  );
}
