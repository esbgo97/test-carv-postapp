import React from "react";
import "./App.css";
import { AppRoutes } from "./pages/routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./packages/material";
import { Layout } from "./components/Layout";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
