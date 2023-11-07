import { motion } from "framer-motion";

const About = () => {
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
      className="flex flex-col items-center h-full gap-10 my-10 overflow-scroll msm:my-15 md:my-20 lg:my-0 lg:gap-0 lg:flex-row lg:w-1/2 lg:justify-start lg:items-start lg:self-end lg:flex h-3/5 no-scrollbar"
    >
      <img
        className="object-cover border select-none max-w-large lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:ml-10 lg:fixed sm:h-96 border-textColor lg:left-1/5 lg:top-1/2"
        src="./profile.jpg"
        alt="profile picture"
      />
      <div className="flex items-start justify-center h-1/5 lg:justify-start lg:items-center lg:h-full lg:w-2/3 lg:pb-20">
        <p className="w-2/3 text-base sm:text-lg xl:text-lg lg:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
          donec enim diam vulputate ut pharetra sit. Nulla porttitor massa id
          neque aliquam vestibulum morbi. Turpis tincidunt id aliquet risus
          feugiat in ante metus. Enim neque volutpat ac tincidunt vitae semper.
          Cursus risus at ultrices mi tempus imperdiet nulla malesuada.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
