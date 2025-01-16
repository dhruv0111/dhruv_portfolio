import React from 'react';
import Icons from '../../assets/Icons';

const Projects = () => {
  const projects = [
    {
      title: "Food Recipe Site",
      description: "Developed a dynamic food recipe website using React and integrated APIs to display diverse recipes, enhancing user experience with seamless browsing and responsive design",
      tech: ["React", "Api", "Node.js", "Tailwindcss"],
      github: "https://github.com/dhruv0111/Food_recipe_React-App",
      live: "https://66b106bfa22e2a3519ea360c--lovely-tulumba-996947.netlify.app/"
    },
    {
      title: "Youtube Clone",
      description: "Created a fully functional YouTube clone using React.js, replicating the original platform's design and core features like video playback, search functionality, and responsive UI for an authentic user experience.",
      tech: ["React", "Node.js", "Html", "CSS"],
      github: "https://github.com/dhruv0111/Youtube-Clone",
      live: "https://66b07d78fa36558174c7d2c4--bespoke-piroshki-b3d934.netlify.app/"
    },
    {
      title: "Event Booking, Management and Analysis System",
      description: "Designed a real-time chat application featuring user authentication, private and group chats, live message updates, and a responsive user interface for seamless communication",
      tech: ["MongoDB", "React", "Express", "Node Js","Socket.io"],
      github: "https://github.com/dhruv0111/mern-talk-app",
      live: "https://mern-talk-app-1.onrender.com/login"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e6e1' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="relative mt-10 mb-12">
          <h2 className="text-5xl font-bold tracking-wider">
            FEATURED<br />PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="border-l-2 border-gray-400 pl-8 py-2">
                {/* Project Header */}
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                
                {/* Project Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium
                                 transform transition-all duration-200 hover:bg-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <Icons.GitHub /> View Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <Icons.ExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">More Projects</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              These are just a few highlights from my portfolio. Visit my GitHub profile to explore 
              more projects and see my coding style and development practices in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;