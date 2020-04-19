import React, { useState } from "react";
import Typist from "react-typist";
import styles from "./Languages.module.css";

import Heading from "../components/Heading";
import { FaSignLanguage } from "../components/Icons";

const languages = [
  {
    language: "English",
    text: "I'm pretty fluent in English.",
    translation: "",
  },
  {
    language: "Tamil",
    text: "தமிழ் என் தாய்மொழி.",
    translation: "Tamil is my native tongue.",
  },
  {
    language: "Kannada",
    text: "ನನಗೆ ಕನ್ನಡ ಕೂಡ ಸ್ವಲ್ಪ ಬರುತ್ತೆ.",
    translation: "I know a bit of Kannada as well.",
  },
  {
    language: "Hindi",
    text: "में मुश्किल से हिंदी बात करता हूँ|",
    translation: "I speak Hindi with some difficulty.",
  },
  {
    language: "German",
    text: "Ich lerne Deutsch auf Duolingo.",
    translation: "I am currently learning German on Duolingo.",
  },
];

const Languages = () => {
  const [typistIndex, setTypistIndex] = useState(0);

  return (
    <section id="languages">
      <Heading icon={FaSignLanguage} title="Languages" />

      <div className="h-32 flex items-center wow fadeIn">
        <Typist
          key={typistIndex}
          avgTypingDelay={40}
          cursor={{ show: false }}
          onTypingDone={() => setTypistIndex(typistIndex + 1)}
        >
          {languages.map(({ text, translation }) => {
            return (
              <div key={text}>
                <h1 className="text-4xl pb-2">{text}</h1>
                <span className="italic">{translation}</span>
                <Typist.Backspace
                  count={text.length + translation.length}
                  delay={2000}
                />
                <Typist.Delay ms={300} />
              </div>
            );
          })}
        </Typist>
      </div>

      <div className="mt-12 flex">
        {languages.map(({ language }) => {
          return (
            <div key={language} className={styles.language}>
              <span>{language}</span>
              <span className={styles.divider}>/</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
