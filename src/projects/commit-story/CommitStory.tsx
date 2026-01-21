import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CommitStory.css'

export function CommitStory() {
  const [repoUrl, setRepoUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (repoUrl.trim()) {
      // TODO: Fetch commits and analyze
      console.log('Analyzing repo:', repoUrl)
    }
  }

  return (
    <div className="commit-story">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-shape shape-1" />
        <div className="floating-shape shape-2" />
        <div className="floating-shape shape-3" />
        <div className="floating-shape shape-4" />
        <div className="code-rain">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="code-drop" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}>
              {['git', 'push', 'pull', 'merge', 'commit', 'branch', '{ }', '< />', '++', '--'][i % 10]}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="commit-story-header">
        <Link to="/" className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        <h1 className="commit-story-title">
          <span className="gradient-text">commit</span>-story
        </h1>
        <p className="commit-story-subtitle">
          Turn your git history into a visual narrative
        </p>
      </header>

      {/* Main input section */}
      <main className="commit-story-main">
        <form onSubmit={handleSubmit} className="repo-form">
          <div className="input-wrapper">
            <div className="input-glow" />
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="Paste a GitHub repo URL and watch the magic happen..."
              className="repo-input"
              autoFocus
            />
            <button type="submit" className="submit-btn" aria-label="Analyze repository">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="input-hint">
            Try something like: github.com/facebook/react
          </p>
        </form>

        {/* Feature preview cards */}
        <div className="feature-preview">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Commit Analytics</h3>
            <p>Visualize commit patterns and code evolution</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3>Sentiment Analysis</h3>
            <p>Understand the mood behind commit messages</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3>Architecture Map</h3>
            <p>See how your codebase structure evolved</p>
          </div>
        </div>
      </main>
    </div>
  )
}
