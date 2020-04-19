import React from "react";
import social from "../data/social";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.container}>
      {social.map((x, i) => {
        const Icon = x.icon;
        return (
          <div
            key={x.title}
            className={`${x.class} animated fadeIn`}
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
            data-tip={x.title}
            data-place="bottom"
          >
            <Icon color="#FFF" size="0.9em" />
          </div>
        );
      })}
    </div>
  );
};

export default Social;
