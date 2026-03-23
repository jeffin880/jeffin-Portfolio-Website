import FadeInSection from "../components/FadeInSection"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <FadeInSection className="w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/40 bg-[#052e2b] shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          
          {/* Animated background glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-teal-300/10 rounded-full blur-3xl animate-pulse" />

          <div className="relative p-8 md:p-12">
            <div className="mb-8 text-center group">
              <p className="text-teal-400 text-sm tracking-[0.25em] uppercase mb-3">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who I Am
              </h2>
              <div className="w-20 h-1 bg-teal-400 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-32" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-teal-500/20">
                <h3 className="text-xl font-semibold text-teal-300 mb-3">
                  Background
                </h3>
                <p className="text-gray-300 leading-7">
                  I am a Computer Programming student with a strong interest in
                  full-stack development, UI design, and building practical
                  applications. I enjoy turning ideas into working digital
                  solutions that are both functional and user-friendly.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-teal-500/20">
                <h3 className="text-xl font-semibold text-teal-300 mb-3">
                  What I Focus On
                </h3>
                <p className="text-gray-300 leading-7">
                  My focus is on creating clean interfaces, writing organized
                  code, and continuously improving my technical skills. I enjoy
                  working with modern technologies and learning through projects
                  that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-teal-500/20 bg-white/5 backdrop-blur-sm p-6 transform transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-teal-500/20">
              <h3 className="text-xl font-semibold text-teal-300 mb-3 text-center">
                My Goal
              </h3>
              <p className="text-gray-300 leading-7 text-center max-w-3xl mx-auto">
                My goal is to grow as a developer, contribute to meaningful
                projects, and build a career where I can combine problem-solving,
                creativity, and technology to make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default About