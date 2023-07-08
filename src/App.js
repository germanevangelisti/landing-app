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

const App = () => {
  return (
    <div>
      <NavBar />
      <AnimatedSection sectionId="landing-section">
        <LandingSection />
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
