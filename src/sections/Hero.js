import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";

const Hero = () => {
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
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
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-5 gap-16 items-center">
        <div className="col-span-2">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div className="col-span-3">
          <GatsbyImage className="h-32" {...data.logo.childImageSharp} />

          <div className="ml-4">
            <Subtitle
              onDone={() => {
                setShowSocial(true);
                ReactTooltip.rebuild();
              }}
            />
            <div className="h-6 my-6">{showSocial && <Social />}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
