import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Blog from "../sections/Blog";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

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
      </div>
    </Wrapper>
  );
};

export default IndexPage;
