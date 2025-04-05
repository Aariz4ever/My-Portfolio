"use client";

import HeroSection from "./components/HeroSection";
import AboutPage from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ClientWrapper from "./components/ClientWrapper";
import AboutSection from "./components/About";

export default function Home() {
  return (
    <ClientWrapper>
      <HeroSection />
      <AboutPage />
      <AboutSection/>
      <Projects />
      <Contact />
    </ClientWrapper>
  );
}
