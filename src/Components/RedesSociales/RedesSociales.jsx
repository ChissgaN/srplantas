import React from 'react'

import facebook from "../../../public/footer/facebook.svg";
import whatssap from "../../../public/footer/whatssap2.svg";
export const RedesSociales = () => {
  return (
    <>
     <div className="w-full fixed left-0 top-[25%] z-50">
          <div className="flex items-center ">
          <a href="https://www.facebook.com/agriculturaespecializadagt" target="_blank">

            <div className=" group relative transition-all bg-[#4460A0] hover:bg-[#4460A0] hover:w-[140px] w-12  h-10 flex items-center justify-center hover:rounded-r-lg">
              <img
                src={facebook}
                className="block relative transition-all  w-6 "
              />
              <span className="text-[0px] group-hover:text-[12px] group-hover:text-white pl-2">FACEBOOK</span>
            </div>
            </a>
          </div>
          
          <a href="https://wa.me/+50233332343" target="_blank" rel="noopener noreferrer">
  <div className="group relative transition-all bg-[#67C15E] hover:w-[140px] w-12 h-10 flex items-center justify-center hover:rounded-r-lg">
    <img src={whatssap} className="block relative transition-all w-6" />
    <span className="text-[0px] group-hover:text-[12px] group-hover:text-white pl-2">WHATSAPP</span>
  </div>
</a>

        </div>
    </>
  )
}
