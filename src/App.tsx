import Navbar from './components/navbar'
import Button from './components/button'
import Hero from './components/hero'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Button buttonName={"click me"}/> */}
      <Hero/>
    </div>
  )
}

export default App