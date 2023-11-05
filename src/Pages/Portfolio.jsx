import ProjectItem from "../Components/ProjectItem";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projectsList = [
    {
      projectTitle: "Spring Day",
      projectType: "Original Work",
      fileName: "./cover-art.png",
      fileNameMin: "./cover-art-min.png",
    },
    {
      projectTitle: "Paper Cranes",
      projectType: "Original Work",
      fileName: "./girl4.PNG",
      fileNameMin: "./girl4-min.PNG",
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
      fileName: "./guys.PNG",
      fileNameMin: "./guys-min.PNG",
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
      fileName: "./girl3.jpg",
      fileNameMin: "./girl3-min.jpg",
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
      fileName: "./girl2.PNG",
      fileNameMin: "./girl2-min.PNG",
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
      className="flex items-start self-center justify-start h-full py-5 overflow-scroll text-center lg:py-10 lg:w-1/2 lg:text-start lg:self-end no-scrollbar"
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
