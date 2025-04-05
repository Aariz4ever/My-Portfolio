"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    words.forEach((word) => {
      gsap.fromTo(
        word,
        { color: "rgba(32, 32, 32, 0.77)" }, // Initial dark gray
        {
          color: "rgb(255, 255, 255)", // White on reveal
          scrollTrigger: {
            trigger: word,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative flex justify-center items-center min-h-screen bg-[#010001] px-4 overflow-hidden">
      {/* Smaller Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-left opacity-40"
        style={{
          backgroundImage: "url('/background/about-bg.jpg')",
          backgroundSize: "contain", // Makes the image smaller within the wrapper
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          width: "80vw", // Reduces width of the background image
          height: "80vh", // Reduces height
          left: "30%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Overlay to Darken Background */}
      <div className="absolute inset-0 bg-[#05040d] bg-opacity-80 -z-10"></div>

      {/* Text Layer (Not Blurred) */}
      <div
        ref={textRef}
        className="relative max-w-3xl text-center text-4xl leading-tight font-serif tracking-wide"
      >
        {`I am a passionate developer, blending creativity with technology to build seamless and innovative experiences. My expertise spans across frontend, backend, and cloud technologies, ensuring robust and scalable solutions. Always eager to explore new trends and push the boundaries of what's possible.`
          .split(" ")
          .map((word, index) => (
            <span key={index} className="word inline-block mx-1">
              {word}
            </span>
          ))}
      </div>
    </section>
  );
};

export default AboutSection;
