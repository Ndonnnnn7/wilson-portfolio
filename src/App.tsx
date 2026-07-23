import About from './app/about/page'
import Experience from './app/experience/page'
import Footer from './app/footer/page'
import Home from './app/home/page'
import Navbar from './app/navbar/page'
import ProjectDetail from './app/projects/detail'
import Projects from './app/projects/page'
import { Route, Routes } from 'react-router-dom'

function Portfolio() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-x-clip bg-[#f7f8fc] focus:outline-none" tabIndex={-1}>
        <Home />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={<Portfolio />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/experience" element={<Portfolio />} />
      <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
