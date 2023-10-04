import React, { Fragment } from "react";

type Project = {
  title: string;
  img: string;
  desc: string;
  tech: string;
  teamSize: number;
  date: string;
  livePreview?: string;
  viewCode?: string;
};

const Project = () => {
  const projectList: Project[] = [
    {
      title: "NFT Landing Page",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      desc: "This is example desc",
      tech: "HTML, JS, Scss, Reactjs",
      livePreview: "https://htn-nft-landing.vercel.app/",
      viewCode: "https://github.com/htn0810/htn-nft-landing",
      teamSize: 1,
      date: "Jan-2023",
    },
    {
      title: "Unknowns Movies",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      desc: "This is example desc",
      tech: "HTML, JS, TailwindCss, Reactjs, Firebase",
      livePreview: "https://htn-movies.vercel.app/",
      viewCode: "https://github.com/htn0810/htn-movies",
      teamSize: 1,
      date: "Dec-2023 - Jan-2023",
    },
    {
      title: "Digital Core",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      desc: "This is example desc",
      tech: "HTML, JS, Scss, Reactjs, Mui, Springboot, MySQL",
      livePreview: "https://htn-movies.vercel.app/",
      viewCode: "https://github.com/htn0810/htn-movies",
      teamSize: 1,
      date: "Apr-2023 - OCt-2023",
    },
    {
      title: "Facemesh Drawsiness",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      desc: "This is example desc",
      tech: "HTML, Css, Python, Raspberry Pi",
      livePreview: "https://htn-movies.vercel.app/",
      viewCode: "https://github.com/htn0810/htn-movies",
      teamSize: 1,
      date: "Feb-2023 - May-2023",
    },
  ];
  return (
    <section
      id="project"
      className="w-full 2xl:mt-10 md:mt-6 mt-4 items-center px-3"
    >
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-[#42446E] md:text-[30px] text-[24px] font-bold text-center mb-4">
          Project
        </h2>
        <span className="text-[#666] md:text-lg text-base leading-8 font-normal text-center">
          Things I’ve built so far
        </span>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12">
        {projectList.map((project) => (
          <Fragment key={project.date}>
            <div
              data-aos="zoom-in-up"
              className="w-full flex flex-col rounded-xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-transform"
            >
              <div className="w-full 2xl:h-[260px] md:h-[220px] h-[200px] bg-cyan-300">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-full bg-cover"
                />
              </div>
              <div className="px-4 py-6 flex-1 bg-white">
                <h2 className="xl:text-2xl text-lg font-medium">
                  {project.title}
                </h2>
                <p className="xl:text-lg text-base font-light leading-6 text-[#666] my-2">
                  {project.desc}
                </p>
                <div className="text-[#42446E] items-center">
                  <span className="md:text-base text-sm font-normal">
                    Tech stack:
                    <span className="md:text-sm text-xs font-light">
                      {project.tech}
                    </span>{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center font-bold text-sm text-[#666] px-4 py-6 bg-white">
                <span className="flex gap-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="2xl:w-6 2xl:h-6 w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                      clipRule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                  {" " + project.teamSize}
                </span>
                <span>{project.date}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Project;
