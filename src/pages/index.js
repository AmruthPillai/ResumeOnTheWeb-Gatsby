import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Blog from "../sections/Blog";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Philanthropy from "../sections/Philanthropy";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import Photography from "../sections/Photography";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Hero />
        <AboutMe />
        <div className="grid grid-cols-2">
          <Education />
          <Work />
        </div>
        <Skills />
        <Projects />
        <Blog />
        <Languages />
        <div className="grid grid-cols-3">
          <Achievements />
          <Certifications />
          <Philanthropy />
        </div>
        <Photography />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
