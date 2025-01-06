// src/index.js

import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";
import { LanguageProvider } from "./Context/LanguageContext";
import { LoadingProvider } from "./Context/LoadingContext";

// Create a root for ReactDOM and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoadingProvider>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </LoadingProvider>
);
