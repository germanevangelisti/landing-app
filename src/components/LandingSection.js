import React from "react";

import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section className="video-section">
      <video autoPlay loop muted>
        <source
          src={"https://d16dak3q90pgxc.cloudfront.net/space-world.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="title-container">
        <h1>Ultimate Boilerplate App v2</h1>
      </div>
    </section>
  );
};

export default LandingSection;
