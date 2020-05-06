import Tooltip from "@material-ui/core/Tooltip";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import social from "../data/social";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.container}>
      {social.map((x, i) => {
        const Icon = x.icon;

        return (
          <Tooltip key={x.title} title={x.title} placement="bottom">
            <OutboundLink
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${x.class} animated fadeIn`}
              style={{ animationDelay: `${i * 0.25 + 0.25}s` }}
            >
              <Icon color="#FFF" size="0.9em" />
              <span className="sr-only">{x.title}</span>
            </OutboundLink>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Social;
