import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(42, 73, 58, 0.98)", // Dark green shade
    },
    secondary: {
      main: "#fcce8d", // Yellow-orange shade
    },
    tertiary: {
      main: "#efe9e2", // Light beige shade
    },
    fourth: {
      main: "#d9e38a", // Light green shade
    },
    banner: {
      main: "#6ed190", // Bright green banner
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#ffffff", // White text background
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
