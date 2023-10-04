"use client";
import About from "./sections/About";
import Header from "./sections/Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "./sections/TechStack";
import WorkEdu from "./sections/WorkEdu";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
export default function Home() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      <Header />
      <About />
      <TechStack />
      <WorkEdu />
      <Project />
      <Contact />
      <div className="fixed bottom-10 right-10 w-[40px] h-[40px] rounded-full bg-cyan-700"></div>
    </main>
  );
}
