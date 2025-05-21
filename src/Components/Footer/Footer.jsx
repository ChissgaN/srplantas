import React, { useState } from "react";
import logo from "/logo.webp";

export default function Footer() {
  return (
    <>
      <div className="py-6 px-16 bg-gray-200 w-full font-merriweather ">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className=" sm:text-[17] max-sm:text-[14px] ">
              ©2025 Distribuidora Agricultura Especializada
            </p>
            <p className=" sm:text-[17] max-sm:text-[14px] ">
              Todos los derechos reservados
            </p>
          </div>
          <img src={logo} alt="" className="w-28 " />
        </div>
      </div>
    </>
  );
}
