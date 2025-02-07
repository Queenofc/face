/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

import {
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import htmlLogo from "../../assets/images/html.svg";
import mysqlLogo from "../../assets/images/mysql.svg";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => {
  const aboutArray = "TechStack".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="face4">
                <img src={mysqlLogo}/>
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <div className="face6">
                <img src={htmlLogo} />
              </div>
            </div>
          </div>
          <p>
            I’m a passionate web developer with a knack for building things that
            live on the web. My toolkit includes{" "}
            <span className="tech">HTML</span>,
            <span className="tech"> CSS</span>,
            <span className="tech"> JavaScript</span>,
            <span className="tech"> React</span>, and{" "}
            <span className="tech">Python</span> for crafting dynamic and
            responsive interfaces, paired with{" "}
            <span className="tech"> Node.js</span>,
            <span className="tech"> Express</span>, and{" "}
            <span className="tech">MySql</span> to power robust backends. I’ve
            also got hands-on experience with{" "}
            <span className="tech">Postman</span> for API testing and use{" "}
            <span className="tech">Git / Github</span> to keep my projects
            organized and collaborative.
          </p>
          <p>
            I’m passionate about building scalable, efficient, and user-friendly
            web apps that solve real-world problems. From crafting sleek
            frontends to optimizing backend performance, I love tackling
            challenges and turning ideas into reality. Let’s build something
            awesome! 🚀
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
