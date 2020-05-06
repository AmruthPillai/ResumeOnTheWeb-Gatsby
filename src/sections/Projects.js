import Tooltip from "@material-ui/core/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaDev, FaGithub, FaLink } from "../components/Icons";
import styles from "./Projects.module.css";

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            website
            github
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
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
    <section id="projects">
      <Heading icon={FaDev} title="Projects" />

      <div className={styles.container}>
        {data.allProjectsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.project} wow fadeIn`}
            style={{
              animationDelay: `${index * 300 + 300}ms`,
            }}
          >
            <OutboundLink
              href={node.website || node.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                {...node.image.childImageSharp}
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
            <h5 className="mt-4 font-semibold">{node.title}</h5>
            <p className="mt-2 pb-5 text-sm text-justify">{node.description}</p>

            <p className="pb-2 flex text-xs font-semibold">
              {node.tags.map(x => (
                <span key={x} className="mr-2">
                  #{x}
                </span>
              ))}
            </p>

            <div className="flex mt-2">
              {node.website && (
                <Tooltip title="Go to Website" placement="bottom">
                  <OutboundLink
                    href={node.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <FaLink />
                    <span className="sr-only">Go to Website</span>
                  </OutboundLink>
                </Tooltip>
              )}

              {node.github && (
                <Tooltip title="Go to GitHub Repo" placement="bottom">
                  <OutboundLink
                    href={node.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 mr-2 hover:text-primary-500"
                  >
                    <FaGithub />
                    <span className="sr-only">Go to GitHub Repo</span>
                  </OutboundLink>
                </Tooltip>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className="mt-6"
        icon={FaGithub}
        title="Projects on GitHub"
        onClick={() => window.open("https://pillai.xyz/github", "_blank")}
      />
    </section>
  );
};

export default Projects;
