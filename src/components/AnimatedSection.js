import React from "react";
import { Fade } from "react-awesome-reveal";

import "./AnimatedSection.css";

const AnimatedSection = ({ children, animation, sectionId }) => (
  <Fade cascade>
    <section id={sectionId} className="section">
      {children}
    </section>
  </Fade>
);

export default AnimatedSection;
