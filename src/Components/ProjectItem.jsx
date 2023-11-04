import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const ProjectItem = ({ projectTitle, projectType }) => {
  return (
    <div className="flex flex-col gap-3 hover:text-hoverColor hover:cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="fixed object-cover h-64 ml-10 transform -translate-x-1/2 -translate-y-1/2 border select-none hover:cursor-default border-textColor w-image left-1/5 top-1/2"
        src="./cover-art.png"
        alt="placeholder"
      />
      <h1 className="text-5xl">{projectTitle}</h1>
      <h2 className="text-xl">{projectType}</h2>
    </div>
  );
};

export default ProjectItem;
