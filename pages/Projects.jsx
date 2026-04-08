import React from "react";
import { FaRocket, FaFire, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const MyProjects = () => {
const projects = [
  {
    id: 1,
    title: "Studio-SyncPro",
    description: "A high-performance SaaS platform designed for studios to manage their workflow and teams efficiently.",
    features: ["Real-time Chat with Socket.io", "Role-Based Access Control (RBAC)", "Secure Auth with JWT", "File Storage via Cloudinary"],
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Socket.io", "Zustand"],
    link: "https://studio-sync-pro.vercel.app",
    github: "https://github.com/kalaiselvan-mern/StudioSyncPro",
    icon: <FaRocket className="text-cyan-400" />,
    glow: "border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  },
  {
    id: 2,
    title: "Kalai-Creative-Studio",
    description: "A premium E-commerce solution for digital creators to showcase and sell their artistic works.",
    features: ["Seamless Payment Gateway", "Dynamic Product Catalog", "Admin Dashboard", "Order Tracking System"],
    tech: ["MERN Stack", "Redux", "Express", "Stripe API", "Mongoose"],
    link: "https://kalai-creative-studio.vercel.app",
    github: "https://github.com/kalaiselvan-mern/Creative-Studio",
    icon: <FaFire className="text-purple-400" />,
    glow: "border-purple-500/30 hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]"
  },
];

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="z-10 w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">Creations</span>
          </h1>
          <p className="text-gray-400 text-lg">A showcase of my full-stack journey and technical expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-[#0a0a0a] border ${project.glow} p-8 rounded-3xl transition-all duration-500 group hover:-translate-y-3`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl p-4 bg-gray-900 rounded-2xl border border-white/5">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <FaGithub size={22} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.features}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-cyan-400 transition-all duration-300 transform active:scale-95"
              >
                Launch Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default MyProjects;