import React from 'react';
import "./ServicesSection.css";
import herreria from "./../assets/herreria.png";
import mecanizado from "./../assets/mecanizado.png";
import trabajoEnSerie from "./../assets/trabajo_en_serie.png";
import serviciosIndustriales from "./../assets/servicios_industrial.png";

const ServicesSection = () => {
  const services = [
    {
      icon: herreria,
      title: "HERRERIA",
      description: "Fabricación de facilidades y estruc-turas en general. Racks, cestones y capachos. Asesoramiento técnico en el diseño y desarrollo. Zinguería y tuberías en general."
    },
    {
      icon: mecanizado,
      title: "MECANIZADO",
      description: "Matricería para estampado y corte de chapa. Piezas a pedido con centro de mecaniza-do C.N.C. Dispositivos mecánicos y neumáticos con P.L.C. Calibres patrón para piezas estampadas y dispositivos."
    },
    {
      icon: trabajoEnSerie,
      title: "TRABAJOS EN SERIE",
      description: "Balancinado y soldaduras de conjun-tos. Piezas fabricadas con centro me-canizados C.N.C."
    },
    {
      icon: serviciosIndustriales,
      title: "SERVICIOS INDUSTRIALES",
      description: "Trabajos por pedido. Mantenimiento mecánico. Instalaciones mecánicas. Diseños especiales."
    }
  ];

  return (
    <section id="services-section" className="services-section">
      <div className="background-design"></div>
      <div className="services-content">
        <h2 className="services-title">SERVICIOS</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slide-number">03</div>
    </section>
  );
};

export default ServicesSection;