import React from "react";

import abstractBackground from "../Assets/Videos/abstract-background";

const formLabel = "text-stone-900 text-[19px] font-bold my-4 xs:ml-4 md:ml-0";
const emailFields =
  "shadow-lg h-[35px] p-2 opacity-100 xs:w-[90%] xs:mx-auto md:w-[500px] md:mx-0";

export function ContactForm() {
  return (
    <>
      <section className="bg-stone-300 flex h-[130px]">
        <h1 className="text-stone-900 text-[22px] font-extrabold xs:my-auto xs:mx-3 md:m-auto">
          Either to thank me, to compliment my site or to require my skills,
          send me an email!
        </h1>
      </section>
      <section className="bg-black flex relative overflow-hidden h-auto">
        <video
          autoPlay
          muted
          loop
          className="absolute object-cover left-0 z-0 w-full xs:h-fit blur-[2px]"
        >
          <source src={abstractBackground} type="video/mp4" />
        </video>
        <form
          className="flex flex-col bg-stone-100 border-4 border-stone-200 md:bg-opacity-75 
            xs:w-full xs:rounded-none md:w-auto md:m-10 py-10 md:pl-4 md:pr-20 xs:bg-opacity-100 
            md:rounded-md relative z-[9]"
        >
          <label className={`${formLabel} mt-0`} for="user-mail">
            Your Email
          </label>
          <input
            className={emailFields}
            type="email"
            id="user-mail"
            name="user-mail"
            placeholder="example@example.com"
          ></input>
          <label className={formLabel} for="mail-title">
            Email Title
          </label>
          <input
            className={emailFields}
            type="text"
            id="mail-title"
            name="mail-title"
            placeholder="Name it something nice. Make it call attention!"
          ></input>
          <label className={formLabel} for="mail-content">
            Email Content
          </label>
          <textarea
            className="shadow-lg h-[300px] p-2 xs:w-[90%] xs:mx-auto md:w-auto md:mx-0"
            id="mail-content"
            name="mail-content"
            placeholder="Talk to me!"
          ></textarea>
          <div className="flex flex-row justify-around w-full pt-8">
            <button>Submit</button>
            <button>Clear</button>
          </div>
        </form>
      </section>
    </>
  );
}
