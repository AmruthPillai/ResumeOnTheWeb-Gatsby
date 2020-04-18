import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Heading from "../components/Heading";
import { MdWork, MdLocationOn } from "../components/Icons";

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            title
            subtitle
            period
            location
            specialization
            icon {
              childImageSharp {
                fixed(height: 32) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="work">
      <Heading icon={MdWork} title="Work" />

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allWorkJson.edges.map(({ node }, index) => {
            return (
              <div
                key={node.title}
                className="py-4 flex wow fadeInDown"
                style={{
                  animationDuration: `${index * 200 + 500}ms`,
                }}
              >
                <div
                  className="relative mt-3 w-3 h-3 rounded-full bg-white shadow-xl opacity-75 z-2"
                  data-tip={`(${node.period})`}
                  data-place="left"
                />
                <div className="ml-8">
                  <GatsbyImage
                    className="w-auto h-8 object-contain"
                    {...node.icon.childImageSharp}
                  />
                  <div className="mt-3 flex items-baseline">
                    <h6 className="font-semibold">{node.title}</h6>
                    <h6 className="text-xs ml-2">({node.period})</h6>
                  </div>
                  <h6 className="text-sm">{node.subtitle}</h6>
                  <div className="mt-2 flex items-center">
                    <MdLocationOn size="0.75rem" />
                    <h6 className="font-semibold text-xs ml-2">
                      {node.location}
                    </h6>
                  </div>
                  <h6 className="text-xs mt-2">
                    <strong>Specialized in:</strong> {node.specialization}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
