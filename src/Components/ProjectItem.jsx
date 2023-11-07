import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { UserContext } from "../mainScreen";
import { useContext, useState } from "react";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ projectTitle, projectType, fileName }) => {
  // eslint-disable-next-line no-unused-vars
  const { project, setProject } = useContext(UserContext);
  const [isHovering, setIsHovering] = useState(false);

  function handleClick() {
    setProject({
      projectTitle: projectTitle,
      projectType: projectType,
      fileName: fileName,
    });
  }

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
              className="fixed hidden object-cover ml-10 transform -translate-x-1/2 -translate-y-1/2 border select-none lg:block lg:h-preview lg:max-w-preview hover:cursor-default border-textColor w-image left-1/5 top-1/2"
              src={fileName}
              alt={projectTitle}
            />
          )}
      </AnimatePresence>
      <NavLink
        className="flex flex-col w-11/12 gap-1 lg:gap-2 hover:text-hoverColor hover:cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        to="/artwork"
        onClick={handleClick}
      >
        <h1 className="text-3xl sm:text-4xl">{projectTitle}</h1>
        <h2 className="text-lg sm:text-lg">{projectType}</h2>
      </NavLink>
    </div>
  );
};

export default ProjectItem;
