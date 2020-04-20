import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Heading from "../components/Heading";
import { IoIosDocument, FaLink } from "../components/Icons";
import Button from "../components/Button";

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume/preview.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Resume" />

      <div className="grid grid-cols-5 gap-8 items-center">
        <div className="col-span-2">
          <a
            href="https://pillai.xyz/resume-pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
          >
            <FaLink className="absolute" color="#FFF" size="5rem" />
            <GatsbyImage
              {...data.file.childImageSharp}
              className="absolute w-full h-64 object-cover rounded-lg hover:opacity-50 duration-200"
              imgStyle={{ objectPosition: "top" }}
            />
          </a>
        </div>
        <div className="col-span-3">
          <h4 className="font-semibold">
            To those HRs out there who need a more organized and minimal version
            of my information, you can download the trusted PDF version here:
          </h4>

          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Download Resume"
            onClick={() =>
              window.open("https://pillai.xyz/resume-pdf", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
