import Navbar from './components/navbar'
import Projects from './components/projects'
import Contact from './components/contact'
import Hero from './components/hero'
import './App.css'

function App() {

  return (
    <div className="bg-zinc-800">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App