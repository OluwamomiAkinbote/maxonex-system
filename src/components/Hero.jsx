import { React, useEffect, useState } from "react";
import hero from "../images/hero-trans.png";
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  const TEXTS = [
    " Web Developer",
    " Web Designer",
    " Web Enthusiast",
    " Digital Marketer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="hero__box">
      <div className="hero__content">
        <h4>
          Hello, I'm <span>Oluwamomi</span>
        </h4>
        <h2>
          A
          <span>
            <TextTransition springConfig={presets.wobbly} inline>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>
        </h2>
        <p>
          {" "}
          Web professional skilled in design, development, and marketing. I
          create engaging websites, track industry trends, and innovate digital
          projects.
        </p>
      </div>
      <div className="image">
        <img src={hero} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
