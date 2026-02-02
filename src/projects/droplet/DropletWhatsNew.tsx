import { Link } from "react-router-dom";
import "./DropletPrivacy.css";
import "./DropletWhatsNew.css";

const versions = [
  { id: "v1-1-0", title: "Version 1.1.0", isLatest: true },
  { id: "v1-0-0", title: "Version 1.0.0", isLatest: false },
];

export function DropletWhatsNew() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="privacy-page">
      {/* Header */}
      <header className="privacy-header">
        <Link to="/droplet" className="back-link">
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
          Back to Droplet
        </Link>
      </header>

      <main className="privacy-content">
        <div className="privacy-card">
          {/* Title */}
          <div className="privacy-title-section">
            <span className="privacy-badge">Droplet</span>
            <h1 className="privacy-title">What's New</h1>
            <p className="privacy-date">Last Updated: February 2, 2026</p>
          </div>

          {/* Key highlight */}
          <div className="privacy-highlight">
            <div className="highlight-icon">✨</div>
            <div className="highlight-content">
              <h3>Stay Up to Date</h3>
              <p>
                See what's new in each version of Droplet. We're constantly
                working to improve your hydration tracking experience.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="privacy-toc">
            <h2 className="toc-title">Versions</h2>
            <ul className="toc-list">
              {versions.map((version, index) => (
                <li key={version.id}>
                  <button
                    onClick={() => scrollToSection(version.id)}
                    className="toc-link"
                  >
                    <span className="toc-number">{index + 1}</span>
                    {version.title}
                    {version.isLatest && <span className="latest-chip">Latest</span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="privacy-sections">
            <section id="v1-1-0" className="privacy-section">
              <h2>
                Version 1.1.0
                <span className="latest-chip">Latest</span>
              </h2>
              <p>
                <strong>Daily Reminders</strong>
              </p>
              <ul className="privacy-list">
                <li>
                  Get gentle hydration nudges at 6 AM, 12 PM, and 5 PM to stay
                  on track.
                </li>
              </ul>
              <p>
                <strong>Other</strong>
              </p>
              <ul className="privacy-list">
                <li>Software improvements and bug fixes</li>
              </ul>
            </section>

            <section id="v1-0-0" className="privacy-section">
              <h2>Version 1.0.0</h2>
              <p>
                <strong>Initial Release</strong>
              </p>
              <ul className="privacy-list">
                <li>
                  Droplet is here! Start tracking your daily hydration with a
                  simple, privacy-focused app.
                </li>
              </ul>
            </section>
          </div>

          {/* Footer note */}
          <div className="privacy-footer">
            <p>
              Thank you for using Droplet. We're excited to keep improving your
              hydration journey.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
