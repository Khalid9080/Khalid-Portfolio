

import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";
import project3 from "../assets/images/proj2.jpg";


export const About = () => {
  return (
    <section id="about" className="text-white p-8 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-6xl font-bold mb-12 text-center">
          About <span className="text-emerald-300">Me</span>
        </h2>

        {/* Who Am I Section */}
        <div className="border border-white/20 rounded-lg p-8 bg-white/5 shadow-lg mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-emerald-300">Who Am I?</h3>
          <p className="text-white/70 text-lg leading-relaxed text-justify">
            I&#39;m <span className="text-emerald-300 font-semibold">Khalid Saifullah</span>, a 
            passionate <span className="text-emerald-300 font-semibold">MERN Stack Developer</span> with a deep enthusiasm for problem-solving and technology. 
            I hold a Bachelor&apos;s degree in <span className="text-emerald-300 font-semibold">Computer Science & Engineering</span> from 
            American International University-Bangladesh (AIUB), where I honed my expertise in 
            software development, testing, and building robust applications.
          </p>

          <p className="text-white/70 text-lg text-justify leading-relaxed mt-4">
            Over the years, I have successfully completed <span className="text-emerald-300 font-semibold">25+ projects</span>, 
            gaining hands-on experience in designing and developing modern, scalable web applications.
            My core skills include <span className="text-emerald-300 font-semibold">React.js, Next.js, Node.js, Express.js, MongoDB,</span> and 
            UI frameworks like <span className="text-emerald-300 font-semibold">Tailwind CSS</span>.
          </p>

          <p className="text-white/70 text-lg text-justify leading-relaxed mt-4">
            Apart from coding, I enjoy <span className="text-emerald-300 font-semibold">football, photography, painting, and traveling</span>, 
            which inspire my creativity beyond the digital world. Currently, I am looking for 
            opportunities to collaborate with dynamic teams, contribute my skills, and continue 
            growing in the tech industry.
          </p>
        </div>

        {/* About Sections */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 justify-center">
            <div className="border border-white/20 rounded-lg p-6 bg-white/5 shadow-md w-full">
              <h3 className="text-2xl font-bold mb-2 text-emerald-300 text-center">
                01. Background
              </h3>
              <p className="text-white/70 leading-relaxed text-center">
                My journey in technology started with curiosity, which evolved into a strong 
                foundation in web development. I am dedicated to continuous learning and innovation 
                in software engineering.
              </p>
              <div className="mt-4 relative border border-white/20 rounded-lg overflow-hidden">
                <img src={project1} alt="Project 1" className="w-full h-48 object-cover" />
              </div>
            </div>

            <div className="border border-white/20 rounded-lg p-6 bg-white/5 shadow-md w-full">
              <h3 className="text-2xl font-bold mb-2 text-emerald-300 text-center">
                02. Expertise
              </h3>
              <p className="text-white/70 leading-relaxed text-center">
                I specialize in developing scalable web applications using modern technologies. 
                My expertise includes both front-end and back-end development, ensuring seamless 
                and efficient solutions.
              </p>
              <div className="mt-4 relative border border-white/20 rounded-lg overflow-hidden">
                <img src={project3} alt="Project 1" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Goals Section - Full Width */}
          <div className="w-full max-w-7xl mx-auto mt-12">

            <div className="border border-white/20 rounded-lg p-8 bg-white/5 shadow-md">
            <div>
                <h3 className="text-2xl font-bold  mb-2 text-emerald-300 text-center">
                  03. Goals
                </h3>
                <p className="text-white/70 leading-relaxed text-center">
                  My goal is to continue evolving as a developer, taking on exciting projects, 
                  and contributing to the tech community. I aim to push the boundaries of web 
                  development and stay ahead of industry trends.
                </p>
              </div>
              <div className="relative border border-white/20 rounded-lg overflow-hidden mt-4">
                <img src={project2} alt="Project 2" className="w-full h-48 object-cover" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
