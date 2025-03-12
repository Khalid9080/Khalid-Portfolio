// import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/images/KHALID___PIC.png";
import { FaDownload } from "react-icons/fa";
// import CV from "../assets/CV/Khalid Saifullah.pdf";

export const Hero = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">

      <div
        className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
                      bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
      />

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="relative z-10 text-center flex flex-col items-center mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 w-[280px] h-[280px] rounded-full border-4 border-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/30"
          >
            <img
              src={profilepic}
              alt="Profile Picture"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight  mb-4">
              Hi, I am <br /> Khalid <span className="text-emerald-400">Saifullah</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am a fullstack developer focusing on creating websites that
              provides user with best experience.
            </p>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2"
              >
                <div>
                  <a href="https://drive.google.com/file/d/1U9k9PXYvWk6DBczNdsF8kbohhlJsTfZi/view?usp=sharing" download>
                  Download CV 
                </a>
                </div>
                <div>
                <FaDownload />
                </div>
                

              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                View Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
};



/*

 <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 w-[280px] h-[280px] rounded-full border-4 border-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/30"
        >
          <img
            src={profilepic}
            alt="Profile Picture"
            className="w-[250px] h-[250px] object-cover rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-teal-300"
        >
          Hi,  <span className="text-cyan-400">Khalid</span>
        </motion.h1>

        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Passionate about crafting beautiful and functional web experiences. build something amazing together.
        </p>

        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-teal-500 rounded-full font-medium text-white hover:bg-teal-600 transition-colors"
          >
            Contact Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-gray-400 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
          >
            View Work
          </motion.button>
        </div>
      </div>

*/