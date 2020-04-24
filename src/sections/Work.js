import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useContext, useState } from "react";
import ReactTooltip from "react-tooltip";
import Heading from "../components/Heading";
import { MdLocationOn, MdMoreHoriz, MdWork } from "../components/Icons";
import ThemeContext from "../context/ThemeContext";

const Work = () => {
  const { dark } = useContext(ThemeContext);
  const [max, setMax] = useState(2);
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            id
            title
            subtitle
            period
            location
            specialization
            icon {
              childImageSharp {
                fixed(height: 32) {
                  ...GatsbyImageSharpFixed_withWebp
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

      <div className="bg-primary-800 text-white rounded p-6 mb-8 lg:mr-12">
        I had a job opportunity with a company in Berlin, but they had to
        regrettably withdraw their offer because of the ongoing economic turmoil
        due to the COVID19 Pandemic, so if you or your company is hiring, please
        contact me at{" "}
        <a href="emailto:im.amruth@gmail.com">im.amruth@gmail.com</a> or send me
        a message using the <a href="#contact">contact form</a> below.
      </div>

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allWorkJson.edges.map(({ node }, index) => {
            if (index >= max) return null;

            return (
              <div
                key={node.id}
                className="py-4 flex wow fadeInDown"
                style={{
                  animationDuration: `${index * 200 + 500}ms`,
                }}
              >
                <div
                  className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                    dark ? "bg-white" : "bg-primary-500"
                  } duration-200`}
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
      {max <= 2 && (
        <div className="ml-12 mt-4 rounded-lg py-2 flex">
          <div
            className="px-4"
            data-tip="Load More"
            data-place="right"
            onClick={() => {
              setMax(6);
              ReactTooltip.rebuild();
              ReactTooltip.hide();
            }}
          >
            <MdMoreHoriz size="1.5rem" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
