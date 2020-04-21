import PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import ThemeContext from "../context/ThemeContext";
import Navigation from "./Navigation";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs");
      const { isMobile } = require("../utils");

      setIsMobile(isMobile);
      new WOW.WOW({ live: false, mobile: false }).init();
    }
  }, []);

  return (
    <div className={dark ? styles.dark : styles.light}>
      <SEO />
      <Navigation />

      <div className="mx-8 lg:mx-16 xl:mx-0">{children}</div>
      <ReactTooltip disable={isMobile} />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
