import PropTypes from "prop-types";
import React, { useEffect, useContext } from "react";
import ReactTooltip from "react-tooltip";
import Navigation from "./Navigation";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";
import ThemeContext from "../context/ThemeContext";

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
      <ReactTooltip />
      <SEO />
      <Navigation />
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
