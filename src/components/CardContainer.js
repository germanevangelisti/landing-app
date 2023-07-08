import React from "react";
import { Fade } from "react-awesome-reveal";

import "./CardContainer.css";

const CardContainer = ({ cards, backgroundColor, fullHeight }) => {
  return (
    <div
      className="card-conteiner"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "grey",
        height: fullHeight ? "100vh" : "unset", // footer bug
      }}
    >
      <div className="card-wrapper">
        {cards.map((card, index) => (
          <Fade delay={index * 200} triggerOnce>
            <div className={card.overlayText ? "card overlay" : "card"}>
              <img width={150} height={150} src={card.image} alt={card.title} />
              <div className="card-description">
                <h3>{card.title}</h3>
                <div className="originalText">
                  <p>{card.description}</p>
                </div>
                {card.overlayText ? (
                  <div className="overlayText">
                    <p>{card.overlayText}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
