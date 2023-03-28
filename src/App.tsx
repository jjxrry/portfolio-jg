import Navbar from './components/navbar'
import Projects from './components/projects'
import Contact from './components/contact'
import Hero from './components/hero'
import Stack from './components/stack'
import './App.css'

function App() {

  return (
    <div className="bg-zinc-800">
      <Navbar/>
      <Hero/>
      <Stack/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App