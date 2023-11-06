import { motion, AnimatePresence } from "framer-motion";
import { useHover } from "@uidotdev/usehooks";
import { NavLink } from "react-router-dom";
import { UserContext } from "../mainScreen";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ projectTitle, projectType, fileName }) => {
  const [ref, hovering] = useHover();
  const { project, setProject } = useContext(UserContext);

  function handleClick() {
    setProject({
      projectTitle: projectTitle,
      projectType: projectType,
      fileName: fileName,
    });
  }

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <div className="w-full h-full">
      <AnimatePresence>
        {hovering && isTouchDevice() == false && (
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0, duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="fixed hidden object-cover ml-10 transform -translate-x-1/2 -translate-y-1/2 border select-none lg:block lg:h-96 hover:cursor-default border-textColor w-image left-1/5 top-1/2"
            src={fileName}
            alt={projectTitle}
          />
        )}
      </AnimatePresence>
      <NavLink
        className="flex flex-col gap-2 py-5 lg:gap-3 hover:text-hoverColor hover:cursor-pointer"
        ref={ref}
        to="/artwork"
        onClick={handleClick}
      >
        <h1 className="text-4xl sm:text-5xl">{projectTitle}</h1>
        <h2 className="text-lg sm:text-xl">{projectType}</h2>
      </NavLink>
    </div>
  );
};

export default ProjectItem;
