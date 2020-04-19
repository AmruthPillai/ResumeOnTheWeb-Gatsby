import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={200}
    avgTypingDelay={40}
    cursor={{ show: false }}
    className="mt-4 flex"
    onTypingDone={onDone}
  >
    <code className="w-2/3 text-sm text-left leading-loose">
      <span className="text-blue-600">const</span>{" "}
      <span className="text-orange-400">amruth</span>:{" "}
      <span className="text-orange-400">Array</span>&lt;
      <span className="text-green-400">Ingredient</span>&gt;{" "}
      <span className="text-blue-600">=</span> [
      <span className="text-red-500">Designer</span>,{" "}
      <span className="text-red-500">Developer</span>,{" "}
      <span className="text-red-500">Photographer</span>,{" "}
      <span className="text-red-500">Writer</span>,{" "}
      <span className="text-red-500">Sugar</span>,{" "}
      <span className="text-red-500">Spice</span>, ...
      <span className="text-red-500">everythingNice</span>];
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
