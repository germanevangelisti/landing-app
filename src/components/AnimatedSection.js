import React from "react";
import { Fade } from "react-awesome-reveal";

import "./AnimatedSection.css";

const AnimatedSection = ({ children, animation }) => (
  <Fade cascade>
    <div className="section">{children}</div>
  </Fade>
);

export default AnimatedSection;
