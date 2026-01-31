import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'

function renderApp(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  )
}

describe('App Navigation', () => {
  it('renders the home page at root route', () => {
    renderApp('/')
    expect(screen.getByText('Droplet')).toBeInTheDocument()
    expect(screen.getByText('commit-story')).toBeInTheDocument()
    expect(screen.getByText('Sessions')).toBeInTheDocument()
  })

  it('navigates to Droplet page when clicking the project card', async () => {
    const user = userEvent.setup()
    renderApp('/')

    const dropletCard = screen.getByText('Droplet').closest('a')
    expect(dropletCard).toHaveAttribute('href', '/droplet')

    await user.click(dropletCard!)

    // Should now be on the Droplet page
    expect(screen.queryByText('commit-story')).not.toBeInTheDocument()
  })

  it('navigates to commit-story page when clicking the project card', async () => {
    const user = userEvent.setup()
    renderApp('/')

    const commitStoryCard = screen.getByText('commit-story').closest('a')
    expect(commitStoryCard).toHaveAttribute('href', '/commit-story')

    await user.click(commitStoryCard!)

    // Should navigate away from home
    expect(screen.queryByText('Droplet')).not.toBeInTheDocument()
  })

  it('navigates to Sessions page when clicking the project card', async () => {
    const user = userEvent.setup()
    renderApp('/')

    const sessionsCard = screen.getByText('Sessions').closest('a')
    expect(sessionsCard).toHaveAttribute('href', '/sessions')

    await user.click(sessionsCard!)

    // Should navigate away from home
    expect(screen.queryByText('Droplet')).not.toBeInTheDocument()
  })

  it('renders Droplet page directly via route', () => {
    renderApp('/droplet')
    // Should not show the home page projects grid
    expect(screen.queryByText('commit-story')).not.toBeInTheDocument()
  })

  it('renders commit-story page directly via route', () => {
    renderApp('/commit-story')
    expect(screen.queryByText('Droplet')).not.toBeInTheDocument()
  })

  it('renders Sessions page directly via route', () => {
    renderApp('/sessions')
    expect(screen.queryByText('Droplet')).not.toBeInTheDocument()
  })

  it('renders Droplet privacy page at nested route', () => {
    renderApp('/droplet/privacy')
    // Should render privacy page, not home
    expect(screen.queryByText('commit-story')).not.toBeInTheDocument()
  })
})

describe('Project Cards have correct link behavior', () => {
  it('all project cards on home page are clickable links', () => {
    renderApp('/')

    const dropletLink = screen.getByText('Droplet').closest('a')
    const commitStoryLink = screen.getByText('commit-story').closest('a')
    const sessionsLink = screen.getByText('Sessions').closest('a')

    expect(dropletLink).toBeInTheDocument()
    expect(commitStoryLink).toBeInTheDocument()
    expect(sessionsLink).toBeInTheDocument()
  })

  it('project cards have correct routes', () => {
    renderApp('/')

    expect(screen.getByText('Droplet').closest('a')).toHaveAttribute('href', '/droplet')
    expect(screen.getByText('commit-story').closest('a')).toHaveAttribute('href', '/commit-story')
    expect(screen.getByText('Sessions').closest('a')).toHaveAttribute('href', '/sessions')
  })
})
