import { Routes, Route } from 'react-router-dom'
import { Hero, Projects, Footer, ScrollToTop, NotFound } from './components'
import { CommitStory } from './projects/commit-story'
import { Droplet, DropletPrivacy, DropletWhatsNew } from './projects/droplet'
import { Sessions } from './projects/sessions'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commit-story" element={<CommitStory />} />
        <Route path="/droplet" element={<Droplet />} />
        <Route path="/droplet/privacy" element={<DropletPrivacy />} />
        <Route path="/droplet/whats-new" element={<DropletWhatsNew />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
