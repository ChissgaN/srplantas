import React,{useState} from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../NavBar";
import SliderImg from "../Slider";

import Beginning from "../beginning";
import Footer from "../Footer/Footer";
import { Categorias } from "../CatalogoSemillas";
import { Informacion } from "../InformacionSiembra/Informacion";

import { RedesSociales } from "../RedesSociales/RedesSociales";
import { AboutUs } from "../AboutUs";

export default function Main() {

  const [robotExpanded, setRobotExpanded] = useState(false);


  return (
    <NextUIProvider>
      <NavBar 
      robotExpanded={robotExpanded}
      setRobotExpanded={setRobotExpanded}
      />
      <div className=" w-full">
        <div className="relative h-auto w-full ">
          <SliderImg />
          <div className="absolute inset-0 flex w-full">
            <Beginning />
          </div>
        </div>
      </div>
      <div className="my-10">
      
        {/* <AboutUs/> */}
        {robotExpanded && (
          <section id="about" className="">
            <AboutUs />
          </section>
        )}
        
        <h1 className=" text-[30px] w-[90%] mx-auto">
          <strong>Categorías:</strong>
        </h1>

        <RedesSociales className=""/>
        <div className="flex justify-center   ">
          <div className=" grid  lg:gap-10 md:grid-cols-2 md:gap-6 w-[90%] ">
            <Categorias />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto ">
        <h1 className=" text-[30px] max-sm:text-md ">
          <strong>Proceso de Siembra y Recolección</strong>
        </h1>
        <div className="flex justify-center pt-6 pb-20 w-full ">
          <Informacion />
        </div>
      </div>

      <Footer />
    </NextUIProvider>
  );
}
