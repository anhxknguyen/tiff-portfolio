import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Artwork from "./Components/Artwork";
import React from "react";

function MainScreen() {
  const location = useLocation();

  const projectsList = [
    {
      projectTitle: "Spring Day",
      projectType: "Original Work",
      fileName: "./spring-day.png",
      path: "/spring-day",
    },
    {
      projectTitle: "Paper Cranes",
      projectType: "Original Work",
      fileName: "./paper-cranes.png",
      path: "/paper-cranes",
    },
    {
      projectTitle: "Venti",
      projectType: "Fanart/Commission",
      fileName: "./venti.PNG",
      path: "/venti",
    },
    {
      projectTitle: "Miya Twins",
      projectType: "Fanart",
      fileName: "./miya-twins.png",
      path: "/miya-twins",
    },
    {
      projectTitle: "Kokomi",
      projectType: "Fanart",
      fileName: "./kokomi.png",
      path: "/kokomi",
    },
    {
      projectTitle: "Hanni",
      projectType: "Fanart",
      fileName: "./hanni.jpg",
      path: "/hanni",
    },
    {
      projectTitle: "Samantha",
      projectType: "Draft",
      fileName: "./samantha.PNG",
      path: "/samantha",
    },
    {
      projectTitle: "Butterfly",
      projectType: "Draft",
      fileName: "./butterfly.png",
      path: "/butterfly",
    },
  ];

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
      <Navbar current={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Portfolio projectsList={projectsList} />} />
          <Route path="/about" element={<About />} />
          {projectsList.map((projectsList, index) => (
            <Route
              key={index}
              path={projectsList.path}
              element={
                <Artwork
                  projectTitle={projectsList.projectTitle}
                  projectType={projectsList.projectType}
                  fileName={projectsList.fileName}
                />
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default MainScreen;
