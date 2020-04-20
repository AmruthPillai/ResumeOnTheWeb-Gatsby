import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
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

  useEffect(() => {
    setParallax(
      new Parallax(parallaxRef.current, {
        invertX: false,
        invertY: false,
      }),
    );
    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-5 gap-16 items-center">
        <div ref={parallaxRef} className="col-span-2">
          <div data-depth="0.4">
            <GatsbyImage {...data.photo.childImageSharp} />
          </div>
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
