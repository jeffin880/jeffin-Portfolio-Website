import FadeInSection from "../components/FadeInSection"

function CoverLetter() {
  return (
    <section
      id="coverletter"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <FadeInSection className="w-full max-w-md text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-teal-400 mb-6">
          Cover Letter
        </h2>

        {/* Box (same style as Resume/Academic) */}
        <div className="bg-[#052e2b]/80 backdrop-blur-lg border border-teal-500/30 shadow-lg rounded-2xl p-6 hover:-translate-y-2 hover:shadow-teal-500/20 transition duration-300">

          <p className="text-gray-300 mb-3">
            Professional Cover Letter
          </p>

          <p className="text-white font-semibold mb-4">
            Software Developer Position
          </p>

          <p className="text-gray-400 text-sm mb-6">
            Highlights my skills, experience, and career goals as a full-stack developer.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">

            <a
              href="/Cover-Letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-teal-500 text-black rounded-lg font-semibold hover:bg-teal-400 transition duration-300 hover:scale-105"
            >
              View Letter
            </a>

            <a
              href="/Cover-Letter.pdf"
              download
              className="px-5 py-2 border border-teal-400 text-teal-400 rounded-lg font-semibold hover:bg-teal-400 hover:text-black transition duration-300 hover:scale-105"
            >
              Download
            </a>

          </div>

        </div>

      </FadeInSection>
    </section>
  )
}

export default CoverLetter