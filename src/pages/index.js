import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Achievements from "../sections/Achievements";
import Blog from "../sections/Blog";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Philanthropy from "../sections/Philanthropy";
import Photography from "../sections/Photography";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Hero />
        <AboutMe />
        <div className="grid md:grid-cols-2">
          <Work />
          <Education />
        </div>
        <Skills />
        <Projects />
        {/* <Blog />
        <Languages />
        <div className="grid grid-cols-3">
          <Achievements />
          <Certifications />
          <Philanthropy />
        </div>
        <Photography />
        <Resume />
        <Contact />
        <Footer /> */}
      </div>
    </Wrapper>
  );
};

export default IndexPage;
