import React from "react";

import AnimatedCounter from "./AnimatedCounter";

import "./CounterSection.css";

const CounterSection = ({ counters }) => {
  return (
    <div className="counters-container">
      {counters.map((item, index) => (
        <AnimatedCounter
          key={index}
          name={item.name}
          counterTo={item.counterTo}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default CounterSection;
