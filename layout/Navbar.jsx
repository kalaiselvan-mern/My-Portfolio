import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function Navbar() {
  // Mobile View & Close 
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "skills", name: "SKILLS" },
    { id: 2, link: "projects", name: "PROJECTS" },
    { id: 3, link: "career", name: "CAREER" },
    { id: 4, link: "contact", name: "CONTACT ME" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-6 text-white z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      
      {/* LOGO */}
      <div className="text-3xl font-extrabold italic tracking-wider group">
        <Link smooth to="/#" className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          KALAI
        </Link>
      </div>

      {/* DESKTOP MENU  */}
      <ul className="hidden md:flex gap-8 font-semibold text-xs tracking-[0.2em]">
        {links.map(({ id, link, name }) => (
          <li key={id} className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            {/* Added smooth and # here */}
            <Link smooth to={`/#${link}`}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* RESUME BUTTON (Desktop) */}
      <div className="hidden md:flex">
        <a
          href="/KalaiSelvan-Resume.pdf"
          target="_blank"
          download
          className="bg-white text-black px-5 py-2 rounded-lg font-bold text-xs tracking-widest hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          RESUME
        </a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-60 text-cyan-400 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Full Screen Overlay */}
      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-full"
        } fixed top-0 left-0 w-full h-screen bg-[#050505] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out z-50 md:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-8">
          {links.map(({ id, link, name }) => (
            <li key={id} className="text-3xl font-bold tracking-widest">
              {/* Added smooth and # here for mobile */}
              <Link
                smooth
                onClick={() => setNav(false)} 
                to={`/#${link}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
          
          {/* Resume Button in Mobile */}
          <li className="mt-4">
            <a
              href="/KalaiSelvan-Resume.pdf"
              download="KalaiSelvan-Resume.pdf"
              onClick={() => setNav(false)}
              className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-bold text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <FaDownload /> RESUME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}