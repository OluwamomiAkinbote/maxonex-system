import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroFooter from "../components/HeroFooter";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
  const TEXTS = [
    "Web Development",
    "Web Design",
    "Digital Marketing",
    "Graphic Design",
  ];

  return (
    <div className="mb-6 space-y-10">
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-4xl mx-auto space-y-6 text-section animate-fadeInUp">
        <h4 className="text-lg lg:text-xl text-gray-300">
          Your <span className="font-semibold text-white">Best</span>
        </h4>
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          <span
            className="text-indigo-400 drop-shadow-lg"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
            }}
          >
            <Typewriter
              words={TEXTS}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={3000}
            />
          </span>
        </h2>
        <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
          Web professional skilled in design, development, and marketing. I
          create engaging websites, track industry trends, and innovate digital
          projects.
        </p>
      </div>

      {/* Another Text Section */}

      {/* Footer Section */}
      <div className="project-container text-section animate-fadeInUp">
        <HeroFooter />
      </div>
      <div className="m-8 animate-fadeInUp">
        <AnimatedText />
      </div>
    </div>
  );
};

export default Hero;
