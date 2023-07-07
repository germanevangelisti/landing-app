import React from "react";

import logo from "./../assets/logos/logo-no-background.png";

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
      <div className="title-container">
        <img src={logo} alt={"logo"} />
      </div>
    </section>
  );
};

export default LandingSection;
