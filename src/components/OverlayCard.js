import React from "react";

const OverlayCard = ({ image, title, description, overlayText }) => {
  return (
    <div className="card overlay">
      <img width={150} height={150} src={image} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <div className="originalText">
          <p>{description}</p>
        </div>
        <div className="overlayText">
          <p>{overlayText}</p>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
