import React from 'react';
import ServiceCard from './ServiceCard';
import image1 from "./../assets/herreria.png";
import image2 from "./../assets/mecanizado.png";
import image3 from "./../assets/trabajo_en_serie.png";
import image4 from "./../assets/servicios_industrial.png";

import "./ServiceCard.css";

const ServicesSection = () => {
  const services = [
    {
      icon: image1,
      title: 'HERRERIA',
      description: 'Fabricación de facilidades y estructuras en general. Racks, cestones y capachos. Asesoramiento técnico en el diseño y desarrollo. Zinguería y tuberías en general.'
    },
    {
      icon: image2,
      title: 'MECANIZADO',
      description: 'Matricería para estampado y corte de chapa. Piezas a pedido con centro de mecanizado C.N.C. Dispositivos mecánicos y neumáticos con P.L.C. Calibres patrón para piezas estampadas y dispositivos.'
    },
    {
      icon: image3,
      title: 'TRABAJOS EN SERIE',
      description: 'Balancinado y soldaduras de conjuntos. Piezas fabricadas con centro mecanizados C.N.C.'
    },
    {
      icon: image4,
      title: 'SERVICIOS INDUSTRIALES',
      description: 'Trabajos por pedido. Mantenimiento mecánico. Instalaciones mecánicas. Diseños especiales.'
    }
  ];

  return (
    <section className="services-section">
      <div className="background-design"></div>
      <h2>SERVICIOS</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;