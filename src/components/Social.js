import React from "react";
import social from "../data/social";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.container}>
      {social.map(x => {
        const Icon = x.icon;
        return (
          <div
            key={x.title}
            className={x.class}
            data-tip={x.title}
            data-place="bottom"
          >
            <Icon size="0.9em" />
          </div>
        );
      })}
    </div>
  );
};

export default Social;
