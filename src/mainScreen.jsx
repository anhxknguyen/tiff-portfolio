import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Artwork from "./Components/Artwork";
import { useState } from "react";
import React from "react";

export const UserContext = React.createContext(null);

function MainScreen() {
  let vh = window.innerHeight * 0.01;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var timeoutFunction;

  const conditionalResize = () => {
    if (currWidth != windowWidth) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  };

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let currWidth = windowWidth;
    setWindowWidth(window.innerWidth);
    clearTimeout(timeoutFunction);
    timeoutFunction = setTimeout(conditionalResize, 500);
  });

  const location = useLocation();
  if (JSON.parse(localStorage.getItem("project")) === null) {
    var [project, setProject] = useState({});
  } else {
    var [project, setProject] = useState(
      JSON.parse(localStorage.getItem("project"))
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      className="flex flex-col items-start h-full bg-cover font-textFont text-textColor lineartTempBg"
    >
      <UserContext.Provider
        value={{ project: project, setProject: setProject }}
      >
        <Navbar current={location.pathname} />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/artwork"
              element={
                <Artwork
                  projectTitle={project.projectTitle}
                  projectType={project.projectType}
                  fileName={project.fileName}
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </UserContext.Provider>
    </motion.div>
  );
}

export default MainScreen;
