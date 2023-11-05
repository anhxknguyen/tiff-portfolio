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
      className="flex flex-col items-center h-full gap-10 my-10 overflow-scroll lg:my-0 lg:gap-0 lg:flex-row lg:w-1/2 lg:justify-start lg:items-start lg:self-end lg:flex h-3/5 no-scrollbar"
    >
      <img
        className="object-cover border select-none max-w-large lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:ml-10 lg:fixed w-96 h-96 border-textColor lg:left-1/5 lg:top-1/2"
        src="./venti-min.png"
        alt="profile picture"
      />
      <div className="flex items-start justify-center lg:justify-start lg:items-center h-fit lg:h-full lg:w-2/3 lg:pb-20 lg:pl-14">
        <p className="w-2/3 lg:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
          donec enim diam vulputate ut pharetra sit. Nulla porttitor massa id
          neque aliquam vestibulum morbi. Turpis tincidunt id aliquet risus
          feugiat in ante metus. Enim neque volutpat ac tincidunt vitae semper.
          Cursus risus at ultrices mi tempus imperdiet nulla malesuada.
          Ultricies mi quis hendrerit dolor magna eget est lorem. Morbi tempus
          iaculis urna id volutpat lacus. Duis convallis convallis tellus id
          interdum velit laoreet. Nunc lobortis mattis aliquam faucibus purus in
          massa tempor. Netus et malesuada fames ac turpis egestas sed tempus
          urna. Mi eget mauris pharetra et.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
