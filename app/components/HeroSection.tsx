"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [typedIdea, setTypedIdea] = useState("");
  const [ideaIndex, setIdeaIndex] = useState(0);

  const fullText = "Let's Build Something Incredible!";
  const ideaTexts = [
    "Turning visions into reality through code & creativity.",
    "Your ideas, my expertise – let's create impact together.",
    "Code that speaks, designs that inspire, products that scale.",
    "Innovating, developing, and delivering excellence.",
    "Let’s craft digital experiences that stand out!",
  ];

  // Typing effect for title
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // Typing effect for rotating slogans
  useEffect(() => {
    let textIndex = ideaIndex;
    let timeoutId: NodeJS.Timeout;

    const typeNextSentence = () => {
      if (textIndex >= ideaTexts.length) textIndex = 0;

      let j = 0;
      setTypedIdea("");

      const typingInterval = setInterval(() => {
        setTypedIdea(ideaTexts[textIndex].slice(0, j + 1));
        j++;
        if (j === ideaTexts[textIndex].length) {
          clearInterval(typingInterval);
          timeoutId = setTimeout(() => {
            setIdeaIndex((prev) => (prev + 1) % ideaTexts.length);
          }, 2000);
        }
      }, 70);
    };

    timeoutId = setTimeout(typeNextSentence, 2000);

    return () => clearTimeout(timeoutId);
  }, [ideaIndex]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-lg bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {typedText}
        </motion.h1>

        <motion.p
          key={ideaIndex}
          className="mt-6 text-2xl md:text-4xl font-semibold text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {typedIdea}
        </motion.p>
      </div>
    </div>
  );
}
