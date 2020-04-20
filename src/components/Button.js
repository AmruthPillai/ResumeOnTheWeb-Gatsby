import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import ThemeContext from "../context/ThemeContext";

const Button = ({ type, className, icon, title, onClick, disabled }) => {
  const { dark } = useContext(ThemeContext);
  const Icon = icon;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.container} ${className} ${!dark && styles.light}`}
    >
      <div>
        <Icon />
        <h6>{title}</h6>
      </div>
      <div />
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
