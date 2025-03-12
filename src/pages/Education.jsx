

const Education = () => {
  return (
    <section id="education" className="text-white p-8 flex justify-center mt-20">
      <div className="w-full max-w-7xl">
        <h2 className="text-6xl font-bold mb-12 text-center">
          My <span className="text-emerald-300">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* University Section */}
          <div className="border border-white/20 rounded-lg p-6 bg-white/5 shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4 text-emerald-300">University</h3>
            <p className="text-white/80 text-lg font-semibold">
              American International University-Bangladesh (AIUB)
            </p>
            <p className="text-white/70 mt-2">
              <span className="text-emerald-300 font-semibold">Department:</span> Computer Science & Engineering (CSE)
            </p>
            <p className="text-white/70">
              <span className="text-emerald-300 font-semibold">Major:</span> Software Engineering
            </p>
            <p className="text-white/70">
              <span className="text-emerald-300 font-semibold">Second Major:</span> Information System
            </p>
            <p className="text-white/70">
              <span className="text-emerald-300 font-semibold">CGPA:</span> 3.53
            </p>
            <p className="text-white/70 mt-2">
              <span className="text-emerald-300 font-semibold">Address:</span> Kuratoli - 1229, Dhaka, Bangladesh
            </p>
          </div>

          {/* College Section */}
          <div className="border border-white/20 rounded-lg p-6 bg-white/5 shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4 text-emerald-300">College</h3>
            <p className="text-white/80 text-lg font-semibold">Gazipur Ideal College</p>
            <p className="text-white/70 mt-2">
              <span className="text-emerald-300 font-semibold">Department:</span> Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
