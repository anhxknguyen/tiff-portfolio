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
      className="flex items-start self-center justify-start h-full py-5 overflow-scroll text-center lg:py-10 lg:w-1/2 lg:text-start lg:self-end no-scrollbar"
    >
      <ul className="flex flex-col items-center lg:items-start lg:pl-14">
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./cover-art.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./kokomi.png"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./girl1.PNG"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./girl2.PNG"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./girl3.jpg"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./girl4.PNG"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./venti.PNG"
        />
        <ProjectItem
          projectTitle="Project Name"
          projectType="Project Type"
          fileName="./guys.PNG"
        />
      </ul>
    </motion.div>
  );
};

export default Portfolio;
