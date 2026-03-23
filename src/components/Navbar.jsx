function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-teal-500/30 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-teal-400">
          Jeffin Portfolio
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-gray-300 font-medium">
          
          <li>
            <a href="#home" className="hover:text-teal-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-teal-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#philosophy" className="hover:text-teal-400 transition">
              Philosophy
            </a>
          </li>

          <li>
            <a href="#academic" className="hover:text-teal-400 transition">
              Academic
            </a>
          </li>

          <li>
            <a href="#resume" className="hover:text-teal-400 transition">
              Resume
            </a>
          </li>

          <li>
  <a href="#coverletter" className="hover:text-teal-400 transition">
    Cover Letter
  </a>
</li>

          <li>
            <a href="#projects" className="hover:text-teal-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#capstone" className="hover:text-teal-400 transition">
              Capstone
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar