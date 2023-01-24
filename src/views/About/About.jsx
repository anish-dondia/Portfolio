import React from "react";
import "./About.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import img9 from "../../images/about_page.png";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="About" className="about">
        <h1>About me</h1>
        <div className="about-flex" data-aos="fade-up">
          <div className="left-content">
            <img src={img9} alt="" />
          </div>
          <div className="right-content">
            <h2>I'm Anish</h2>
            <p>
              Hi, my name is Anish Dondia and I am a full-stack developer who
              has has experience in producing high quality UX/UI designs as well
              as experience in Game development. I'm always learning something
              new to keep myself stimulated while keeping up to date on new
              technologies.{" "}
            </p>
            <a
              href="http://www.linkedin.com/in/anish-dondia-409154244"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
