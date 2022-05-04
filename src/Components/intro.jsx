import React from "react";
import { motion } from "framer-motion";

import { SubTitle } from "./introSubTitle.jsx";

export function MainTitle({titleValue, subTitleValue}) {
  // Create the title array for hoverable letters. The underline is used to keep words on
  // the same line, and will be replaced with a blank paragraph for spacing.
  const title = titleValue;
  const titleWords = title.split(" ");
  const splitTitle = titleWords.map((words) => words.split(""));

  // Writing animation for the subtitle,
  // Create the letter component for each letter and apply the hover effect
  const TitleArr = ({ splitTitle }) =>
    splitTitle.map((word) => (
      <div className="flex flex-row box-content md:my-auto px-2">
        {word.map((letter) =>
          letter !== "_" ? (
            <p
              key={Math.random()}
              className="text-4xl text-stone-300 font-extrabold
                    h-fit font-mono transition-all md:text-5xl 
                    hover:scale-110 hover:first-letter:text-amber-600 
                    hover:mx-1"
            >
              {letter}
            </p>
          ) : (
            <p key={Math.random()} className="w-4">
              {" "}
            </p>
          )
        )}
      </div>
    ));

  // Assemble and style the main component
  return (
    <div className="bg-stone-900 p-5 flex flex-row flex-wrap md:justify-center md:h-auto">
      <TitleArr splitTitle={splitTitle} />
      <SubTitle subTitle={subTitleValue} />
    </div>
  );
}
