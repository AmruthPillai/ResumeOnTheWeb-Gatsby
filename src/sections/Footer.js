import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle, FaStar } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../components/Button";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-rotw" } }) {
        html
      }
    }
  `);

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="About Resume on the Web" />

      <div
        className="text-justify w-3/4 wow fadeInDown"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <Button
        className="mt-6"
        icon={FaStar}
        title="Star this Project on GitHub"
        onClick={() =>
          window.open(
            "https://github.com/AmruthPillai/ResumeOnTheWeb-Gatsby",
            "_blank",
          )
        }
      />
    </section>
  );
};

export default Footer;
