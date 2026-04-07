import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../layout/Navbar';
import Header from "../pages/Header";
import MyProjects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Career from "../pages/Career";

function App() {
  return (
    <>
      {/* HashLink work aaganum na BrowserRouter kulla thaan irukkanum */}
      <BrowserRouter>
        <Navbar />
        
       
        <div className="pt-0"> 
          
          <div id="home">
            <Header />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="projects">
            <MyProjects />
          </div>

          <div id="career">
            <Career />
          </div>

          <div id="contact">
            <Contact />
          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;