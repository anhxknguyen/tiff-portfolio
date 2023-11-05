import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
      className="absolute top-0 left-0 w-screen h-full px-10 overflow-scroll lg:overflow-hidden innerScreenHeight bg-artBg text-artTextColor"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 0.25, duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      >
        <NavLink
          to="/"
          className="lg:fixed lg:top-0 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:hover:text-textColor lg:hover:cursor-pointer lg:left-16 lg:top-10"
        >
          {"<"} back
        </NavLink>
      </motion.div>

      <div className="flex flex-col items-center justify-center my-10 text-left lg:h-full lg:flex-row">
        <div className="flex flex-col items-center w-full gap-10 lg:justify-center lg:flex-row h-1/2 lg:h-full">
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0.25, duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            src={fileName}
            className="object-cover h-small md:h-med xl:h-large"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="flex flex-col w-4/5 gap-5 lg:w-1/3 xl:gap-10 xl:w-1/4"
          >
            <div className="flex flex-col gap-3 xl:gap-5">
              <h1 className="self-center text-2xl lg:self-start lg:text-4xl xl:text-6xl">
                {projectTitle}
              </h1>
              <h2 className="self-center text-lg lg:self-start lg:text-2xl xl:text-3xl">
                {projectType}
              </h2>
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Artwork;
