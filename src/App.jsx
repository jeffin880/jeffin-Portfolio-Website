import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Philosophy from "./pages/Philosophy"
import Academic from "./pages/Academic"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Capstone from "./pages/Capstone"
import Contact from "./pages/Contact"
import CoverLetter from "./pages/CoverLetter.jsx"

function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <Home />
      <About />
      <Philosophy />
      <Academic />
      <Resume />
      <CoverLetter/>
      <Projects />
      <Capstone />
      <Contact />
    </div>
  )
}

export default App