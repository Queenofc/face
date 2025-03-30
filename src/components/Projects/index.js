import { useEffect, useState } from "react";

import Loader from "react-loaders";

import blog from "../../assets/images/blog.png";
import pomo from "../../assets/images/mindflow.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Projects".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Chill with Pomodoro",
      description:
        "Stay focused and relaxed with **Chill with Pomodoro**, a timer that blends productivity with mood-based music for a stress-free workflow."
      image: pomo,
    },
    {
      title: "Blog Application",
      description:
        "A full-stack blogging platform using React, Node.js, and MySQL. It includes user authentication, rich text editing, and image uploads.",
      image: blog,
    },
  ];

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-box">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
