import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import { Route, useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function MainScreen() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="flex flex-col items-start h-full font-textFont text-textColor bg-tempBg bg-backgroundColor">
      <Navbar current={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default MainScreen;
