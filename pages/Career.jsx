import React from "react";
import { FaDownload, FaUserAstronaut } from "react-icons/fa";
import Myphoto from '../public/assets/AnimeKalai.jpeg'


const Career = () => {
  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-purple-900/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Profile Image with Neon Border */}
        <div className="relative group mx-auto md:mx-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative md:ml-28  h-72  md:w-72 md:h-96 bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          
            <img 
              src={Myphoto} 
              alt="Kalai Selvan" 
              className=" h-full object-cover md:ml-4 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Floating Icon */}
          <div className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-xl border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.4)] text-cyan-400">
            <FaUserAstronaut size={30} />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="text-left space-y-6">
          <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-sm uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            A Bit About Me
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Kalai Selvan</span>, <br /> 
            a Digital Craftsman.
          </h2>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-medium">
            <p>
              I am a passionate <span className="text-white">Full-Stack Developer</span> specializing in the <span className="text-cyan-300">MERN stack</span>. 
              I love building scalable web applications from scratch, focusing on clean code and great user experiences.
            </p>
            <p>
              With expertise in tools like <span className="text-white">React, Node.js, and MongoDB</span>, I enjoy turning complex 
              problems into simple, beautiful digital solutions. I am a constant learner, always exploring new 
              technologies like <span className="text-white">Zustand and Socket.io</span>.
            </p>
            <p className="italic text-gray-500 text-base border-l-2 border-purple-500 pl-4">
              "When I'm not coding, you can find me exploring new UI trends or contributing to Open Source projects on GitHub."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a href="https://wa.me/919344147003" target="_blank" className="flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300">
              Let's Connect
             </a>
            <a 
              href="/KalaiSelvan-Resume.pdf" 
              download 
              className="flex items-center gap-3 border border-gray-700 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaDownload /> Download 
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Career;