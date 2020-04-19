import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
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

      <div className="flex overflow-x-auto pb-8">
        {data.allProjectsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.project} wow fadeIn`}
            style={{
              animationDelay: `${index * 300 + 300}ms`,
            }}
          >
            <a
              href={node.website || node.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-48 relative flex-center cursor-pointer rounded-lg shadow-xl"
              style={{ width: "340px" }}
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                {...node.image.childImageSharp}
              />
            </a>
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
                <a
                  href={node.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-2 mr-2"
                  data-tip="Go to Website"
                  data-place="bottom"
                >
                  <FaLink />
                </a>
              )}

              {node.github && (
                <a
                  href={node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-2 mr-2"
                  data-tip="Go to GitHub Repo"
                  data-place="bottom"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
