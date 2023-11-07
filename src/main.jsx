import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import MainScreen from "./mainScreen.jsx";
import { HashRouter as BrowserRouter } from "react-router-dom";

let vh = window.innerHeight * 0.01;
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let currWidth = windowWidth;
  setWindowWidth(window.innerWidth);
  if (curr != windowWidth) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    onloadWidth = window.innerWidth;
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainScreen />
    </BrowserRouter>
  </React.StrictMode>
);
