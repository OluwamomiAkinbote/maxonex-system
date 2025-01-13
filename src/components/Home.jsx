
import React from "react";
import { Link } from "react-router-dom";
import about from "../images/oluwamomi-rbg.png";
import { ProjectsDatas } from "../components/ProjectsDatas";
import  Hero  from "../components/Hero";
import Contact from "../components/Contact";
import FeaturesSection from "../components/FeatureSection";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen font-poppins ">
      {/* Left section */}
      <div className="flex h-full w-full md:w-1/3  bg-[#0d010f] text-black flex-col items-center px-12 pt-24 ">
        <div className="bg-gray-400 rounded-md w-full md:w-[20rem] xs:h-full mb-4 pb-20 ">
          {/* Image */}
          <div className="flex justify-center items-center mt-6 bg-[#0d010f] mx-5 xs:mx-12 rounded-full reflective-bg overflow-hidden">
            <img
              src={about}
              alt="Aabraham James"
              className="rounded-full w-18 h-18 object-cover -mb-2 overflow-hidden"
            />
          </div>

          {/* Content */}
          <div className="text-center mt-6 mb-10 ">
            <h1 className="text-2xl font-bold mb-2">Oluwamomi Salvation</h1>
            <p className="mb-1">Web Designer | Web Developer</p>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mb-4">
              <Link to="/dribbble" className="text-purple-900">
                <i className="fab fa-dribbble"></i>
              </Link>
              <Link to="/twitter" className="text-purple-900">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/instagram" className="text-purple-900">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/envelope" className="text-purple-900">
                <i className="fas fa-envelope"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-2/3 bg-[#0d010f] text-white px-10 pt-24 md:overflow-y-auto">

            <div className="">
              <Hero />
            </div>
            <div className="">
              <FeaturesSection />
            </div>
        
  

        <div className="preview-sections">


          <div className="projects">
            <h2 className="heading">projects</h2>

            <div className="project-container">
              <ProjectsDatas />
            </div>
          </div>

          <div className="contact">
            <h2 className="contact-heading">contact me</h2>
            <Contact />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
