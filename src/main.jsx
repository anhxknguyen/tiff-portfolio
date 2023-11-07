import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import MainScreen from "./mainScreen.jsx";
import { HashRouter as BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainScreen />
    </BrowserRouter>
  </React.StrictMode>
);
