import ProjectItem from "../Components/ProjectItem";
import { motion } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
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
      className="flex items-start self-end justify-start w-1/2 h-full py-10 overflow-scroll no-scrollbar"
    >
      <ul className="flex flex-col pl-14">
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./levi.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
      </ul>
    </motion.div>
  );
};

export default Portfolio;
