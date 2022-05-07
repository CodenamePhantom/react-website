import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

const SubTitle = ({ subTitle, animation, duration }) => {
  // Reusable subtitle component. It receives a text, an animation and a typping duration as props
  // for the assembly. The animation and the text is applied to the P component, the duration is
  // applied to the span component as a delay property
  return (
    <div
      className="flex flex-row content-center bg-stone-900 overflow-hidden mx-auto w-full
        pt-4"
    >
      <p
        className={`bg-stone-900 text-red-600 text-[15px] font-mono font-bold overflow-hidden 
          caret-transparent whitespace-nowrap ml-auto ${animation}`}
      >
        {subTitle}
      </p>
      <motion.span
        className="bg-red-800 z-0 mr-auto w-3 h-6"
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

//PropTypes for the component. Used to assure the propValues are always the same type.
SubTitle.propTypes = {
  subTitle: PropTypes.string,
  textLength: PropTypes.number,
  duration: PropTypes.number,
};

export default SubTitle;
