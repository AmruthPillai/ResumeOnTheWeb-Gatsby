import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className, icon, title, onClick }) => {
  const Icon = icon;

  return (
    <button className={`${styles.container} ${className}`} onClick={onClick}>
      <div>
        <Icon />
        <h6>{title}</h6>
      </div>
      <div />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
