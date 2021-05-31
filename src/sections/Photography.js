import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { AiFillInstagram, FaInstagram, FaLink } from "../components/Icons";
import * as styles from "./Photography.module.css";

const Photography = () => {
  const data = useStaticQuery(graphql`
    {
      allInstagramContent(
        sort: { fields: [timestamp], order: DESC }
        limit: 10
      ) {
        edges {
          node {
            id
            timestamp
            localImage {
              childImageSharp {
                gatsbyImageData(width: 320, layout: CONSTRAINED, aspectRatio: 1)
              }
            }
          }
        }
      }
    }
  `);

  const openInstagramPost = id =>
    window.open(`https://www.instagram.com/p/${id}`, "_blank");

  return (
    <section id="photography">
      <Heading icon={AiFillInstagram} title="Photography" />

      <div className={styles.container}>
        {data.allInstagramContent.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="relative cursor-pointer bg-black md:rounded-lg wow fadeIn"
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
            onClick={() => openInstagramPost(node.id)}
          >
            <div className="absolute inset-0 flex-center">
              <FaLink className="absolute" color="#FFF" size="5rem" />
            </div>
            <GatsbyImage
              className="absolute inset-0 md:rounded-lg hover:opacity-50 duration-200"
              image={node.localImage.childImageSharp.gatsbyImageData}
            />
          </div>
        ))}
      </div>

      <Button
        className="mt-12"
        icon={FaInstagram}
        title="Photos on Instagram"
        onClick={() => window.open("https://pillai.xyz/instagram", "_blank")}
      />
    </section>
  );
};

export default Photography;
