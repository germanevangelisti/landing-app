import React from "react";
import "./App.css";

import AnimatedSection from "./components/AnimatedSection";
import LandingSection from "./components/LandingSection";
import CardContainer from "./components/CardContainer";
import EmailFormSection from "./components/EmailFormSection";

import cards1 from "./data/dummydata1";
import cards2 from "./data/dummydata2";

const App = () => {
  return (
    <div>
      <AnimatedSection>
        <LandingSection />
      </AnimatedSection>

      <AnimatedSection>
        <CardContainer cards={cards1} />
      </AnimatedSection>

      <AnimatedSection>
        <CardContainer cards={cards2} backgroundColor='black' fullHeight/>
      </AnimatedSection>

      <footer>
        <p>
          &copy; 2023 Ultimate Boilerplate App v2. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
