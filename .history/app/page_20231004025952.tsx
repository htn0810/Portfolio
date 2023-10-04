"use client";
import About from "./sections/About";
import Header from "./sections/Header";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "./sections/TechStack";
import WorkEdu from "./sections/WorkEdu";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
export default function Home() {
  const [onTop, setOntop] = useState<number>();
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);

  useEffect(() => {
    // updateScrollY();
    console.log(onTop);
  });

  window.addEventListener("scroll", () => {
    updateScrollY();
  });

  const updateScrollY = () => {
    setOntop(window.scrollY);
  };
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      <Header />
      <About />
      <TechStack />
      <WorkEdu />
      <Project />
      <Contact />
      <div className="fixed bottom-10 right-10 w-[40px] h-[40px] rounded-full bg-cyan-700 cursor-pointer flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
        </svg>
      </div>
    </main>
  );
}
