import React from "react";
import { Fade } from "react-awesome-reveal";
import OverlayCard from "./OverlayCard";
import CardWithImages from "./CardWithImages";
import "./CardContainer.css";

const CardContainer = ({ title, cards, backgroundColor, backgroundImage, fullHeight }) => {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: backgroundColor || "grey",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: fullHeight ? "100vh" : "unset",
      }}
    >
      {title && <h2 className="card-container-title">{title}</h2>}

      <div className="card-wrapper">
        {cards.map((card, index) => (
          <Fade delay={index * 200} triggerOnce key={index}>
            {card.descriptions && card.images ? (
              // Render CardWithImages if descriptions and images are provided
              <CardWithImages 
                descriptions={card.descriptions} 
                images={card.images} 
              />
            ) : card.overlayText ? (
              // Render OverlayCard if overlayText is provided
              <OverlayCard
                image={card.image}
                title={card.title}
                description={card.description}
                overlayText={card.overlayText}
              />
            ) : (
              // Fallback to the standard card layout otherwise
              <div className="card">
                <img width={150} height={150} src={card.image} alt={card.title} />
                <div className="card-description">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            )}
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
