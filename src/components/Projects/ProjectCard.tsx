import { Link } from 'react-router-dom'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="project-icon">{project.icon}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  // Internal route - use React Router Link
  if (project.route) {
    return (
      <Link to={project.route} className="project-card">
        {content}
      </Link>
    )
  }

  // External URL - use anchor tag
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        {content}
      </a>
    )
  }

  // No link - use article
  return <article className="project-card">{content}</article>
}
