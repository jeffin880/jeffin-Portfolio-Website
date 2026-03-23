import FadeInSection from "../components/FadeInSection"

function Academic() {
  return (
    <section
      id="academic"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <FadeInSection className="w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          Academic Credentials
        </h2>

        {/* Single Compact Box */}
        <div className="bg-[#052e2b]/80 backdrop-blur-lg border border-teal-500/30 rounded-2xl p-6 shadow-lg text-center hover:-translate-y-2 hover:shadow-teal-500/20 transition duration-300">

          <p className="text-gray-300 mb-2">
            George Brown College
          </p>

          <p className="text-white font-semibold mb-2">
            Computer Programming and Analysis
          </p>

          <p className="text-gray-400 text-sm">
            Expected Graduation: 2026
          </p>

        </div>

      </FadeInSection>
    </section>
  )
}

export default Academic