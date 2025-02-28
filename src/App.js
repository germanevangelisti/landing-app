import React from "react";
import "./App.css";

import AnimatedSection from "./components/AnimatedSection";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import CardContainer from "./components/CardContainer";
import CounterSection from "./components/CounterSection";
import CardSection from "./components/CardSection";
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

import lubricentroIcon from "./assets/lubricentro_movil.png";
import gallinasPonedorasIcon from "./assets/gallinas_ponedoras.png";
import faenadorMovilIcon from "./assets/faenador_movil.png";
import parasolesIcon from "./assets/parasoles.png";
import solucionesIntegralesIcon from "./assets/soluciones_integrales.png";

import ServicesSection from "./components/ServicesSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <AnimatedSection sectionId="landing-section">
        <LandingSection />
      </AnimatedSection>
      <AnimatedSection sectionId="services-section">
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection sectionId="lubricentro-movil-section">
        <CardSection
          title="Lubricentro Móvil"
          subtitle="DESARROLLO DE ALGUNOS SERVICIOS"
          icon={lubricentroIcon}
          cards={lubricentroMovil}
          backgroundColor="white"
          slideNumber="04"
        />
      </AnimatedSection>
      <AnimatedSection sectionId="lubricentro-movil-section">
        <CardContainer title="Lubricentro Móvil" icon={lubricentroIcon} cards={lubricentroMovil} backgroundColor="white" />
      </AnimatedSection>
       <AnimatedSection sectionId="galinas-ponedoras-section">
        <CardContainer title="Sistema Integral Semi Automático Para Gallina Ponedoras" icon={gallinasPonedorasIcon} cards={gallinasPonedoras} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="faenador-movil-section">
        <CardContainer title="Faenador Móvil" icon={faenadorMovilIcon} cards={faenadorMovil} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="parasoles-section">
          <CardContainer title="Parasoles" icon={parasolesIcon} cards={parasoles} backgroundColor="white" />
      </AnimatedSection>
      <AnimatedSection sectionId="soluciones-integrales-section">
        <CardContainer title="Soluciones Integrales Para Constructoras" icon={solucionesIntegralesIcon} cards={solucionesIntegral} backgroundColor="white" />
      </AnimatedSection> 
      {/*<AnimatedSection sectionId="cards-section-1">
        <CardContainer cards={cards1} />
      </AnimatedSection>
      <AnimatedSection sectionId="cards-section-2">
        <CardContainer cards={cards2} backgroundColor="black" />
      </AnimatedSection>
      <AnimatedSection sectionId="counter-section">
        <CounterSection counters={counters} />
      </AnimatedSection>*/}
      <Footer />
    </div>
  );
};

export default App;
