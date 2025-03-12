import React from "react";

const About = () => {
  const info = [
    { text: "Completed Projects", count: "07" },
    { text: "Freelance Work", count: "185" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1Wa1mMi0nKydP0zTHSrJwKD2IAFmC0C4A/view?usp=sharing";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-16 bg-white text-white">
      <div className="text-center">
        <h3 className="text-4xl text-black font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-2 text-lg">My introduction</p>
        <hr className="border-cyan-600 w-24 mx-auto my-4" />
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="p-10 bg-gray-300 bg-opacity-30  rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <div className="text-gray-800 leading-7">
            <p className="text-justify">
              I am a motivated and passionate Computer Science graduate
              specializing in <span className="text-cyan-500 font-semibold">MERN Stack Development, Artificial
              Intelligence, and Data Science</span>. With expertise in full-stack
              web development, I create dynamic applications using modern
              technologies.
            </p>
            <p className="mt-4 text-justify">
              I have built various projects, including <span className="text-cyan-500 font-semibold">AI-powered
              applications, employee management systems, e-commerce
              platforms, and real-time task management apps</span>. Additionally,
              I have experience working with Flask, Django, Redux, Firebase,
              and API integrations.
            </p>
            <p className="mt-4 text-justify">
              As a <span className="text-cyan-500 font-semibold">freelance writer on EssayShark</span>, I have completed
              over 185 projects with an average rating of 9.42/10, ranking
              among the top experts. My technical skills span Python,
              JavaScript, React.js, Next.js, Node.js, Tailwind CSS, and SQL/NoSQL
              databases.
            </p>
            <p className="mt-4 text-justify">
              Passionate about learning and innovation, I aim to develop
              <span className="text-cyan-500 font-semibold"> efficient and scalable applications</span> that solve
              real-world problems.
            </p>

            <div className="flex mt-8 items-center gap-10">
              {info.map((content) => (
                <div key={content.text} className=" text-center  p-6 bg-cyan-600   rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
                  <h3 className="md:text-4xl text-2xl font-semibold text-black">
                    {content.count}
                    <span className="text-white">+</span>
                  </h3>
                  <span className="md:text-base text-sm">{content.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
                onClick={navigateToResume}
              >
                Check Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
