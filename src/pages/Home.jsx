import FadeInSection from "../components/FadeInSection"
import profile from "../assets/Profile.jpg"
import { useEffect, useState } from "react"

function Home() {
  const fullText = "Hi, I'm Jeffin Yohannan"
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(fullText.slice(0, typedText.length + 1))
        if (typedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        setTypedText(fullText.slice(0, typedText.length - 1))
        if (typedText === "") {
          setIsDeleting(false)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <FadeInSection className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 min-h-screen">

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight min-h-[120px]">
              {typedText}
              <span className="text-teal-400 animate-pulse">|</span>
            </h1>

            <p className="text-xl text-teal-400 mb-6">
              Computer Programming Student | Full-Stack Developer
            </p>

            <p className="text-gray-300 leading-8 max-w-xl mb-8 mx-auto md:mx-0">
  This portfolio showcases my academic work, technical skills, and project
  experience as a Computer Programming student at George Brown College.
  It highlights my work in full-stack development, including web applications,
  APIs, mobile apps, and a capstone project. The goal of this portfolio is to
  demonstrate my ability to design, develop, and deliver practical software
  solutions.
</p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 bg-teal-500 text-black rounded-lg font-semibold hover:bg-teal-400 transition duration-300 hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-teal-400 text-teal-400 rounded-lg font-semibold hover:bg-teal-400 hover:text-black transition duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-teal-400 object-cover shadow-xl animate-[float_4s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default Home