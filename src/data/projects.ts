import type { Project } from '../types'

export const projects: Project[] = [
  {
    icon: '💧',
    title: 'Droplet',
    description:
      'A friendly hydration companion that makes drinking water fun. Track intake with personalized goals based on your body weight.',
    tags: ['iOS', 'SwiftUI', 'SwiftData'],
    route: '/droplet',
  },
  {
    icon: '📖',
    title: 'commit-story',
    description:
      'Turn your git history into a visual narrative. Analyze commits, visualize patterns, and understand the mood behind your code.',
    tags: ['GitHub API', 'Visualization', 'AI'],
    route: '/commit-story',
  },
  {
    icon: '💪',
    title: 'Sessions',
    description:
      'A gym-focused social media app for logging workouts, connecting with friends, and sharing your fitness journey. Now open sourced.',
    tags: ['Flutter', 'Go', 'Archived'],
    route: '/sessions',
  },
]
