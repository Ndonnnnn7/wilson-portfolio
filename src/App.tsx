import About from './app/about/page'
import Experience from './app/experience/page'
import Footer from './app/footer/page'
import Home from './app/home/page'
import Navbar from './app/navbar/page'
import Projects from './app/projects/page'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}

export default App
