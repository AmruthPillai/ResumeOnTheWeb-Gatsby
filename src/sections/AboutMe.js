import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Heading from "../components/Heading";
import { MdPerson } from "../components/Icons";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "about-me/selfie-boy.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <div id="about-me">
      <Heading icon={MdPerson} title="About Me" />

      <div className="grid grid-cols-6 gap-12 items-center">
        <div className="col-span-2 w-3/4 mr-auto wow fadeInLeft">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div
          className="text-justify col-span-4 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </div>
  );
};

export default AboutMe;
