import FadeInSection from "../components/FadeInSection"

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <FadeInSection className="w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/40 bg-[#052e2b] shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          
          {/* Animated background glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" />

          <div className="relative p-8 md:p-12">
            <div className="mb-8 text-center group">
              <p className="text-teal-400 text-sm tracking-[0.25em] uppercase mb-3">
                Career Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How I Approach My Work
              </h2>
              <div className="w-20 h-1 bg-teal-400 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-32" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-teal-500/20">
                <h3 className="text-lg font-semibold text-teal-300 mb-3">
                  Continuous Learning
                </h3>
                <p className="text-gray-300 leading-7">
                  I believe technology keeps changing, so a developer should
                  always stay curious, keep learning, and adapt to new tools and
                  ideas.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-teal-500/20">
                <h3 className="text-lg font-semibold text-teal-300 mb-3">
                  Clean & Useful Solutions
                </h3>
                <p className="text-gray-300 leading-7">
                  My goal is not just to make something work, but to create
                  solutions that are clean, efficient, maintainable, and useful
                  for real users.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-teal-500/20">
                <h3 className="text-lg font-semibold text-teal-300 mb-3">
                  Growth Through Teamwork
                </h3>
                <p className="text-gray-300 leading-7">
                  I value collaboration, communication, and learning from others.
                  Strong teamwork helps create better products and better
                  developers.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-teal-500/20">
              <p className="text-gray-300 leading-8 text-center max-w-3xl mx-auto">
                My long-term aim is to become a well-rounded full-stack developer
                who can build strong applications, contribute to innovative
                projects, and continue improving both technical and professional
                skills over time.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default Philosophy