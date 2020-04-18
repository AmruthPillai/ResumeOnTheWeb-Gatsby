import React from "react";
import Wrapper from "../components/Wrapper";
import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Hero />
        <AboutMe />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
