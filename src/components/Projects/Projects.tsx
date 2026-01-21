import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A collection of experiments, tools, and things I'm building for
            fun.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
