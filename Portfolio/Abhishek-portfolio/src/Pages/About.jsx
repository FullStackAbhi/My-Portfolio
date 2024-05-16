import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";

import CTA from "../Components/CTA";
import { achievements, skills, socialLinks } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { mypic } from "../assets/images";

const About = () => {
  return (
    <section className="max-container">
      <div className="md:flex justify-between sm:justify-start">
        {" "}
        <div className="">
          <h1 className="head-text">
            Hello, I'm <br />
            <span className="blue-gradient_text font-semibold drop-shadow">
              Abhishek Tiwari
            </span>{" "}
            👋
            <br />
            <span className="blue-gradient_text font-semibold drop-shadow">
              {" "}
              Full Stack Web Developer
            </span>{" "}
          </h1>
        </div>
        <div>
          <img className="h-[13rem] rounded-full" src={mypic} alt="" />
        </div>
      </div>

      <div className=" mt-5 text-neutral-950 flex flex-col gap-3 text-black-800">
        <p>
          Passionate and detail-oriented MERN stack developer eager to embark on
          a career in web development. Possessing a strong foundation in
          front-end and back-end technologies, I am proficient in building
          responsive and interactive web applications. With a commitment to
          continuous learning and staying updated with industry trends, I strive
          to contribute innovative solutions to projects and deliver exceptional
          user experiences.{" "}
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Social Link </h3>

        <div className="mt-16 flex flex-wrap gap-12 ">
          {socialLinks.map((link) => (
            <div className="block-container w-20 h-20 bg-white" key={link.name}>
              <div className="btn-back rounded-xl bg-black-500" />
              <Link to={link.link}>
                <div className="btn-front rounded-xl flex justify-center items-center bg-slate-50">
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link
        className="btn"
        to={
          "https://drive.google.com/file/d/1Uox7o3MNlkdj1_qU7QBwyzQ1kraQ56Gn/view?usp=sharing"
        }
      >
        Resume
      </Link>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12 ">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20 bg-white"
              key={skill.name}
            >
              <div className="btn-back rounded-xl bg-lime-500" />
              <div className="btn-front rounded-xl flex justify-center items-center bg-slate-50">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="head-text">
        These are few of my{" "}
        <span className="blue-gradient_text font-semibold blue">
          {" "}
          Achievements
        </span>{" "}
      </h1>
      <div className="mt-12 flex">
        <VerticalTimeline>
          {achievements.map((achivement, index) => (
            <VerticalTimelineElement
              key={achivement.tech_used}
              iconStyle={{ background: achivement.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={achivement.icon}
                    alt={achivement.tech_used}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: achivement.iconBg,
                boxShadow: "none",
                background: "#20201f",
              }}
            >
              <div>
                <h3 className="text-lime-300 text-xl font-poppins font-semibold">
                  {achivement.title}
                </h3>
                <p
                  className="blue-gradient_text drop-shadow font-medium text-base mb-4 "
                  style={{ marginTop: 0, marginBottom: "1rem" }}
                >
                  {`Tech-Used ${achivement.tech_used}`}
                </p>
              </div>

              <img src={achivement.img} alt="" />
              <div className="flex justify-between mt-3">
                <ul>
                  {achivement.points.map((point, ind) => (
                    <li key={ind} className="mr-1 text-white font-normal">
                      {`${ind + 1} . ${point}`}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" mt-3 w-full flex">
                <Link className="btn" to={achivement.Link}>
                  Live link
                </Link>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
