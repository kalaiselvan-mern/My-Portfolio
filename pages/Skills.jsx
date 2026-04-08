import React from "react";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  
  const skillCategories = [
    {
      title: "Front-End",
      icon: <FaCode size={26} />,
      boxStyle: "border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
      titleGlow: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]",
      badgeStyle: "hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:text-cyan-300",
      skills: [
        "HTML5",  "Tailwind CSS",  "JavaScript", 
        "React.js", "React Hook Form + Zod", "Zustand (State)", 
        "TanStack Query", "Axios", "React-Icons", "Socket.io"
      ],
    },
    {
      title: "Back-End",
      icon: <FaServer size={26} />,
      boxStyle: "border-green-500/30 hover:border-green-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]",
      titleGlow: "text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]",
      badgeStyle: "hover:border-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:text-green-300",
      skills: ["Node.js", "Express.js", "CORS APIs", "Mongoose"],
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase size={26} />,
      boxStyle: "border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]",
      titleGlow: "text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]",
      badgeStyle: "hover:border-pink-400 hover:shadow-[0_0_15px_rgba(244,114,182,0.5)] hover:text-pink-300",
      skills: ["MongoDB", "Cloudinary"],
    },
    {
      title: "Tools & Others",
      icon: <FaTools size={26} />,
      boxStyle: "border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]",
      titleGlow: "text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]",
      badgeStyle: "hover:border-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] hover:text-purple-300",
      skills: [
        "Git & GitHub", "JWT (Auth)", "Postman", "Cloudflare", 
        "Vercel", "Render"    ,  "Ui & Ux Desgin ", "Linux" ,
      ], 
    },
  ];

  return (
    
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-wider z-10 text-center">
        My <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">Tech Arsenal</span> ⚡
      </h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl z-10">
        
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`group bg-[#0a0a0a] border ${category.boxStyle} p-8 rounded-2xl transition-all duration-500`}
          >
            {/* Header (Icon + Title) */}
            <div className={`flex items-center gap-4 mb-8 ${category.titleGlow}`}>
              <div className="p-3 bg-gray-900 rounded-xl border border-current shadow-[0_0_10px_currentColor]">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-wide">{category.title}</h3>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 text-sm font-semibold text-gray-400 bg-gray-900/50 border border-gray-800 rounded-full transition-all duration-300 cursor-default ${category.badgeStyle}`}
                >
                  {skill}
                </span>
              ))}
            </div>
            
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Skills;