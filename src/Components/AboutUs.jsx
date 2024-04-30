import React from "react";

export const AboutUs = () => {
  return (
    <>
      <section className="w-[70%] flex mb-10" >
        <div className="w-[75%] border-[2px] rounded-[10px] px-6 mx-4 transition duration-100 ease-in-out  hover:scale-[1.05]">
          <h1 className="text-[35px] text-green-700 animate-pulse flex justify-center ">
            <strong>NOSOTROS </strong>
          </h1>
          <p className="py-4 text-center">
            Somos una empresa 100% Guatemalteca, fundada en 1999, nos dedicamos
            a ofrecer a nuestros clientes insumos para la agricultura con
            énfasis en la agricultura familiar y ornamental; especialmente la
            venta de semillas de diferentes cultivos, plantas ornamentales,
            césped y plantas aromáticas; así como otros insumos relacionados
            como ser sustratos, cubresuelos, contenedores para tal sentido, etc.
            Somos una empresa que se preocupa por satisfacer las necesidades
            específicas de nuestros clientes. Contamos con asistencia técnica a
            los clientes que nos contactan para tal efecto.
          </p>
        </div>
        <div className=" flex flex-col justify-around mx-4">
          <div className="border-[2px] rounded-[10px] px-6 transition duration-100 ease-in-out  hover:scale-[1.05]">
          <h2 className="text-[30px] text-green-700 animate-pulse  flex justify-center">
            <strong>MISIÓN</strong>
          </h2>
          <p className="py-4 text-center">
            Ser una empresa guatemalteca, vanguardista, dedicada a la
            comercialización de semillas e insumos para la agricultura familiar
            y ornamental.
          </p>
          </div>
          <div className="border-[2px] rounded-[10px] px-6 transition duration-100 ease-in-out  hover:scale-[1.05]">

          <h2 className="text-[30px] text-green-700 animate-pulse flex justify-center">
            <strong>VISIÓN</strong>
          </h2>
          <p className="py-4 text-center">
            Ser una empresa que satisfaga las mayores necesidades de las
            personas que practiquen la agricultura familiar y ornamental.
          </p>
          </div>
        </div>
      </section>
    </>
  );
};