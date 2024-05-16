import { Link } from "react-router-dom";
import CTA from "../Components/CTA";
import { projects } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Projects = () => {
  return (
    <section className="max-container bg-black-700">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="text-lime-500 font-semibold blue-gradient_text drop-shadow">
          {" "}
          Abhishek Tiwari
        </span>{" "}
        👋
      </h1>

      <div className="py-16">
        <h3 className="subhead-text  font-bold drop-shadow">Projects</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p className="font-normal text-black drop-shadow">
            I've embarked on numerous projects throughout the years, but these
            are the ones I hold closest to my heart. Many of them are
            open-source, so if you come across something that piques your
            interest, feel free to explore the codebase and contribute your
            ideas for further enhancements. Your collaboration is highly valued!
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {projects.map((project, index) => (
              <VerticalTimelineElement
                key={project.tech_used}
                iconStyle={{ background: project.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={project.icon}
                      alt={project.tech_used}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: project.iconBg,
                  boxShadow: "none",
                  background: "#20201f",
                }}
              >
                <div className="mb-3">
                  <h3 className="text-lime-300 text-xl font-poppins font-semibold">
                    {project.title}
                  </h3>
                  <p
                    className="blue-gradient_text drop-shadow font-medium text-base "
                    style={{ margin: 0 }}
                  >
                    {`Tech Tags ${project.tech_used}`}
                  </p>
                </div>
                <video controls autoPlay={true} loop={true}>
                  <source src={project.video} type="video/mp4" />
                </video>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {project.points.map((point, index) => (
                    <li
                      key={`project-point-${index}`}
                      className="font-normal pl-1 text-sm text-lime-400 "
                    >
                      {point}
                    </li>
                  ))}
                </ul>{" "}
                <div className="flex justify-between font-semibold gap-3">
                  <Link className="btn " to={project.Link}>
                    Live Site
                  </Link>
                  <Link className="btn" to={project.Github}>
                    Code Base
                  </Link>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
