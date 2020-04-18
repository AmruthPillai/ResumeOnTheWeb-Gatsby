import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { MdPerson } from "../components/Icons";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <div id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div
        className="text-justify w-3/4 wow bounceInUp"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  );
};

export default AboutMe;
