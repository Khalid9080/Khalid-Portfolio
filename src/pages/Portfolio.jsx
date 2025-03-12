import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/p1.png";
import proj2 from "../assets/images/p2.png";
import proj3 from "../assets/images/p3.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Interactive Matrimony Website",
    desc: "BlissBonds is a full-stack matrimonial website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides users with a seamless platform to find their perfect match, interact with premium members, share success stories, and manage their profiles efficiently.",
    name: "BlissBonds",
    devstack: "MongoDB, Express, React JS, Node.JS, Firebase, Tailwind CSS, Material Tailwind",
    link: "https://bliss-bonds.web.app/",
    git: "https://github.com/Khalid9080/BlissBonds.git",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Dynamic Lost and Found System",
    desc: "WhereItIs is a platform designed to help you easily find lost items and reconnect with your belongings. Whether you've misplaced something small or lost a precious item, the goal is to make the process of finding what matters to you simpler and more effective.",
    name: "WhereIsIt",
    devstack: "MongoDB, React Js, Node.js, Firebase,Tailwind CSS, Daisy UI",
    link: "https://whereisit-697aa.web.app/",
    git: "https://github.com/Khalid9080/WhereIsIt.git",
    src: proj2,
    type: "frontend",
  },
  {
    title: "Interactive E-Learning Platform",
    desc: "GadgetHeaven is an online eCommerce platform where users can purchase a wide range of digital accessories, including watches, power banks, mobile devices, laptops, chargers, PCs, and more.",
    name: "GadgetHeaven",
    devstack: "React JS, Tailwind CSS, Javascript, HTML5, Vanilla CSS, Local Storage",
    link: "https://khalid-gadget-heaven.netlify.app/",
    git: "https://github.com/Khalid9080/Gadget-Heaven.git",
    src: proj3,
    type: "frontend",
  },
];

export const Portfolio = () => {
  const [expandedIndexes, setExpandedIndexes] = useState(
    projects.map((_, index) => index) // Open all projects by default
  );

  const toggleExpand = (index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndexes.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndexes.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8 mt-6">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-white/80 font-semibold mb-2">
                          Name: {project.name}
                        </p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
