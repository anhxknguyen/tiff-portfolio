import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import MainScreen from "./mainScreen.jsx";
import { HashRouter as BrowserRouter } from "react-router-dom";

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty("--vh", `${vh}px`);
// window.addEventListener("resize", () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainScreen />
    </BrowserRouter>
  </React.StrictMode>
);
