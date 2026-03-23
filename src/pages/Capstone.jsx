import FadeInSection from "../components/FadeInSection"

function Capstone() {
  return (
    <section id="capstone" className="py-20 px-6">
      <FadeInSection className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-teal-700 text-center">
          Capstone Project — DriveTree
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Summary */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Project Summary
            </h3>
            <p className="text-gray-300 leading-7">
              DriveTree is a platform that connects learner drivers with driving mentors.
              It allows users to search instructors, view profiles, and simplify the learning
              process through a modern digital solution.
            </p>
          </div>

          {/* Project Vision */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Project Vision
            </h3>
            <p className="text-gray-300 leading-7">
              The vision of DriveTree is to make the driving education journey easier,
              more transparent, and accessible for all learners through a centralized platform.
            </p>
          </div>

          {/* Business Requirements */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Business Requirements
            </h3>
            <p className="text-gray-300 leading-7">
              Key requirements include user authentication, instructor listings,
              profile viewing, booking support, reviews, and a responsive interface.
            </p>
          </div>

          {/* Project Plan */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Project Plan
            </h3>
            <p className="text-gray-300 leading-7">
              The project was developed in multiple sprints with defined milestones,
              planning documents, and progress tracking through status reports.
            </p>
          </div>

          {/* Requirements Analysis */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Requirements Analysis & Design
            </h3>
            <p className="text-gray-300 leading-7">
              The system design focused on usability, responsive layouts, and modular
              architecture for frontend and backend components.
            </p>
          </div>

          {/* Wireframes */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Wireframes / Mockups
            </h3>
            <p className="text-gray-300 leading-7">
              UI/UX designs were created using Figma to visualize layout,
              navigation flow, and user interactions before development.
            </p>
          </div>

          {/* Status Reports */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Status Reports
            </h3>
            <p className="text-gray-300 leading-7">
              Progress was tracked through structured sprint reports including
              completed tasks, pending work, risks, and next steps.
            </p>
          </div>

          {/* Implementation */}
          <div className="bg-[#052e2b] border border-teal-500 shadow-xl rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">
              System Implementation
            </h3>
            <p className="text-gray-300 leading-7">
              The system includes frontend development, backend services,
              database integration, and preparation for deployment using modern tools.
            </p>
          </div>

        </div>

      </FadeInSection>
    </section>
  )
}

export default Capstone