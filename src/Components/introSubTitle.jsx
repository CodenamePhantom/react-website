import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

const SubTitle = ({ subTitle, animation, duration }) => {
  return (
    <div
      className="bg-stone-900 flex flex-row content-center pt-4 w-full mx-auto 
          overflow-hidden"
    >
      <motion.p
        className={`text-[15px] ml-auto overflow-hidden caret-transparent whitespace-nowrap 
          text-red-600 bg-stone-900 font-mono font-bold ${animation}`}
      >
        {subTitle}
      </motion.p>
      <motion.span
        className="z-0 bg-red-800 mr-auto w-3 h-6"
        initial={{ opacity: 1 }}
        transition={{
          delay: duration,
          ease: "linear",
          repeat: Infinity,
          duration: 1.3,
          times: [0, 0.4, 1, 1.3],
        }}
        animate={{ opacity: [1, 1, 0, 1] }}
      ></motion.span>
    </div>
  );
};

SubTitle.propTypes = {
  subTitle: PropTypes.string,
  textLength: PropTypes.number,
  duration: PropTypes.number,
};

export default SubTitle;
