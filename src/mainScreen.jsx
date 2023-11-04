import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function MainScreen() {
  const location = useLocation();

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
      <Navbar current={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default MainScreen;
