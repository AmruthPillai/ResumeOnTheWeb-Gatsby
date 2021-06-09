import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import social from "../data/social";
import * as styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.container}>
      {social.map((x, i) => {
        const Icon = x.icon;

        return (
          <OutboundLink
            href={x.link}
            key={x.title}
            target="_blank"
            rel="noopener noreferrer"
            className={`${x.class} animated fadeIn`}
            style={{ animationDelay: `${i * 0.25 + 0.25}s` }}
          >
            <Icon color="#FFF" size="0.9em" />
            <span className="sr-only">{x.title}</span>
          </OutboundLink>
        );
      })}
    </div>
  );
};

export default Social;
