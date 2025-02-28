import React from 'react';
import './PageLayout.css';

const PageLayout = ({ title, subtitle, icon, children, backgroundColor, slideNumber }) => {
  return (
    <div className="page-layout" style={{ backgroundColor }}>
      <div className="content-wrapper">
        <div className="title-container">
          <h3 className="subtitle">{subtitle}</h3>
          <h2 className="title">
            {title}
            {icon && <img src={icon} alt={title} className="title-icon" />}
          </h2>
        </div>
        {children}
      </div>
      {/* El carrusel debe estar aquí, fuera del content-wrapper */}
      <div className="carousel-container">
        {/* Aquí va el contenido del carrusel */}
      </div>
      <div className="background-design"></div>
      <div className="slide-number">{slideNumber}</div>
    </div>
  );
};

export default PageLayout;