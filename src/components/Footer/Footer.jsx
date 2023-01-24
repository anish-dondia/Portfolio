import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="author">
          <p>Anish Dondia</p>
        </div>
        <div className="">
          <p className="copyright">
            {" "}
            <i className="far fa-copyright"></i> 2023 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
