import { useEffect } from "react";
import { SiFramer, SiFigma, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiHtml5, SiJson, SiDaisyui, SiMaterialdesign, SiGit } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 6,
    name: "Express JS",
    icon: <SiExpress size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 8,
    name: "Javascript",
    icon: <SiJavascript size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 10,
    name: "HTML5",
    icon: <SiHtml5 size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 11,
    name: "JSON",
    icon: <SiJson size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 12,
    name: "Daizy UI",
    icon: <SiDaisyui size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 13,
    name: "Material Tailwind",
    icon: <SiMaterialdesign size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 14,
    name: "GitBash",
    icon: <SiGit size={100} />,
    color: "text-emerald-200",
  },
];

export const Stack = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="max-w-[1200px] mx-auto text-center"
      id="stack"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20"> My <span className="text-emerald-300">Stack</span></h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                y: index % 2 === 0 ? -100 : 100,
              }),
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className="text-white/20 text-xl">{item.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-24 text-left text-white p-8 border border-white/20 rounded-lg">
        <h3 className="text-4xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-white/20 rounded-lg p-4">
            <h4 className="text-emerald-300 text-2xl font-medium mb-2">
              Frontend
            </h4>
            <ul className="text-white/50 space-y-1 text-lg">
              <li>React/Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className="border border-white/20 rounded-lg p-4">
            <h4 className="text-emerald-300 text-2xl font-medium mb-2">
              Backend
            </h4>
            <ul className="text-white/50 space-y-1 text-lg">
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="mt-24 text-left text-white p-8 border border-white/20 rounded-lg">
        <h3 className="text-4xl font-bold mb-6">Approach</h3>
        <p className="text-white/50 text-lg">
          I believe in writing clean, maintainable code and following best
          practices. My approach involves understanding client needs, planning
          thoroughly, and delivering high-quality solutions on time.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1">Front-end</label>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div
                className="bg-emerald-300 h-3 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Back-end</label>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div
                className="bg-emerald-300 h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">DevOps</label>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div
                className="bg-emerald-300 h-3 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
