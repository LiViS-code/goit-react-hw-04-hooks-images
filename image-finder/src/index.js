import React from "react";
import ReactDOM from "react-dom";
import { IconContext } from "react-icons";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/Theme";
import { ToastContainer } from "react-toastify";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: "1.3em",
          style: { verticalAlign: "middle" },
        }}
      >
        <ToastContainer />
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
