import { Routes, Route } from 'react-router-dom'
import { Hero, Projects, Footer, ScrollToTop } from './components'
import { CommitStory } from './projects/commit-story'
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
        <Route path="/sessions" element={<Sessions />} />
      </Routes>
    </>
  )
}

export default App
