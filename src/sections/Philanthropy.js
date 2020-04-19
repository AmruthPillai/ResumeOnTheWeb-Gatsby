import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { FaAngleRight, FaBoxOpen } from "../components/Icons";
import styles from "./Meta.module.css";

const Philanthropy = () => {
  const data = useStaticQuery(graphql`
    {
      allPhilanthropyJson {
        edges {
          node {
            id
            title
            description
          }
        }
      }
    }
  `);

  return (
    <section id="philanthropy">
      <Heading icon={FaBoxOpen} title="Philanthropy" />

      {data.allPhilanthropyJson.edges.map(({ node }, index) => (
        <div
          key={node.id}
          className={`${styles.container} wow fadeInDown`}
          style={{
            animationDuration: `${index * 200 + 500}ms`,
          }}
        >
          <div className="mt-1 pr-6">
            <FaAngleRight />
          </div>
          <div>
            <h6 className="font-semibold">{node.title}</h6>
            <p className="mt-1 text-sm text-justify">{node.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Philanthropy;
