import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from '@mui/material/styles'
import theme from "./theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
