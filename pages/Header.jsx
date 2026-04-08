import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowRight, FaCode } from "react-icons/fa";

const Header = () => {

const scrollToNextSection = ()=>{
 window.scrollTo({
  top:window.innerHeight,
  behavior:"smooth"
 })

}

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center">
      
      {/* Background Neon Effects (Animated Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-cyan-900/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-150 w-150  bg-purple-900/20 blur-[150px] rounded-full animate-bounce duration-[10s]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <FaCode /> Available for Internships & Projects
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
          Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Digital</span> <br /> 
          Experiences.
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium">
          I am <span className="text-white font-bold">Kalai Selvan</span>, a Full-Stack Developer specializing in building scalable MERN solutions that solve real-world problems.
        </p>

        {/* Action Buttons (Fixed Link inside Button issue) */}
        <div className="flex flex-wrap gap-6">
          <Link 
            to={`/#${'projects'}` }
            className="group relative px-8 py-4 bg-white text-black font-extrabold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            EXPLORE MY WORKS!
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
 
          <Link  
            to={`/#${"contact"}`}
            className="px-8 py-4 border-2 border-gray-800 text-white font-extrabold rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95"
          >
            CONTACT ME
          </Link>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div onClick={scrollToNextSection} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-1 h-12 bg-linear-to-r from-cyan-500 to-transparent"></div>
        <span className="text-[10px] text-cyan-500 tracking-[0.3em] uppercase font-bold">Scroll</span>
      </div>

    </div>
  );
};

export default Header;      