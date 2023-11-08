import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ projectTitle, projectType, fileName, path }) => {
  // eslint-disable-next-line no-unused-vars
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full h-full">
      <AnimatePresence>
        {isHovering &&
          window.matchMedia("(pointer: coarse)").matches == false && (
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              className="fixed hidden object-cover ml-10 transform -translate-x-1/2 -translate-y-1/2 border select-none lg:block lg:h-96 lg:max-w-preview hover:cursor-default border-textColor w-image lg:left-6.5/10 top-1/2"
              src={fileName}
              alt={projectTitle}
            />
          )}
      </AnimatePresence>
      <NavLink
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        to={path}
        className="flex flex-col items-center h-full gap-1 py-5 lg:items-start lg:w-3/4 lg:pl-32 lg:gap-2 hover:text-hoverColor hover:cursor-pointer"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl">{projectTitle}</h1>
        <h2 className="text-lg lg:text-xl">{projectType}</h2>
      </NavLink>
    </div>
  );
};

export default ProjectItem;
