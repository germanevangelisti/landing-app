import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

import "./CardContainer.css";

const CardContainer = ({ cards, backgroundColor, fullHeight }) => {
  return (
    <section
      id="section2"
      className="info-section"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "grey",
        height: fullHeight ? "100vh" : "unset",
      }}
    >
      <div className="container">
        <div className="card-container">
          {cards.map((card, index) => (
            <Fade delay={index * 200} triggerOnce>
              <div className="card">
                <img
                  width={150}
                  height={150}
                  src={card.image}
                  alt={card.title}
                />
                <div className="card-description">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
