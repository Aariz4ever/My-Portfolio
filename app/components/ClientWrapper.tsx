"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Render Page Content */}
      {children}

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-[#9333ea] opacity-30 blur-[40px] pointer-events-none mix-blend-screen"
        animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      />
    </div>
  );
}
