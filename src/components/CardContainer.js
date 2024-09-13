import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardContainer.css';

const CardContainer = ({ title, cards = [], backgroundColor, icon }) => {
  const card = cards[0] || { descriptions: [], images: [] };

  const settings = {
    dots: false,
    infinite: true, // Cambiado a true para efecto infinito
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="card-container" style={{ backgroundColor }}>
      <div className="content-wrapper">
        <div className="title-container">
          <h3 className="subtitle">DESARROLLO DE ALGUNOS SERVICIOS</h3>
          <h2 className="title">
            {title}
            {icon && <img src={icon} alt={title} className="title-icon" />}
          </h2>
        </div>
        <div className="card-content">
          <div className="description-list">
            {card.descriptions.map((desc, index) => (
              <div key={index} className="description-item">
                <span className="bullet">▶</span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {card.images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Service ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="background-design"></div>
      <div className="slide-number">06</div>
    </div>
  );
};

export default CardContainer;
