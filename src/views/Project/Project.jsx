import React from "react";
import "./Project.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import ProjectBox from "../../components/ProjectBox/ProjectBox";
import img1 from "../../images/fypImage.png";
import img2 from "../../images/jukeboxImage.png";
import img3 from "../../images/portfolio.png";
import img4 from "../../images/slimeTerror.png";
import img5 from "../../images/guessMyNumber.png";
import img6 from "../../images/myJournalDesign.png";
import img7 from "../../images/myJournal.png";

const Project = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div id="Project" className="project">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="MyJournal Group Project"
              img={img7}
              link="https://brunelcs.github.io/cs2001-2020_21-group18/"
            />
            <ProjectBox
              title="Design on MyJournal via AdobeXD"
              img={img6}
              link="https://xd.adobe.com/view/b22105d5-c21d-444c-741d-9a8be724ccad-c410/?fullscreen"
            />
            <ProjectBox
              title="Design on Jukebox via AdobeXD"
              img={img2}
              link="https://xd.adobe.com/view/94b166ad-51b1-4e50-8525-03754095ae17-c1e2/"
            />
            <ProjectBox
              title="Portfolio Website"
              img={img3}
              link="https://github.com/anish-dondia"
            />
            <ProjectBox
              title="Slime Terror Game"
              img={img4}
              link="https://github.com/anish-dondia/SlimeTerror"
            />
            <ProjectBox
              title="3D Game on Pollution"
              img={img1}
              link="https://github.com/anish-dondia/FYP"
            />
            <ProjectBox
              title="Guess My Number"
              img={img5}
              link="https://github.com/anish-dondia/GuessMyNumber"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
