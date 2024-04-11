import React from "react";
import { Index } from "./Index.jsx";
import preparaSuelo from "/public/procesoSiembra/preparar.webp";
import semillas from "/public/procesoSiembra/semillas.webp";
import siembra from "/public/procesoSiembra/siembra.webp";
import fertilizacion from "/public/procesoSiembra/fertilizacion.webp";
import cosecha from "/public/procesoSiembra/cosecha.webp";
import rotacion from "/public/procesoSiembra/rotacion.webp";
import fumigar from "/public/procesoSiembra/fumigarr.webp";

export const Informacion = () => {
  return (
    <>

      <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-6 w-[80%]">
        <Index
          procesoImg={preparaSuelo}
          tituloProceso="Preparación del suelo:"
          descripcionProceso="Asegúrate de que el suelo esté bien drenado y suelto esto permitirá un buen crecimiento de las raíces. No olvides elimar las malas hierbas y trabaja el suelo para airearlo."
        />

        <Index
          procesoImg={semillas}
          tituloProceso="Elección de semillas:"
          descripcionProceso="
    Aquí encontrarás semillas de buena calidad y adecuadas para tu clima y tipo de suelo, no olvides leer las instrucciones en el paquete de semillas para conocer la profundidad y la distancia de siembra recomendadas."
        />
        <Index
          procesoImg={siembra}
          tituloProceso="Siembra:"
          descripcionProceso="Siembra las semillas a la profundidad y distancia adecuadas según las instrucciones del paquete y mantén el suelo húmedo pero no saturado durante el proceso de germinación."
        />

        <Index
          procesoImg={fumigar}
          tituloProceso="Precausiones y Cuidados:"
          descripcionProceso="Después de la germinación, asegúrate de proporcionar suficiente agua y luz solar a las plántulas.
    * Controla las malas hierbas y evita el exceso de competencia por nutrientes y agua 
    * Inspecciona regularmente tus plantas en busca de signos de plagas y enfermedades.
    * Utiliza métodos de control integrado de plagas, como la rotación de cultivos, el uso de insecticidas naturales y el manejo cultural."
        />

        <Index
          procesoImg={fertilizacion}
          tituloProceso="Fertilización:"
          descripcionProceso=" 
    Aplícale fertilizante según las necesidades específicas de tus plantas. Puedes optar por fertilizantes orgánicos o químicos, dependiendo de tus preferencias y prácticas de cultivo."
        />
        <Index
          procesoImg={cosecha}
          tituloProceso="Cosecha:"
          descripcionProceso=" 
    Cosecha tus cultivos en el momento adecuado, cuando estén maduros pero aún tiernos.
    Utiliza herramientas limpias y afiladas para evitar dañar las plantas durante la cosecha."
        />
        {/* <Index
          procesoImg={cebolla}
          tituloProceso="Almacenamiento:"
          descripcionProceso=" 
    Almacena tus cosechas en condiciones adecuadas para prolongar su frescura y calidad.
    Para algunos cultivos, como las verduras de hoja verde, es recomendable refrigerarlas inmediatamente después de la cosecha."
        /> */}
        <Index
          procesoImg={rotacion}
          tituloProceso=" Rotación de cultivos:"
          descripcionProceso=" 
    Practica la rotación de cultivos para evitar la acumulación de plagas y enfermedades en el suelo y mejorar la salud general del suelo."
        />
      </div>
    </>
  );
};

