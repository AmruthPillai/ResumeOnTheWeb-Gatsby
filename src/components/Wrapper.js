import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import ThemeContext from "../context/ThemeContext";
import { isMobile } from "../utils";
import Navigation from "./Navigation";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== `undefined` || !isMobile) {
      const WOW = require("wowjs");
      new WOW.WOW({ live: false, mobile: false }).init();
    }
  }, []);

  return (
    <div className={dark ? styles.dark : styles.light}>
      <ReactTooltip disable={isMobile} />
      <SEO />
      <Navigation />

      <div className="mx-6 lg:mx-0">{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
