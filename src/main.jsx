import React from "react";
import Routes from "./routes";
import theme from "./styles/theme";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import  GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);