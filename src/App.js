import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ProjectDetails from "./components/ProjectDetails";

// import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/project/:title" element={<ProjectDetails />} />
      </Routes>


      {/* <Footer /> */}

    </div>
  );
}

export default App;
