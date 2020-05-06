import Tooltip from "@material-ui/core/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useContext } from "react";
import Heading from "../components/Heading";
import { MdSchool } from "../components/Icons";
import ThemeContext from "../context/ThemeContext";

const Education = () => {
  const { dark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            id
            title
            subtitle
            period
            icon {
              childImageSharp {
                fixed(width: 32, height: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="education">
      <Heading icon={MdSchool} title="Education" />

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allEducationJson.edges.map(({ node }, index) => {
            return (
              <div
                key={node.id}
                className="py-4 flex wow fadeInDown"
                style={{
                  animationDuration: `${index * 200 + 500}ms`,
                }}
              >
                <Tooltip title={`(${node.period})`} placement="left">
                  <div
                    className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                      dark ? "bg-white" : "bg-primary-500"
                    } duration-200`}
                  />
                </Tooltip>
                <div className="ml-8">
                  <GatsbyImage
                    className="w-8 h-8"
                    {...node.icon.childImageSharp}
                  />
                  <h6 className="mt-3 font-semibold">{node.title}</h6>
                  <h6 className="text-sm">{node.subtitle}</h6>
                  <h6 className="mt-2 text-xs">({node.period})</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
