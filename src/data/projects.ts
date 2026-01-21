import type { Project } from '../types'

export const projects: Project[] = [
  {
    icon: '📖',
    title: 'commit-story',
    description:
      'Turn your git history into a visual narrative. Analyze commits, visualize patterns, and understand the mood behind your code.',
    tags: ['GitHub API', 'Visualization', 'AI'],
    route: '/commit-story',
  },
  {
    icon: '🚀',
    title: 'Project Alpha',
    description:
      "A cutting-edge experiment pushing the boundaries of what's possible. Built for fun, designed to impress.",
    tags: ['React', 'TypeScript', 'AI'],
  },
  {
    icon: '🎮',
    title: 'Game Lab',
    description:
      'Interactive experiences and game prototypes. Where creativity meets code in the most playful way.',
    tags: ['Canvas', 'WebGL', 'Games'],
  },
  {
    icon: '🔧',
    title: 'Dev Tools',
    description:
      'Utilities and tools that make development more enjoyable. Solving problems I encounter daily.',
    tags: ['CLI', 'Automation', 'DX'],
  },
]
