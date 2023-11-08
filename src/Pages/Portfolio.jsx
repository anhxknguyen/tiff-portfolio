import ProjectItem from "../Components/ProjectItem";
import { motion } from "framer-motion";

const Portfolio = ({ projectsList }) => {
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
      className="flex items-start justify-center w-full h-full py-5 overflow-scroll text-center lg:justify-start lg:py-16 lg:w-1/2 lg:text-start no-scrollbar"
    >
      <ul className="flex flex-col items-center lg:w-full">
        {projectsList.map((projectsList, index) => (
          <ProjectItem
            key={index}
            projectTitle={projectsList.projectTitle}
            projectType={projectsList.projectType}
            fileName={projectsList.fileName}
            path={projectsList.path}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default Portfolio;
