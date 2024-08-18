import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";
import customTheme from "./theme";
import { CssBaseline } from "@mui/material";

const ThemeProvider = ({ children }) => {
  return (
    <EmotionThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </EmotionThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
