import React from 'react';
import PageLayout from './PageLayout';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSection.css';

const CardSection = ({ title, subtitle, icon, cards, backgroundColor, slideNumber }) => {
  const card = cards[0] || { descriptions: [], images: [] };

  const settings = {
    dots: false,
    infinite: true,
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
    <PageLayout
      title={title}
      subtitle={subtitle}
      icon={icon}
      backgroundColor={backgroundColor}
      slideNumber={slideNumber}
    >
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
      <div className="carousel-container">
        <Slider {...settings}>
          {card.images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Service ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </PageLayout>
  );
};

export default CardSection;