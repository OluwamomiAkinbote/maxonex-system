
import React from "react";
import { Link } from "react-router-dom";
import about from "../images/oluwamomi-rbg.png";
import { ProjectsDatas } from "../components/ProjectsDatas";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left section */}
      <div className="flex h-full w-full md:w-1/3  bg-[#0d010f] text-black flex-col items-center px-10 pt-24">
        <div className="bg-gray-400 rounded-md w-full md:w-[20rem] xs:h-full mb-4 mx-auto pb-20">
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
            <h1 className="text-2xl font-bold mb-2">Aabraham James</h1>
            <p className="mb-1">Product Designer & Developer</p>
            <p className="mb-4">Istanbul, Turkey</p>
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
            <button className="bg-purple-600 text-white py-2 px-4 rounded">
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-2/3 bg-[#0d010f] text-white px-10 pt-24 md:overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Transforming Your Ideas into Reality</h1>
        <p className="mb-4">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
        {/* Content */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Experience the Difference</h2>
          <p>We offer a wide range of services to meet your needs and exceed your expectations.</p>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300">
            Contact Us
          </button>
          <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300">
            Learn More
          </button>
        </div>
        <div className="preview-sections">
          <div className="home__abt">
            <h2 className="text-4xl font-extrabold">About Me</h2>
            <div className="home__abt-box">
              <div className="home__abt-image">
                <img src={about} alt="" loading="lazy" />
              </div>
              <div className="home__abt-content">
                <p>
                  Welcome to my digital space! I'm a web professional with a
                  passion for creating captivating online experiences. As an
                  expert in web design, development, and marketing, I specialize
                  in crafting visually appealing websites. I stay on top of
                  industry trends to ensure your project is cutting-edge. If you
                  want to learn more about me and my journey, dive into my story
                  on the About Me page. Let's connect and explore the exciting
                  world of digital possibilities together.
                </p>
                <Link to="/about">Read more</Link>
              </div>
            </div>
          </div>

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
