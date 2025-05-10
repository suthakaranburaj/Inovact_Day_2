import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { lightTheme, darkTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MUIThemeProvider theme={lightTheme}>
        <CssBaseline />
        <App />
      </MUIThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
