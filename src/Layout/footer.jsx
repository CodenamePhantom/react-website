import React from "react";

import linkedinIcon from "../Assets/Images/linkedin-icon.webp";
import gmailIcon from "../Assets/Images/gmail-icon.webp";
import mainIcon from "../Assets/Images/main-logo-65.webp"

export function Footer() {
  return (
    <section className="flex justify-between bg-stone-50 h-auto py-4 xs:flex-col md:flex-row">
      <div className="my-auto ml-4 xs:hidden md:block">
        <h4 className="text-[15px]">Vitor Augusto Ferreira Falchi</h4>
        <p className="text-[13px]">All trademarks apply</p>
      </div>
      <div className="flex flex-col justify-center text-center mr-4">
        <img
          src={mainIcon}
          alt=""
            className="mx-auto mb-2 w-[65px] max-w-fit h-[65px]"
        />
        <p className="text-[13px]">
          The greatest developer of <strong>all times</strong>!
        </p>
        <p className="text-[13px]">contact me @ my social media!</p>
        <div className="flex flex-row mt-2">
          <a
            href="https://www.linkedin.com/in/vitor-augusto-ferreira-falchi-81470214a"
            target="_blank"
            rel="noreferrer"
            className="ml-auto"
          >
            <img
              src={linkedinIcon}
              alt="linkedin Logo"
              className="mr-2 w-8 h-8"
            />
          </a>
            <a href="/" className="mr-auto my-auto">
            <img src={gmailIcon} alt="Gmail Logo" className="ml-2 w-10 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
