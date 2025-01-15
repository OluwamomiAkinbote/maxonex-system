import React, { useState } from "react";

const AboutUs = () => {
  const experiences = [
    {
      title: "E-commerce Solutions",
      company: "Silvawell Limited",
      duration: "2021 - Present",
      description:
        "Led the design and development of e-commerce solutions, managing projects from concept to deployment while enhancing customer experiences.",
      roles: [
        "Designed and maintained responsive e-commerce websites.",
        "Implemented SEO best practices to improve website visibility.",
        "Developed and managed a real estate platform for property listings.",
        "Analyzed user behavior to improve UI/UX across web platforms.",
      ],
    },
    {
      title: "Custom Web Applications",
      company: "Freelance",
      duration: "2019 - 2021",
      description:
        "Delivered custom web applications for clients, integrating responsive designs with efficient back-end solutions.",
      roles: [
        "Collaborated with clients to gather requirements and define project scope.",
        "Developed scalable back-end systems using Django and REST APIs.",
        "Built dynamic front-end interfaces using React.js and Tailwind CSS.",
        "Optimized website performance to ensure faster load times.",
      ],
    },
    {
      title: "Collaborative Web Projects",
      company: "TechHub Innovations",
      duration: "2018 - 2019",
      description:
        "Collaborated on web development projects, focusing on learning and applying modern web technologies.",
      roles: [
        "Assisted in building and deploying client websites.",
        "Participated in debugging and resolving technical issues.",
        "Learned industry best practices for agile development.",
        "Created documentation for internal tools and processes.",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0d010f] text-white p-6">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
          Welcome to <span className="text-indigo-500">Maxonex System</span>, a leader in delivering dynamic, user-centric digital solutions. 
          Our team combines technical expertise with innovative thinking to bring ideas to life and empower businesses to thrive in the digital age.
        </p>
      </header>

      {/* Lottie Animation Section */}
      <section className="mb-16">
        <dotlottie-player
          src="https://lottie.host/f9ab7095-eb0c-49ec-8103-4ea685269c5a/mgHA0fUyXb.lottie"
          background="transparent"
          speed="1"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            maxHeight: "400px",
          }}
          loop
          autoplay
        ></dotlottie-player>
      </section>

      {/* Experience Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-8">Experience</h2>
        <div className="relative max-w-4xl mx-auto bg-white/5 p-6 rounded-lg shadow-lg text-left">
          {/* Carousel Controls */}
          <div className="absolute -top-4 right-4 flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded shadow-md"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded shadow-md"
            >
              Next
            </button>
          </div>

          {/* Current Experience */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex-shrink-0 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                {currentIndex + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{experiences[currentIndex].title}</h3>
                <p className="text-sm text-gray-400">
                  {experiences[currentIndex].company} | {experiences[currentIndex].duration}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{experiences[currentIndex].description}</p>
            <ul className="list-disc pl-6 text-gray-300">
              {experiences[currentIndex].roles.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-6">Let’s Work Together</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Maxonex System is here to transform your ideas into reality. Whether you need an engaging website, a tailored CRM solution, or expert digital marketing strategies, we’ve got you covered.
        </p>
        <a
          href="/contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition-all"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
