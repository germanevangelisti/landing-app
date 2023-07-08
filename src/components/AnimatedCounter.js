import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AnimatedCounter.css";

const AnimatedCounter = ({ name, counterTo, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 500;
    const increment = counterTo / duration;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= counterTo) {
          clearInterval(interval);
          return counterTo;
        }
        return newCount;
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-wrapper">
      <div className="name">{name}</div>
      <div className="counter">{Math.round(count).toLocaleString()}</div>
      <FontAwesomeIcon icon={icon} size="2xl"/>
    </div>
  );
};

export default AnimatedCounter;
