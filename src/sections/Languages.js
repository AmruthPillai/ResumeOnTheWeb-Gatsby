import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Typist from "react-typist";
import Heading from "../components/Heading";
import { FaSignLanguage } from "../components/Icons";
import styles from "./Languages.module.css";

const Languages = () => {
  const [typistIndex, setTypistIndex] = useState(0);
  const data = useStaticQuery(graphql`
    {
      allLanguagesJson {
        edges {
          node {
            id
            text
            translation
            language
          }
        }
      }
    }
  `);

  return (
    <section id="languages">
      <Heading icon={FaSignLanguage} title="Languages" />

      <div className="h-48 md:h-40 lg:h-32 wow fadeIn">
        <Typist
          key={typistIndex}
          avgTypingDelay={40}
          cursor={{ show: false }}
          onTypingDone={() => setTypistIndex(typistIndex + 1)}
        >
          {data.allLanguagesJson.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <h2 className="text-4xl pb-2">{node.text}</h2>
                <span className="italic">{node.translation}</span>
                <Typist.Backspace
                  count={node.text.length + node.translation.length}
                  delay={2000}
                />
                <Typist.Delay ms={300} />
              </div>
            );
          })}
        </Typist>
      </div>

      <div className="mt-12 flex flex-wrap">
        {data.allLanguagesJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className={styles.language}>
              <span>{node.language}</span>
              <span className={styles.divider}>/</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
