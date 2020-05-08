import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaLink, FaPaintBrush, FaDribbble } from "../components/Icons";
import styles from "./Design.module.css";

const Design = () => {
  const data = useStaticQuery(graphql`
    {
      allDribbbleShot(sort: { fields: [published], order: DESC }, limit: 10) {
        edges {
          node {
            id
            published
            title
            url
            localCover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="design">
      <Heading icon={FaPaintBrush} title="Design" />

      <div className={styles.container}>
        {data.allDribbbleShot.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="relative cursor-pointer bg-black md:rounded-lg wow fadeIn"
            style={{ animationDelay: `${index * 200 + 200}ms` }}
            onClick={() => window.open(node.url, "_blank")}
          >
            <div className="absolute inset-0 flex-center">
              <FaLink className="absolute" color="#FFF" size="5rem" />
            </div>
            {node.localCover.childImageSharp !== null ? (
              <GatsbyImage
                className="absolute inset-0 md:rounded-lg hover:opacity-50 duration-200"
                alt={node.title}
                sizes={{
                  ...node.localCover.childImageSharp.fluid,
                  aspectRatio: 1 / 1,
                }}
              />
            ) : (
              <img
                loading="lazy"
                className="w-full h-full absolute object-cover inset-0 md:rounded-lg hover:opacity-50 duration-200"
                src={node.localCover.publicURL}
                alt={node.title}
              />
            )}
          </div>
        ))}
      </div>

      <Button
        className="mt-12"
        icon={FaDribbble}
        title="Shots on Dribbble"
        onClick={() => window.open("https://pillai.xyz/dribbble", "_blank")}
      />
    </section>
  );
};

export default Design;
