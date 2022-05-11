import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

import styled, { keyframes } from "styled-components";

// Styled component dynamic Typping animation.
const typeWriter = (length) => keyframes`
  0% { 
    width: 0ch;
  }
  100% { 
    width: ${length}ch;
  }
  
`

// SubTitle styling.
const Text = styled.p`
  background: rgb(28, 25, 23);
  font-size: 15px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-weight: bold;
  color: rgb(220, 38, 38);
  overflow: hidden;
  caret-color: transparent;
  white-space: nowrap;
  margin-left: auto;
  animation: ${props => typeWriter(props.length)} ${props => props.duration}s steps(${props => props.length}, end);
`;

const SubTitle = ({ subTitle, subTitleLength, duration }) => {
  // Reusable subtitle component. It receives a text, an animation and a typping duration as props
  // for the assembly. The animation and the text is applied to the P component, the duration is
  // applied to the span component as a delay property
  return (
    <div
      className="flex flex-row content-center bg-stone-900 overflow-hidden mx-auto w-full
        pt-4"
    >
      <Text length={subTitleLength} duration={duration}>{subTitle}</Text>
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
  subTitleLength: PropTypes.number,
  duration: PropTypes.number,
};

export default SubTitle;
