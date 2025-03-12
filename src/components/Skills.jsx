import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: "logo-html5", level: "Advanced", count: 85 },
    { name: "CSS", logo: "logo-css3", level: "Advanced", count: 80 },
    { name: "JavaScript", logo: "logo-javascript", level: "Intermediate", count: 75 },
    { name: "React", logo: "logo-react", level: "Intermediate", count: 70 },
    { name: "Node.js", logo: "logo-nodejs", level: "Intermediate", count: 65 },
    { name: "Firebase", logo: "logo-firebase", level: "Beginner", count: 50 },
    { name: "MongoDB", logo: "leaf-outline", level: "Beginner", count: 50 },
  ];

  return (
    <section id="skills" className="py-16 bg-white text-black">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-600 mt-2 text-lg">Technical Proficiencies</p>
        <hr className="border-cyan-600 w-24 mx-auto my-4" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative p-6 bg-gray-300 bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl"
          >
            {/* Skill Icon */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center text-5xl text-cyan-400">
              <ion-icon name={skill.logo}></ion-icon>
            </div>

            {/* Skill Name */}
            <h4 className="text-xl font-semibold text-center mt-4">{skill.name}</h4>

            {/* Progress Circle */}
            <div className="relative w-24 h-24 mx-auto mt-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#2d3748"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgb(8,145,170)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={`${251.2 - (skill.count / 100) * 251.2}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-black">
                {skill.count}%
              </span>
            </div>

            {/* Skill Level */}
            <p className="text-gray-800 text-center mt-4">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
