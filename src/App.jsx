import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from '../layout/Navbar'
import Header from "../pages/Header";
import MyProjects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Career from "../pages/Career";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />} >
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<MyProjects/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/career" element={<Career/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
