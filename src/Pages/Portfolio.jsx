import ProjectItem from "../Components/ProjectItem";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projectsList = [
    {
      projectTitle: "Spring Day",
      projectType: "Original Work",
      fileName: "./spring-day.png",
      fileNameMin: "./spring-day-min.png",
    },
    {
      projectTitle: "Paper Cranes",
      projectType: "Original Work",
      fileName: "./paper-cranes.png",
      fileNameMin: "./paper-cranes-min.png",
    },
    {
      projectTitle: "Venti",
      projectType: "Fanart/Commission",
      fileName: "./venti.PNG",
      fileNameMin: "./venti-min.PNG",
    },
    {
      projectTitle: "Miya Twins",
      projectType: "Fanart",
      fileName: "./miya-twins.png",
      fileNameMin: "./miya-twins-min.png",
    },
    {
      projectTitle: "Kokomi",
      projectType: "Fanart",
      fileName: "./kokomi.png",
      fileNameMin: "./kokomi-min.png",
    },
    {
      projectTitle: "Hanni",
      projectType: "Fanart",
      fileName: "./hanni.jpg",
      fileNameMin: "./hanni-min.jpg",
    },
    {
      projectTitle: "Orange Justice",
      projectType: "Draft",
      fileName: "./girl1.PNG",
      fileNameMin: "./girl1-min.PNG",
    },
    {
      projectTitle: "Butterfly",
      projectType: "Draft",
      fileName: "./butterfly.png",
      fileNameMin: "./butterfly-min.png",
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
      className="flex items-start self-center justify-center w-full h-full py-5 overflow-scroll text-center lg:justify-start lg:py-10 lg:w-1/2 lg:text-start lg:self-end no-scrollbar"
    >
      <ul className="flex flex-col items-center lg:items-start lg:pl-14">
        {projectsList.map((project, index) => (
          <ProjectItem
            key={index}
            projectTitle={project.projectTitle}
            projectType={project.projectType}
            fileName={project.fileName}
            fileNameMin={project.fileNameMin}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default Portfolio;
