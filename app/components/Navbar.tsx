"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"
      }`}
      
    >
      {/* Custom Scroll Progress Bar */}
      <div className="w-full absolute top-0 left-0 h-1 bg-transparent">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(to right, #8900f2, #f20089)`,
          }}
        />
      </div>

      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.h1
          className="text-xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mohamed Aariz
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer relative group"
            >
              <Link href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="relative">
                <span className="group-hover:text-[#8900f2] transition-all duration-300">
                  {item}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
