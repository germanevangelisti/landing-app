import React from 'react';
import './CardContainer.css';

const CardContainer = ({ title, cards = [], backgroundColor }) => {
  console.log('Cards prop:', cards);
  const card = cards[0] || { descriptions: [], images: [] };
  console.log('Card being used:', card);

  return (
    <div className="card-container" style={{ backgroundColor }}>
      <div className="content-wrapper">
        <h3 className="subtitle">DESARROLLO DE ALGUNOS SERVICIOS</h3>
        <h2 className="title">{title}</h2>
        <div className="card-content">
          <div className="description-list">
            {card.descriptions.map((desc, index) => (
              <div key={index} className="description-item">
                <span className="bullet">▶</span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="images-grid">
            {card.images.map((image, index) => (
              <img key={index} src={image} alt={`Service ${index + 1}`} className="grid-image" />
            ))}
          </div>
        </div>
      </div>
      <div className="background-design"></div>
    </div>
  );
};

export default CardContainer;
