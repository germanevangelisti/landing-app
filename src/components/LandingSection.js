import React from "react";

import logo from "./../assets/logos/logo-no-background.png";
import logoVertical from "./../assets/logos/logo-vertical-no-background.png";

import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section id="landing-section" className="video-section">
      <video autoPlay loop muted>
        <source
          src={"https://d16dak3q90pgxc.cloudfront.net/space-world.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="logo-container">
        <img className="desktop" src={logo} alt={"logo"} />
        <img className="mobile" src={logoVertical} alt={"logoVertical"} />
      </div>
    </section>
  );
};

export default LandingSection;
