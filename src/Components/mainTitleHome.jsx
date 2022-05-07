// NOTE: There is a layout component for the main title. This one was created on a
// separated context to use the collapse effects of the home page.

import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import SubTitle from "../Components/introSubTitle.jsx";
import { HomeCollapse } from "../pages/Home.js";

const MainTitle = ({
  titleValue,
  subTitleValue,
  subTitleAnimation,
  subTitleDuration,
}) => {
  // Importing the hidden value from the home Context
  const { hidden } = useContext(HomeCollapse);

  // State for managing the collapsed or open state based on the hidden Context Value
  const [collapse, setCollapse] = useState("scale-100");

  // Set the current collapse State. On hidden change, if its true, it collapses the
  // whole component
  useEffect(() => {
    if (hidden === true) {
      setCollapse("scale-y-0 max-h-0");
    } else {
      setCollapse("scale-y-100 xs:max-h-[330px] md:max-h-[250px]");
    }
  }, [hidden]);

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
    <div className={`transition-all transform origin-top ${collapse}`}>
      <section className="flex flex-row flex-wrap bg-stone-900 p-5 md:justify-center md:h-auto">
        <TitleArr splitTitle={splitTitle} />
        <SubTitle
          subTitle={subTitleValue}
          animation={subTitleAnimation}
          duration={subTitleDuration}
        />
      </section>
    </div>
  );
};

//PropTypes for property validation.
MainTitle.propTypes = {
  titleValue: PropTypes.string,
  subTitleValue: PropTypes.string,
};

export default MainTitle;
