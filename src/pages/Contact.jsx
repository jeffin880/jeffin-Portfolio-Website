import FadeInSection from "../components/FadeInSection"

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <FadeInSection className="w-full max-w-5xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to connect with me for opportunities, collaborations, or project discussions.
          </p>
        </div>

        {/* 2 Boxes instead of 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Email Box */}
          <div className="group bg-[#052e2b]/80 backdrop-blur-lg border border-teal-500/30 rounded-2xl p-8 text-center shadow-lg transition duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-teal-500/20">
            <div className="text-4xl mb-4 transition duration-300 group-hover:scale-110">
              📧
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <p className="text-gray-300 mb-4">jeffinyohannan880@gmail.com</p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block px-5 py-2 rounded-lg bg-teal-500 text-black font-semibold transition duration-300 hover:bg-teal-400 hover:scale-105"
            >
              Send Email
            </a>
          </div>

          {/* GitHub Box */}
          <div className="group bg-[#052e2b]/80 backdrop-blur-lg border border-teal-500/30 rounded-2xl p-8 text-center shadow-lg transition duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-teal-500/20">
            <div className="text-4xl mb-4 transition duration-300 group-hover:scale-110">
              💻
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">GitHub</h3>
            <p className="text-gray-300 mb-4">github.com/jeffin880</p>
            <a
              href="https://github.com/jeffin880"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2 rounded-lg bg-teal-500 text-black font-semibold transition duration-300 hover:bg-teal-400 hover:scale-105"
            >
              View GitHub
            </a>
          </div>

        </div>

      </FadeInSection>
    </section>
  )
}

export default Contact