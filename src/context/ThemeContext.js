import PropTypes from "prop-types";
import React from "react";

const defaultState = {
  dark: true,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

class ThemeProvider extends React.Component {
  state = {
    dark: true,
  };

  toggleDark = () => {
    let dark = !this.state.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    this.setState({ dark });
  };

  componentDidMount() {
    const dark = JSON.parse(localStorage.getItem("dark"));

    if (dark === false) {
      this.setState({ dark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }
  }

  render() {
    const { children } = this.props;
    const { dark } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeContext;

export { ThemeProvider };
