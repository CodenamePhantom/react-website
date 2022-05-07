import React, { useState, useEffect, useContext } from "react";

import { motion } from "framer-motion";
import { fadeInProperties } from "../helpers/framer-motionProperties.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../pages/Home.js";

export function AboutMe() {
  // States used to open or collapse the about cards. The toggle id is setted to the
  // current open card and the toggle state manages the CSS properties based on the
  // id.
  const [toggle, setToggle] = useState("");
  const [toggleId, setToggleId] = useState(0);

  // State for managing the collapsed or open state based on the Hidden Context value.
  const [collapse, setCollapse] = useState("scale-100");

  // Importing the hidden value from the home Context
  const { hidden } = useContext(HomeCollapse);

  // Common CSS properties between the about components.
  const aboutsContainer = (props) =>
    `bg-stone-200 overflow-hidden rounded xs:mx-2 xs:px-2 ${
      toggle === props ? "animate-aboutOpen max-h-fit" : "max-h-0"
    }`;
  const aboutsAngle = (props) =>
    `my-auto mr-8 transition-all transform ${
      toggle === props ? "rotate-[-180deg]" : ""
    }`;
  const aboutsTitle = `flex flex-row justify-between bg-stone-200 text-red-700 
      font-extrabold cursor-pointer rounded-full pl-2 hover:bg-stone-50 xs:text-[16px] 
      xs:m-2 xs:mx-auto xs:w-[90%] xs:py-2 md:my-4`;
  const aboutsText = "xs:text-[14px] xs:py-1";
  const aboutsSeparator =
    "bg-stone-500 xs:mx-auto xs:w-[70%] xs:h-1 md:w-[85%]";
  const aboutsList = "list-disc xs:text-[13px] xs:ml-3 xs:py-2 md:my-2";

  // Switches the current toggle id to the clicked about card.
  const switchId = (id) => {
    setToggleId((currId) => (currId === id ? 0 : id));
  };

  // Set the current toggle State. on toggleId change, it checks the ID and sets the
  // current toggle acordingly
  useEffect(() => {
    switch (toggleId) {
      case 1:
        setToggle("about me");
        break;
      case 2:
        setToggle("about my degrees");
        break;
      case 3:
        setToggle("curiosities");
        break;
      default:
        setToggle("");
    }
  }, [toggleId]);

  // Set the current collapse State. On hidden change, if its true, it collapses the
  // whole component.
  useEffect(() => {
    if (hidden === true) {
      setCollapse("max-h-0 scale-x-0");
    } else {
      setCollapse("scale-x-100 xs:max-h-[800px] md:max-h-[550px]");
    }
  }, [hidden]);

  // Main component assembly.
  // - Framer-Motion is used for the initial fadeIn animation. Its properties are
  // inported from a helper.
  return (
    <div className={`transition-all transform origin-left ${collapse}`}>
      <article className="flex bg-stone-300 overflow-hidden w-full h-auto xs:flex-col md:flex-row">
        <motion.section
          className="flex flex-col justify-center place-content-start md:w-[25%]"
          initial={fadeInProperties[0]}
          animate={fadeInProperties[1]}
          transition={fadeInProperties[2]}
          exit={fadeInProperties[0]}
        >
          <img
            src="https://via.placeholder.com/130"
            alt=""
            className="rounded-full border-8 border-stone-700 w-[170px] max-w-fit h-[170px] p-3
            xs:mx-auto xs:my-5"
          />
          <h2
            className="text-stone-800 font-bold xs:text-[18px] xs:mx-auto 
              md:text-center md:m-4"
          >
            Hello, my name is Vitor!
          </h2>
        </motion.section>
        <span
          className="bg-gray-600 xs:mx-auto xs:my-4 xs:w-[80%] xs:h-1 md:mx-4 md:my-auto
            md:w-1 md:h-[80%]"
        ></span>
        <section className="flex xs:flex-col md:w-[75%]">
          <motion.div
            className={aboutsTitle}
            onClick={() => switchId(1)}
            initial={fadeInProperties[0]}
            animate={fadeInProperties[1]}
            transition={fadeInProperties[2]}
            exit={fadeInProperties[0]}
          >
            <h3>~ About me.</h3>
            <FontAwesomeIcon
              icon={faAngleUp}
              className={aboutsAngle("about me")}
            />
          </motion.div>
          <div className={`${aboutsContainer("about me")}`}>
            <p className={aboutsText}>
              I'm a web developer from brazil, that is currently working with IT
              Infrastructure.
            </p>
            <p className={aboutsText}>
              I know, they aren't anything alike. but that's because i started
              learning software development for real recently! I mean, i always
              had the background with my automation projects, but now i'm more
              focused than ever on evolving my development skills!
            </p>
          </div>
          <span className={aboutsSeparator}></span>
          <motion.div
            className={aboutsTitle}
            onClick={() => switchId(2)}
            initial={fadeInProperties[0]}
            animate={fadeInProperties[1]}
            transition={fadeInProperties[2]}
            exit={fadeInProperties[0]}
          >
            <h3>~ About my degrees.</h3>
            <FontAwesomeIcon
              icon={faAngleUp}
              className={aboutsAngle("about my degrees")}
            />
          </motion.div>
          <div className={`${aboutsContainer("about my degrees")}`}>
            <p className={aboutsText}>
              I have a bachelor degree in Infrastructure and computer network,
              and one year of computer engineering on the backpack, as well as a
              bunch of trainings and certificates, including:
            </p>
            <ul className={aboutsList}>
              <li>Pentest validation and threat analysis.</li>
              <li>Power Platform administration and development (PL-38400).</li>
              <li>Front-end development with HTML, CSS and JavaScript.</li>
              <li>System and infrastructure automation with python.</li>
            </ul>
            <p className={aboutsText}>
              Not to metion all the self taught skills i collected along the
              way, like this react-tailwind web site for example.
            </p>
          </div>
          <span className={aboutsSeparator}></span>
          <motion.div
            className={aboutsTitle}
            onClick={() => switchId(3)}
            initial={fadeInProperties[0]}
            animate={fadeInProperties[1]}
            transition={fadeInProperties[2]}
            exit={fadeInProperties[0]}
          >
            <h3>~ Curiosities.</h3>
            <FontAwesomeIcon
              icon={faAngleUp}
              className={aboutsAngle("curiosities")}
            />
          </motion.div>
          <div className={`${aboutsContainer("curiosities")}`}>
            <ul className={aboutsList}>
              <li>I learned ReactJS by my self making this very site</li>
              <li>
                I also learned a lot of backend libraries (NodeJS and Python) to
                go with the overall knowledge
              </li>
              <li>
                I'm also a part time room musician (meaning i only play in my
                room)
              </li>
              <li>I began with web dev on the beggining of 2022</li>
            </ul>
          </div>
          <span className={`${aboutsSeparator} mb-4`}></span>
        </section>
      </article>
    </div>
  );
}
