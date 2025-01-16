import React from 'react';
import Icons from '../../assets/Icons';

const Experience = () => {
    const experiences = [
        {
          company: "Hex Softwares",
          role: "Artificial Intelligence Intern",
          period: "Sep 2024 – Oct 2024",
          description: "Contributed to major projects as a AI Developer, specializing in NLP, ML, and Django or Flask.",
          responsibilities: "Developed a AI Chatbot creation, automation task, and editing platform using AI.",
        
        },
        {
          company: "TechnoHacks EduTech",
          role: "Python Development",
          period: "Oct 2023 – Nov 2023",
          description: "Collaborating with senior developers to design and implement new features and improvements.",
          responsibilities: "Writing clean, readable, and well-document code in Python Participating in code reviews and contributing to the improvement of the codebase.",
          
        },
        {
          company: "Sofcorn Pvt Ltd",
          role: "Python Traine",
          period: " Dec 2022 – May 2023",
          description: "Learned and applied python programming skills to build scalable backend systems and Gained hands on experience with popular frameworks such as Django.",
          
        }
      ];
      
  
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#e8e6e1' }}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="relative mt-10 mb-12">
            <h2 className="text-5xl font-bold tracking-wider">
              PROFESSIONAL<br />EXPERIENCE
            </h2>
          </div>
  
          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 border-l-2 border-gray-400 hover:border-gray-600 transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-200" />
                
                {/* Experience Content */}
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-semibold tracking-wide">{exp.company}</h3>
                    <span className="text-gray-600 font-medium tracking-wide">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-xl text-gray-700 font-medium">{exp.role}</h4>
                  
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                      {exp.description}
                    </p>
                    
                    {exp.responsibilities && (
                      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                        <span className="font-medium">Key Contribution:</span> {exp.responsibilities}
                      </p>
                    )}
                  </div>
  
                  {/* App Store Links */}
                  {(exp.playStoreLink || exp.iosAppStoreLink) && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {exp.playStoreLink && (
                        <a 
                          href={exp.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition-colors"
                        >
                        <div>
                            <Icons.PlayStoreIcon />
                        </div>
                           Play Store
                        </a>
                      )}
                      {exp.iosAppStoreLink && (
                        <a 
                          href={exp.iosAppStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition-colors"
                        >
                          <Icons.AppStoreIcon /> App Store
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
  
          {/* Additional Info */}
          <div className="mt-16">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Throughout these experiences, I've worked extensively with React, React Native, Node.js, 
                Django, and various other modern web technologies. Each role has contributed to my 
                growth as a Full Stack Developer and strengthened my ability to deliver scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;