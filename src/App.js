import React from "react";
import "./App.css";

import AnimatedSection from "./components/AnimatedSection";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import CardContainer from "./components/CardContainer";
import CounterSection from "./components/CounterSection";
import Footer from "./components/Footer";

import cards1 from "./data/dummydata1";
import cards2 from "./data/dummydata2";
import counters from "./data/dummydata3";

import { servicesData } from "./data/servidesData";
import { lubricentroMovil } from "./data/lubricentro_movil";
import { gallinasPonedoras } from "./data/gallinas_ponedoras";
import { faenadorMovil } from "./data/faenador_movil";
import { parasoles } from "./data/parasoles";
import { solucionesIntegral } from "./data/soluciones_integrales";

const App = () => {
  return (
    <div>
      <NavBar />
      <AnimatedSection sectionId="landing-section">
        <LandingSection />
      </AnimatedSection>
      <AnimatedSection sectionId="services-section">
        <CardContainer title="Servicios" cards={servicesData} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="lubricentro-movil-section">
        <CardContainer title="Lubricentro Móvil" cards={lubricentroMovil} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="galinas-ponedoras-section">
        <CardContainer title="Sistema Integral Semi Automático Para Gallina Ponedoras" cards={gallinasPonedoras} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="faenador-movil-section">
        <CardContainer title="Faenador Móvil" cards={faenadorMovil} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="parasoles-section">
        <CardContainer title="Parasoles" cards={parasoles} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="soluciones-integrales-section">
        <CardContainer title="Soluciones Integrales Para Constructoras" cards={solucionesIntegral} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="cards-section-1">
        <CardContainer cards={cards1} />
      </AnimatedSection>
      <AnimatedSection sectionId="cards-section-2">
        <CardContainer cards={cards2} backgroundColor="black" />
      </AnimatedSection>
      <AnimatedSection sectionId="counter-section">
        <CounterSection counters={counters} />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default App;
