import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
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
      </div>
    </Wrapper>
  );
};

export default IndexPage;
