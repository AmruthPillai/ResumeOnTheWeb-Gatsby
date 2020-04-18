import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Hero from "../sections/Hero";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Hero />
        <AboutMe />
        <div className="grid grid-cols-2">
          <Education />
          <Education />
        </div>
      </div>
    </Wrapper>
  );
};

export default IndexPage;
