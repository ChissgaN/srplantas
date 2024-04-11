import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../NavBar";
import SliderImg from "../Slider";

import Beginning from "../beginning";
import Footer from "../Footer/Footer";
import { Categorias } from "../CatalogoSemillas";
import { Informacion } from "../InformacionSiembra/Informacion";

export default function Main() {
  return (
    <NextUIProvider>
      <div className="md:w-full">
        <NavBar />

        <div className="relative h-auto">
          <SliderImg />
          <div className="absolute inset-0 flex w-[100%]">
            <Beginning />
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className=" text-[30px] px-20">
          <strong>Categorías:</strong>
        </h1>
        <div className="flex justify-center   ">
          <div className=" grid  lg:gap-10 md:grid-cols-2 md:gap-6 w-[90%] ">
            <Categorias />
          </div>
        </div>
      </div>

      <div>
        <h1 className=" text-[30px] px-20">
          <strong>Proceso de Siembra y Recolección</strong>
        </h1>
        <div className="flex justify-center pt-6 pb-20">
          <Informacion />
        </div>
      </div>

      <section className="h-[20vh]">
        <Footer />
      </section>
    </NextUIProvider>
  );
}
