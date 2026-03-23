import FadeInSection from "../components/FadeInSection"

function Projects() {
  const projectList = [
    {
      title: "Weather App",
      description:
        "Developed a responsive weather application using React and API integration to display real-time weather information through a clean and user-friendly interface.",
      tech: ["React", "JavaScript", "API", "CSS"],
      github: "https://github.com/jeffin880/101512594_comp3123_labtest2.git",
      file: "/weather-app.pdf"
    },
    {
      title: "Chat App",
      description:
        "Built a real-time chat application using Node.js, Express, Socket.IO, and MongoDB to support instant messaging and dynamic user interaction.",
      tech: ["Node.js", "Socket.IO", "MongoDB", "Express"],
      github: "https://github.com/jeffin880/101512594_lab_test1_chat_app.git",
      file: "/chat-app.pdf"
    },
    {
      title: "Restaurant API",
      description:
        "Created a backend REST API with CRUD functionality for managing restaurant records, testing endpoints and data handling through Postman and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "Postman"],
      github: "https://github.com/jeffin880/Comp3133_lab3_restaurant_database.git",
      file: "/restaurant-api.pdf"
    },
    {
      title: "SmartCart iOS App",
      description:
        "Contributed to a group-based iOS application built with SwiftUI and Core Data for managing shopping lists with local device storage and a simple mobile interface.",
      tech: ["SwiftUI", "Core Data", "iOS"],
      github: "https://github.com/HeemalSyangbo/SmartCart_G77_comp3097.git",
      file: "/COMP_3097.mp4"
    },
    {
      title: "Movie GraphQL Project",
      description:
        "Developed a GraphQL-based project for querying and managing movie-related data, demonstrating knowledge of modern API structure and backend integration.",
      tech: ["GraphQL", "Node.js", "JavaScript"],
      github: "https://github.com/jeffin880/101512594_w6_3133_nodejs_express_apollo_graphql.git",
      
    },
    {
      title: "DriveTree Capstone",
      description:
        "Worked on a capstone platform designed to connect learner drivers with mentors, combining modern web technologies, interface design, and full-stack development concepts.",
      tech: ["React", "Node.js", "MongoDB", "Figma", "Docker"],
      github: "https://github.com/HeemalSyangbo/DriveTree.git",
      file: "/DriveTree.pdf"
    }
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <FadeInSection className="max-w-6xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-3">
            Academic Work Samples
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of academic and technical projects that highlight my
            experience in full-stack development, APIs, mobile applications, and
            software design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-[#052e2b]/80 backdrop-blur-lg border border-teal-500/30 shadow-xl rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-teal-500/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-teal-500/15 text-teal-300 border border-teal-500 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-teal-500 hover:bg-teal-400 transition text-black px-5 py-2 rounded-xl font-medium"
                >
                  View on GitHub
                </a>

                <a
                  href={project.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition px-5 py-2 rounded-xl font-medium"
                >
                  View File
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default Projects