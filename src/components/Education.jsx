import React from "react";

const Education = () => {
  const educationDetails = [
    {
      logo: "school-outline",
      degree: "Bachelor of Computer Science",
      institution: "COMSATS University Islamabad, Abbottabad Campus, Pakistan",
      year: "[2020-2025]",
      desc: "Currently pursuing a Bachelor's degree in Computer Science, focusing on MERN stack development, AI, and Data Science.",
    },
    {
      logo: "book-outline",
      degree: "Intermediate (ICS)",
      institution: "Punjab Group of Colleges, Pind Dadan Khan Campus",
      grades: "Grade: 74.73%",
      year: "[2018-2020]",
      desc: "Completed Intermediate in Computer Science, gaining strong foundational knowledge in programming and mathematics.",
    },
  ];

  return (
    <section id="education" className="m-44 py-12 p-6 bg-cyan-600 bg-opacity-30   rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Education</span>
        </h3>
        <p className="text-gray-400 mt-2 text-lg">
          My academic journey and achievements.
        </p>
        <hr className="border-cyan-600 w-24 mx-auto my-4" />
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
            <div className="text-cyan-600 text-4xl">
              <ion-icon name={edu.logo}></ion-icon>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
              <p className="text-gray-400 text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.year}</p>
              {edu.grades && <p className="text-gray-300 text-sm">{edu.grades}</p>}
              <p className="text-gray-300 mt-2">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
