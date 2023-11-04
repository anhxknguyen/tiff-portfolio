import { motion } from "framer-motion";

const Artwork = ({ projectTitle, projectType, fileName, handleClick }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.25 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      className="absolute top-0 left-0 w-full innerScreenHeight bg-artBg text-artTextColor"
    >
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 0.25, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        onClick={() => handleClick()}
        className="fixed top-0 transform -translate-x-1/2 -translate-y-1/2 hover:text-textColor hover:cursor-pointer left-16 top-10"
      >
        {"<"} back
      </motion.p>
      <div className="flex items-center h-full text-left">
        <div className="flex justify-center w-full gap-10">
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            src={fileName}
            className="h-large"
          />
          <div className="flex flex-col w-1/4 gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl">{projectTitle}</h1>
              <h2 className="text-3xl">{projectType}</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              donec enim diam vulputate ut pharetra sit. Nulla porttitor massa
              id neque aliquam vestibulum morbi. Turpis tincidunt id aliquet
              risus feugiat in ante metus. Enim neque volutpat ac tincidunt
              vitae semper. Cursus risus at ultrices mi tempus imperdiet nulla
              malesuada. Ultricies mi quis hendrerit dolor magna eget est lorem.
              Morbi tempus iaculis urna id volutpat lacus. Duis convallis
              convallis tellus id interdum velit laoreet. Nunc lobortis mattis
              aliquam faucibus purus in massa tempor. Netus et malesuada fames
              ac turpis egestas sed tempus urna. Mi eget mauris pharetra et.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Artwork;
