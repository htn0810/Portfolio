import React, { FC, Fragment } from "react";

type WorkExp = {
  title: string;
  company?: string;
  school?: string;
  org?: string;
  location?: string;
  gpa?: number;
  time: string;
  type: string;
};

const WorkEdu = () => {
  const WorkExpList: WorkExp[] = [
    {
      title: "Embedded System",
      company: "PIF LAB",
      location: "Ho Chi Minh",
      time: "Jun-2022 Sep-2022",
      type: "work",
    },
    {
      title: "Front-end Developer",
      company: "Bosch Global Software",
      location: "Ho Chi Minh",
      time: "Apr-2023 Oct-2023",
      type: "work",
    },
    {
      title: "Automation & Control",
      school: "HCM University of Technology",
      gpa: 8.34,
      time: "Sep-2019 Nov-2023",
      type: "edu",
    },
    {
      title: "TOEIC",
      org: "IIG VietNam",
      gpa: 790,
      time: "Sep-2022",
      type: "cert",
    },
  ];
  return (
    <section
      id="about"
      className="w-full 2xl:mt-36 md:mt-20 grid grid-cols-6 mt-14 items-center px-3"
    >
      <div className="md:col-start-2 md:col-end-6 col-start-1 col-end-7">
        <div>
          <h2
            data-aos="zoom-in-down"
            className="md:text-[30px] text-[24px] text-center font-bold text-[#42446E] md:mb-10 mb-4"
          >
            About me
          </h2>
          <p className="text-[#666] md:text-lg text-base leading-8 font-normal text-center">
            I'm a software developer with more than 6 months experience. I have
            equipped my self with enough knowledge to work. In addition, i'm a
            good listener, easily adapt new environments. My short-term goal is
            learning, get more and more knowledge to become a good developer. In
            long-term, i wantbecome an expert in this industry
          </p>
        </div>
        {/* Work Experience */}
        <div className="md:my-10 my-3">
          <h2
            data-aos="zoom-in-down"
            className="md:text-[30px] text-[24px] text-center font-bold text-[#42446E] md:mb-10 mb-4"
          >
            Work Experience
          </h2>
          {WorkExpList.map(
            (workExp) =>
              workExp.type === "work" && (
                <Fragment key={workExp.time}>
                  <WorkEduComponent {...workExp} />
                </Fragment>
              )
          )}
        </div>
        {/* Education */}
        <div className="md:my-10 my-3">
          <div className="mt-10">
            <h2
              data-aos="zoom-in-down"
              className="md:text-[30px] text-[24px] text-center font-bold text-[#42446E] md:mb-10 mb-4"
            >
              Education
            </h2>
            {WorkExpList.map(
              (workExp) =>
                workExp.type === "edu" && (
                  <Fragment key={workExp.time}>
                    <WorkEduComponent {...workExp} />
                  </Fragment>
                )
            )}
          </div>
          <div className="md:my-10 my-3">
            <div className="mt-10">
              <h2
                data-aos="zoom-in-down"
                className="md:text-[30px] text-[24px] text-center font-bold text-[#42446E] md:mb-10 mb-4"
              >
                Certificate
              </h2>
              {WorkExpList.map(
                (workExp) =>
                  workExp.type === "cert" && (
                    <Fragment key={workExp.time}>
                      <WorkEduComponent {...workExp} />
                    </Fragment>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkEduComponent = ({ ...props }: WorkExp) => {
  return (
    <div
      data-aos="flip-up"
      key={props.time}
      className="mt-4 p-4 bg-gray-50 rounded-sm border-b-2 border-solid border-gray-200"
    >
      <div className="flex justify-between">
        <span className="text-[#666] md:text-xl text-sm">{props.title}</span>
        <span className="text-[#018C0F] md:text-xs text-[10px]  px-4 py-2 rounded-2xl bg-[#D7FFE0]">
          {props.type === "cert" ? "Cert" : "Full time"}
        </span>
      </div>
      <div className="grid grid-cols-6 mt-2 text-[#A7A7A7] md:text-xs text-[10px]">
        <div className="flex items-center gap-2 col-span-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-6 md:h-6 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          <span>
            {props.type === "work"
              ? props.company
              : props.type === "edu"
              ? props.school
              : props.org}
          </span>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          {props.type === "edu" || props.type == "cert" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 md:h-6 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 md:h-6 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          )}
          <span>{props.type === "work" ? props.location : props.gpa}</span>
        </div>
        <div className="flex items-center justify-end gap-2 col-span-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-6 md:h-6 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkEdu;
