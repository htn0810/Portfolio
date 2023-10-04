"use client";
import Image from "next/image";
import logo from "../../public/images/logo.jpg";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [showSidebar, setShowSideBar] = useState(false);
  return (
    <section className="w-full bg-transparent">
      <header className="grid md:grid-cols-5 grid-cols-2 items-center md:px-0 px-10">
        <Image
          src={logo}
          className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] col-span-1"
          alt="Logo"
        />
        <ul className="col-span-4 justify-center text-[#666] font-medium 2xl:text-xl text-base md:flex hidden">
          <li className='relative lg:ml-10 lg:mr-10 ml-8 mr-8 cursor-pointer after:w-0 after:content-[""] after:absolute after:bottom-[-10px] after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-[linear-gradient(90deg,_#13B0F5_-2.06%,_#E70FAA_100%)] hover:after:transition-all ease-linear duration-150'>
            <a href="#home">Home</a>
          </li>
          <li className='relative lg:ml-10 lg:mr-10 ml-8 mr-8 cursor-pointer after:w-0 after:content-[""] after:absolute after:bottom-[-10px] after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-[linear-gradient(90deg,_#13B0F5_-2.06%,_#E70FAA_100%)] hover:after:transition-all ease-linear duration-150'>
            <a href="#about">About</a>
          </li>
          <li className='relative lg:ml-10 lg:mr-10 ml-8 mr-8 cursor-pointer after:w-0 after:content-[""] after:absolute after:bottom-[-10px] after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-[linear-gradient(90deg,_#13B0F5_-2.06%,_#E70FAA_100%)] hover:after:transition-all ease-linear duration-150'>
            <a href="#tech">Tech Stack</a>
          </li>
          <li className='relative lg:ml-10 lg:mr-10 ml-8 mr-8 cursor-pointer after:w-0 after:content-[""] after:absolute after:bottom-[-10px] after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-[linear-gradient(90deg,_#13B0F5_-2.06%,_#E70FAA_100%)] hover:after:transition-all ease-linear duration-150'>
            <a href="#project">Projects</a>
          </li>
          <li className='relative lg:ml-10 lg:mr-10 ml-8 mr-8 cursor-pointer after:w-0 after:content-[""] after:absolute after:bottom-[-10px] after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-[linear-gradient(90deg,_#13B0F5_-2.06%,_#E70FAA_100%)] hover:after:transition-all ease-linear duration-150'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Menu icon */}
        <div
          className="md:hidden col-span-1 flex justify-end"
          onClick={() => setShowSideBar(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
      </header>
      {/* Collapse bar */}
      <Sidebar show={showSidebar} setShow={setShowSideBar} />
    </section>
  );
}
