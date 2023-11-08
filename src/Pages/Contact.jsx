import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }
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
      className="flex flex-col items-center w-full h-full gap-10 my-10 overflow-scroll text-lg msm:my-15 lg:pb-20 lg:gap-5 lg:w-1/2 lg:pl-20 lg:justify-start lg:items-start lg:self-start lg:flex no-scrollbar"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/tiffany-xiang-b008b1256/"
        className={isTouchDevice() == false && `hover:text-selectedColor`}
      >
        LinkedIn
      </a>
      <a
        href=""
        className={isTouchDevice() == false && `hover:text-selectedColor`}
      >
        Resume
      </a>
      <a
        href="mailto:txiang4@u.rochester.edu"
        className={isTouchDevice() == false && `hover:text-selectedColor`}
      >
        Email
      </a>
    </motion.div>
  );
};

export default Contact;
