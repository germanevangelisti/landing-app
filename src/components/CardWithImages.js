import React from "react";
import "./CardWithImages.css"; // Make sure to create and import the corresponding CSS

const CardWithImages = ({ descriptions, images }) => {
  return (
    <div className="card-with-images">
      <div className="descriptions-grid">
        {descriptions.map((desc, index) => (
          <div key={index} className="description-item">
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <div className="images-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Description ${index + 1}`} className="grid-image" />
        ))}
      </div>
    </div>
  );
};

export default CardWithImages;
