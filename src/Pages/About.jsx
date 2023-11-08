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
      className="flex flex-col items-center h-full gap-10 my-10 overflow-scroll msm:my-15 lg:my-0 lg:pb-20 lg:gap-10 lg:w-1/2 lg:pl-20 lg:justify-center lg:items-start lg:self-start lg:flex no-scrollbar"
    >
      <h1 className="text-4xl text-center lg:hidden">
        Tiffany<br></br>Xiang
      </h1>
      <img
        src="./profile.jpg"
        alt="profile picture"
        className="object-cover border select-none max-w-large lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:ml-10 lg:fixed sm:h-preview border-textColor lg:left-6.5/10 lg:top-1/2"
      />
      <h1 className="hidden text-7xl lg:block">
        Tiffany<br></br> <span className="pl-20">Xiang</span>
      </h1>
      <div className="flex items-start justify-center h-fit lg:justify-start lg:items-center lg:w-4/5">
        <p className="w-2/3 text-base sm:text-lg lg:w-full">
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
