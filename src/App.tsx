import { Routes, Route } from 'react-router-dom'
import { Hero, Projects, Footer } from './components'
import { CommitStory } from './projects/commit-story'
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/commit-story" element={<CommitStory />} />
    </Routes>
  )
}

export default App
