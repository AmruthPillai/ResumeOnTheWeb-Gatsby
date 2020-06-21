import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import {
  AiFillInstagram,
  FaHeart,
  FaInstagram,
  FaLink,
} from "../components/Icons";
import styles from "./Photography.module.css";

const Photography = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: [timestamp], order: DESC }, limit: 10) {
        edges {
          node {
            id
            timestamp
            likes
            localFile {
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

  const openInstagramPost = id =>
    window.open(`https://www.instagram.com/p/${id}`, "_blank");

  return (
    <section id="photography">
      <Heading icon={AiFillInstagram} title="Photography" />

      <div className={styles.container}>
        {data.allInstaNode.edges.map(({ node }, index) => (
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
              sizes={{
                ...node.localFile.childImageSharp.fluid,
                aspectRatio: 1 / 1,
              }}
            />
            <div className="absolute bottom-0 flex items-center md:rounded-bl-lg rounded-tr-lg bg-black text-white opacity-75 text-sm px-6 py-2">
              <FaHeart className="mr-2" />
              <span className="font-semibold">{node.likes}</span>
            </div>
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
