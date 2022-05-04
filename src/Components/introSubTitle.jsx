import React from "react";

export const SubTitle = (subTitle) => {
  return (
    <div className="bg-stone-900 flex flex-row content-center pt-4 w-full mx-auto 
          overflow-hidden">
      <p
        className="text-[15px] text-clip overflow-hidden whitespace-nowrap ml-auto box-content
          caret-transparent text-red-600 bg-stone-900 font-mono font-bold animate-typping
          w-auto"
      >
      {subTitle.subTitle}
      </p>
      <span className="z-0 bg-red-800 mr-auto w-3 h-6 animate-blink"></span>
    </div>
  )
}
