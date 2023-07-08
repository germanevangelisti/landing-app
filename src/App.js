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
      <AnimatedSection>
        <LandingSection />
      </AnimatedSection>

      <AnimatedSection>
        <CardContainer sectionId="cards-section-1" cards={cards1} />
      </AnimatedSection>

      <AnimatedSection>
        <CardContainer
          sectionId="cards-section-2"
          cards={cards2}
          backgroundColor="black"
          // fullHeight
        />
      </AnimatedSection>

      <AnimatedSection>
        <CounterSection counters={counters} />
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default App;
