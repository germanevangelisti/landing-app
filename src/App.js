import React from "react";
import "./App.css";

import AnimatedSection from "./components/AnimatedSection";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import CardContainer from "./components/CardContainer";
// import EmailFormSection from "./components/EmailFormSection";
import Footer from "./components/Footer";

import cards1 from "./data/dummydata1";
import cards2 from "./data/dummydata2";

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

      <Footer />
    </div>
  );
};

export default App;
