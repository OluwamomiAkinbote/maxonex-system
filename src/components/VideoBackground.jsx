import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video from '../images/coding-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const VideoBackground = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // GSAP animation for video playback based on scroll
    gsap.to(video, {
      scrollTrigger: {
        trigger: video,
        start: 'top top',
        end: '+=500%',
        scrub: true,
      },
      onUpdate: (self) => {
        video.currentTime = self.progress * video.duration;
      },
    });

    // GSAP animation for text appearance
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="h-[200vh] bg-black">
      {/* Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        ></video>
        {/* Text Content */}
        <div
          ref={textRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Website
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Scroll down to see the magic!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
