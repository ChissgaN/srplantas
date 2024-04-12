import React, { useState } from "react";
import logo from "/public/logo.webp";
import form from "/public/footer/form.png";
import instagram from "/public/footer/instagram.svg";
import facebook from "/public/footer/facebook.svg";
import whatssap from "/public/footer/whatssap.svg";
import arrow from "/public/footer/arrow.svg";
export default function Footer() {
  return (
    <>
      <div className="py-6 px-16 bg-gray-200 w-full">
  

 {/*  <div className="sm:justify-center flex  md:items-center">
    <h1 className="text-2xl font-semibold mb-3 sm:mb-0">
      Comentarios o Preguntas
    </h1>
    <div className="flex">
      <img
        src={arrow}
        alt="arrow"
        className="w-10 filter hover:invert mx-4"
      />
      <a href="https://forms.gle/oVjwmGtGFNPG1Gpp9">
        <button
          type="submit"
          className="transform hover:scale-125 transition duration-300 ease-in-out h-full"
        >
          <img src={form} alt="form" loading="lazy" className="w-10" />
        </button>
      </a>
    </div>
  </div> */}
  {/* <div className="flex gap-4 cursor-pointer mt-4 sm:mt-0 sm:justify-center max-sm:justify-center "> */}
    {/* <img
      src={instagram}
      alt="instagram"
      className="w-10 transform hover:scale-125 transition duration-300 ease-in-out filter hover:invert"
    /> */}
    {/* <img
      src={facebook}
      alt="facebook"
      className="w-10 transform hover:scale-125 transition duration-300 ease-in-out filter hover:invert"
    />
    <img
      src={whatssap}
      alt="whatssap"
      className="w-10 transform hover:scale-125 transition duration-300 ease-in-out filter hover:invert"
    />
  </div> */}



       {/*  <div className="flex justify-around">
        

          <div>
            <ul className="cursor-pointer">
              <h4 className="mb-2">
                <strong>Comprar Productos </strong>
              </h4>

              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Todos
              </li>
              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Frutas
              </li>

              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Productos
              </li>
            </ul>
          </div>

          <div>
            <ul className="cursor-pointer">
              <h4 className="mb-2">
                <strong>Comprar Productos </strong>
              </h4>

              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Todos
              </li>
              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Frutas
              </li>
              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Ipot
              </li>
              <li className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full  hover:text-green-300 ">
                Flores
              </li>
              
            </ul>
          </div>
        </div> */}

        <div className="flex justify-between items-center">
          <p className=" sm:text-[17] max-sm:text-[14px] ">
            ©2024 Distribuidora Agricultura Especializada
          </p>
          <img src={logo} alt="" className="w-28 max-sm:w-28" />
        </div>
      </div>
    </>
  );
}
