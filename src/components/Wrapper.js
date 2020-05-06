import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import Navigation from "./Navigation";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs");
      new WOW.WOW({ live: false, mobile: false }).init();
    }
  }, []);

  return (
    <div className={dark ? styles.dark : styles.light}>
      <SEO />
      <Navigation />

      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
