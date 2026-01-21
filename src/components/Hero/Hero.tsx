import { Button } from '../ui/Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Personal Project Playground</div>
        <h1 className="hero-title">
          Welcome to <span className="gradient-text">BeloTechnologies</span>
        </h1>
        <p className="hero-description">
          A space where curiosity meets code. Building fun projects,
          experimenting with new ideas, and turning "what if" into "check this
          out."
        </p>
        <div className="hero-cta">
          <Button href="#projects">View Projects</Button>
          <Button
            variant="secondary"
            href="https://github.com/BeloTechnologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </div>
      <div className="scroll-indicator">Scroll</div>
    </section>
  )
}
