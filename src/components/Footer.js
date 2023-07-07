import React from "react";

import logo from "./../assets/logos/logo-vertical-no-background.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-logo-wrapper">
        <img src={logo} alt={"logo"} />
      </div>
      <div className="footer-icons">
        <a href="#top">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#top">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#top">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#top">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
