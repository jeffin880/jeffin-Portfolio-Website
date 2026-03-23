import FadeInSection from "../components/FadeInSection"

function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <FadeInSection className="w-full max-w-md text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-teal-400 mb-6">
          Resume
        </h2>

        {/* Card */}
        <div className="bg-[#052e2b]/80 backdrop-blur-lg border border-teal-500/30 shadow-lg rounded-2xl p-8 hover:-translate-y-2 hover:shadow-teal-500/20 transition duration-300">

          <h3 className="text-xl font-semibold text-white mb-3">
            My Resume
          </h3>

          <p className="text-gray-300 mb-6 leading-7 text-sm">
            Explore my education, technical skills, and project experience
            in full-stack development.
          </p>

          {/* Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-teal-500 text-black font-semibold transition duration-300 hover:bg-teal-400 hover:scale-105 hover:shadow-lg"
          >
            View Resume
          </a>

        </div>

      </FadeInSection>
    </section>
  )
}

export default Resume