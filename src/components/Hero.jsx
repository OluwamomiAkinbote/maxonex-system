import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import HeroFooter from "../components/HeroFooter";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
  const TEXTS = [
    "Web Developer",
    "Django Developer",
    "Web Designer",
    "Digital Marketer",
    "Graphic Designer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mb-6">
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-4xl mx-auto space-y-6">
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
            <TextTransition springConfig={presets.wobbly} inline>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>
        </h2>
        <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
          Web professional skilled in design, development, and marketing. I
          create engaging websites, track industry trends, and innovate digital
          projects.
        </p>
      </div>
      <div className="project-container">
        <HeroFooter />
      </div>
      <div className="project-container">
        <AnimatedText />
      </div>
    </div>
  );
};

export default Hero;
