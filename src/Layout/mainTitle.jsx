import React from "react";
import PropTypes from "prop-types";

import SubTitle from "../Components/introSubTitle.jsx";

const MainTitle = ({
  titleValue,
  subTitleValue,
  subTitleAnimation,
  subTitleDuration,
}) => {
  // Create the title array for hoverable letters. The underline is used to keep words on
  // the same line, and will be replaced with a blank paragraph for spacing.
  const titleWords = titleValue.split(" ");
  const splitTitle = titleWords.map((words) => words.split(""));

  // Writing animation for the subtitle,
  // Create the letter component for each letter and apply the hover effect
  const TitleArr = ({ splitTitle }) =>
    splitTitle.map((word) => (
      <div
        key={Math.random()}
        className="flex flex-row box-content px-2 md:my-auto"
      >
        {word.map((letter) =>
          letter !== "_" ? (
            <p
              key={Math.random()}
              className="text-stone-300 text-4xl font-extrabold
                    font-mono h-fit transition-all hover:scale-110 
                    hover:first-letter:text-amber-600 hover:mx-1 
                    md:text-5xl"
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
    <section className="flex flex-row flex-wrap bg-stone-900 p-5 md:justify-center md:h-auto">
      <TitleArr splitTitle={splitTitle} />
      <SubTitle
        subTitle={subTitleValue}
        animation={subTitleAnimation}
        duration={subTitleDuration}
      />
    </section>
  );
};

MainTitle.propTypes = {
  titleValue: PropTypes.string,
  subTitleValue: PropTypes.string,
};

export default MainTitle;
