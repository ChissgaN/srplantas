import React from "react";
import "./Botones.css";
import { Link } from "react-router-dom";

export const Cards = ({ imgProyect, tituloCategoria }) => {

 

  return (
    <Link to={`/pages/${tituloCategoria.toLowerCase()}`} className="cursor-pointer">
      <div className=" w-full lg:h-[400px] md:h-[300px] sm:h-[400px] max-sm:h-[300px] relative my-4 rounded-[10px] overflow-hidden contenedor flex justify-center items-center ">
        <img
          src={imgProyect}
          alt="imgCategorias"
          loading="lazy"
          className="w-full h-full absolute transition duration-500 ease-in-out transform hover:scale-[1.2]"
        />
        <button className="absolute bg-green-300 max-md:text-lg max-md:w-[150px] max-md:h-[50px] md:w-[150px] md:h-[50px] lg:w-[200px] lg:h-[70px] rounded-[10px] text-white boton lg:text-xl ">
          {tituloCategoria}
        </button>
      </div>
    </Link>
  );
};
