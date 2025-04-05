"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "LangChain", logo: "langchain.svg" },
  { name: "React.js", logo: "react.svg" },
  { name: "Next.js", logo: "nextjs.jpg" },
  { name: "Flutter", logo: "flutter.svg" },
  { name: "Tailwind CSS", logo: "tailwind.svg" },
  { name: "Node.js", logo: "nodejs.svg" },
  { name: "Spring", logo: "spring.svg" },
  { name: "FastAPI", logo: "fastapi.svg" },
  { name: "MongoDB", logo: "mongo.svg" },
  { name: "PostgreSQL", logo: "postgresql.svg" },
  { name: "Firebase", logo: "firebase.svg" },
  { name: "Redis", logo: "redis.svg" },
  { name: "AWS", logo: "aws.svg" },
  { name: "Docker", logo: "docker.svg" },
  { name: "Kubernetes", logo: "kubernetes.svg" },
  { name: "Git", logo: "git.svg" },
  { name: "GitHub", logo: "github.webp" },
  { name: "Jenkins", logo: "jenkins.svg" },
  { name: "Tensorflow", logo: "tensorflow.svg" },
  { name: "HuggingFace", logo: "huggingface.svg" },
  { name: "Seaborn", logo: "seaborn.svg" },
  { name: "Pandas", logo: "pandas.svg" },
  { name: "Tableau", logo: "tableau.svg" },
  { name: "PyTorch", logo: "pytorch.svg" },
  { name: "Scikit-learn", logo: "sklearn.svg" },
];

// Duplicate skills for infinite scrolling
const repeatedSkills = [...skills, ...skills];

// Floating icons for background animation
const floatingIcons = [
  { src: "/proj/code.svg", size: 120, x: "10%", y: "20%" },
  { src: "/proj/code.svg", size: 80, x: "80%", y: "30%" },
  { src: "/proj/code.svg", size: 100, x: "50%", y: "70%" },
  { src: "/proj/code.svg", size: 140, x: "20%", y: "80%" },
];

export default function AboutPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(100); // Default speed

  useEffect(() => {
    const updateSpeed = () => {
      setScrollSpeed(window.innerWidth < 768 ? 50 : 100); // Faster on mobile
    };

    updateSpeed(); // Set initial speed
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-start justify-center p-8 space-y-16 relative overflow-hidden"
      style={{ backgroundColor: "#010001" }}
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute opacity-30 grayscale"
          style={{ left: icon.x, top: icon.y }}
        >
          <Image src={icon.src} alt="Background Icon" width={icon.size} height={icon.size} />
        </motion.div>
      ))}

      {/* Left-Aligned Title */}
      <motion.h1
        className="text-6xl font-bold text-gray-400 text-left relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Tools I Use for My Work:{" "}
        <AnimatePresence mode="wait">
          {hoveredSkill ? (
            <motion.span
              key={hoveredSkill}
              className="text-gray-200 font-semibold"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              {hoveredSkill}
            </motion.span>
          ) : (
            <motion.span
              key="default"
              className="text-[#2f2f2f] font-thin"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              Hover to See
            </motion.span>
          )}
        </AnimatePresence>
      </motion.h1>

      {/* Infinite Scrolling Logos */}
      <div className="w-full overflow-hidden z-10">
        <motion.div
          className="flex items-center space-x-12 min-w-[200%] h-24"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: scrollSpeed,
            ease: "linear",
          }}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 min-w-[4rem]"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <Image
                src={`/logos/${skill.logo}`}
                alt={skill.name}
                width={64}
                height={64}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
