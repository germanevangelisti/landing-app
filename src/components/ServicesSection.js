import React from 'react';
import PageLayout from './PageLayout';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/servidesData';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <PageLayout
      title="SERVICIOS"
      subtitle="DESARROLLO DE ALGUNOS SERVICIOS"
      backgroundColor="white"
      slideNumber="03"
    >
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </PageLayout>
  );
};

export default ServicesSection;