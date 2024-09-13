import React from 'react';

import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={title} className="service-icon" />
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;