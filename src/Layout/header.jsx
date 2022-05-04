import React, { useState } from "react";

// Main header for all the pages.
export function Header() {
  // State for toggling the drop down on and off
  let [dropDown, setDropDown] = useState("initial");

  // Navbar styles. mainNavStyle contains the common styles between mobile and desktop,
  // Dropdown contains the mobile menu toggle model.
  // Check tailwind.config.js for details on the animate-open/animate-close classes
  const mainNavStyle = `z-10 bg-slate-200 xs:shrink-0 xs:w-full xs:absolute xs:top-20 
    xs:left-0 xs:overflow-hidden md:ml-auto md:w-auto md:static md:pr-2 md:block md:h-auto`;
  const dropDownOpen = `xs:animate-open ${mainNavStyle}`;
  const dropDownClosed = `xs:animate-close xs:h-0 ${mainNavStyle}`;

  // Make the button rotate 180 degrees when clicked
  const mainButtonStyle = `border-slate-600 xs:border-4 xs:rounded-full md:m-4 
    md:rounded-none md:border-0`;
  const buttonOpen = `transition ease-in-out duration-1000 rotate-180 ${mainButtonStyle}`;
  const buttonClosed = `transition ease-in-out duration-1000 rotate-0 ${mainButtonStyle}`;

  // Common style between the list itens.
  const listStyle =
    "mr-3 text-lg xs:mt-5 md:mt-0 :hover:text-slate-700 md:hover:scale-110";

  // Allow the image to toggle the dropdown on screens bellow 767 pixels
  const handleDropDown = (e) => {
    e.preventDefault();
    if (window.innerWidth < 767) {
      if (dropDown === "initial") {
        setDropDown((dropDown = true));
      } else {
        setDropDown((prevDropDown) => !prevDropDown);
      }
    }
  };

  // Render the main Header
  return (
    <header
      className="z-10 bg-slate-200 sticky top-0 h-20 flex flex-row flex-wrap items-center 
        xs:justify-between xs:p-4 md:p-0"
    >
      <div className="md:rounded-full">
        <img
          src="https://via.placeholder.com/40"
          alt=""
          className={
            dropDown === "initial"
              ? mainButtonStyle
              : dropDown
              ? buttonOpen
              : buttonClosed
          }
          onClick={handleDropDown}
        />
      </div>
      <h1 className="box-content font-bold xs:text-base md:text-lg">
        My WebSite
      </h1>
      <nav
        className={
          dropDown === "initial"
            ? `xs:h-0 ${mainNavStyle}`
            : dropDown
            ? dropDownOpen
            : dropDownClosed
        }
      >
        <ul className="md:inline-flex md:justify-end xs:pl-3 xs:py-3">
          <li className={listStyle}>
            <a href="/">Home</a>
          </li>
          <li className={listStyle}>
            <a href="/works">Works</a>
          </li>
          <li className={listStyle}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
