import React from "react";

import linkedinIcon from "../Assets/Images/linkedin-icon.png";
import gmailIcon from "../Assets/Images/gmail-icon.png";

export function Footer() {
  return (
    <section className="flex flex-row justify-between bg-stone-50 xs:h-44 md:h-44">
      <div className="my-auto ml-4">
        <h4 className="text-[15px]">Vitor Augusto Ferreira Falchi</h4>
        <p className="text-[13px]">All trademarks apply</p>
      </div>
      <div className="flex flex-col mr-4 justify-center text-center">
        <img
          src="https://via.placeholder.com/65"
          alt=""
          className="max-w-fit mx-auto mb-2"
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
              className="w-8 h-8 mr-2"
            />
          </a>
          <a href="/" className="mr-auto">
            <img src={gmailIcon} alt="Gmail Logo" className="w-10 h-8 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
