import React from "react";
import PropTypes from "prop-types";

import "./src/css/tailwind.css";
import "./src/css/animate.css";
import "./src/css/global.css";

import { ThemeProvider } from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
