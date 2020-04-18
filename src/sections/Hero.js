import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Social from "../components/Social";

const Subtitle = () => (
  <ul className="flex text-sm text-gray-800">
    <li className="mr-3 text-gray-400">Designer</li>|
    <li className="mx-3 text-gray-400">Developer</li>|
    <li className="mx-3 text-gray-400">Photographer</li>|
    <li className="ml-3 text-gray-400">Writer</li>
  </ul>
);

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 128) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <section className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-5 gap-16 items-center">
        <div className="col-span-2">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div className="col-span-3">
          <GatsbyImage className="h-32" {...data.logo.childImageSharp} />

          <div className="ml-4">
            <Subtitle />
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
