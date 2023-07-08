import React from "react";

import AnimatedCounter from "./AnimatedCounter";

import "./CounterSection.css";

const CounterSection = ({ counters }) => {
  return (
    <section id="counter-section" className="counters-container">
      {counters.map((item, index) => (
        <AnimatedCounter
          key={index}
          name={item.name}
          counterTo={item.counterTo}
          icon={item.icon}
        />
      ))}
    </section>
  );
};

export default CounterSection;
