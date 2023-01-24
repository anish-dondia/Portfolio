import React from "react";
import "./Contact.css";
import ContactBox from "../../components/ContactBox/ContactBox";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="contact">
        <h1>Contact Me</h1>
        <div className="boxes">
          <ContactBox
            animation="fade-right"
            class="fas fa-envelope"
            name="Email"
            link="mailto:anishdondia02@gmail.com"
          />
          <ContactBox
            animation="fade-up"
            class="fab fa-github"
            name="Github"
            link="https://github.com/anish-dondia"
          />
          <ContactBox
            animation="fade-left"
            class="fab fa-linkedin"
            name="Linkedin"
            link="http://www.linkedin.com/in/anish-dondia-409154244"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
