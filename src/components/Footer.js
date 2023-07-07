import React from "react";

import logo from "./../assets/logos/logo-no-background.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <div className="footer-logo-wrapper">
          <img src={logo} alt={"logo"} />
        </div>

        <p className="footer-links">
          <a href="#top" className="link-1">
            Home
          </a>
          <a href="top">About</a>
          <a href="#top">Contact</a>
        </p>

        <p className="footer-company-name">UBA-1 © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

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
      </div>
    </footer>
  );
};

export default Footer;
