import React from "react";
import "./Service.css";
import ServiceBox from "../../components/ServiceBox/ServiceBox";

const Service = () => {
  return (
    <>
      <div id="Services" className="services">
        <h1>Technologies</h1>
        <div className="boxes">
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-html5"
            heading="HTML"
            text="+3 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-css3"
            heading="CSS"
            text="+3 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-js"
            heading="JavaScript"
            text="+2 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-react"
            heading="React"
            text="+1 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-java"
            heading="Java"
            text="+1 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-sass"
            heading="SASS"
            text="+1 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-unity"
            heading="Unity with C#"
            text="+1 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-solid fa-database"
            heading="SQL"
            text="+2 years experience"
          />
          <ServiceBox
            animation="fade-up"
            icon="fa-brands fa-node"
            heading="Node.JS"
            text="+1 years experience"
          />
        </div>
      </div>
    </>
  );
};

export default Service;
