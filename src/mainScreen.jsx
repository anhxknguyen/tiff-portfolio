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
      className="flex flex-col items-start h-full font-textFont text-textColor"
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
