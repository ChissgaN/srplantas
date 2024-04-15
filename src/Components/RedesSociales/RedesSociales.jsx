import React from "react";

import facebook from "/footer/facebook.svg";
import whatssap from "/footer/whatssap2.svg";
export const RedesSociales = () => {
  return (
    <>
      <div className=" fixed left-0 top-[35%] z-50">
        <div className="flex items-center ">
          <a
            href="https://www.facebook.com/agriculturaespecializadagt"
            target="_blank"
            className="block"
          >
            <div className=" group relative transition-all bg-[#4460A0] hover:bg-[#4460A0] hover:w-[140px] w-12  h-10 flex items-center justify-center hover:rounded-r-lg">
              <img
                src={facebook}
                className=" relative transition-all  w-6 "
                alt="red social Facebook"
              />
              <span className="text-[0px] group-hover:text-[12px] group-hover:text-white pl-2">
                FACEBOOK
              </span>
            </div>
          </a>
        </div>
        <div className="flex items-center ">
          <a
            href="https://wa.me/+50233332343"
            target="_blank"
            rel="noopener noreferrer"
            className=" block"
          >
            <div className="group relative transition-all bg-[#67C15E]  hover:bg-[#67C15E] hover:w-[140px] w-12  h-10 flex items-center justify-center hover:rounded-r-lg">
              <img
                src={whatssap}
                className=" relative transition-all w-6"
                alt="red social Whatssap"
              />
              <span className="text-[0px] group-hover:text-[12px] group-hover:text-white pl-2">
                WHATSAPP
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
