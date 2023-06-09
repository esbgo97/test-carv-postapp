import React from "react";
import "./App.css";
import { AppRoutes } from "./pages/routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./packages/material";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
