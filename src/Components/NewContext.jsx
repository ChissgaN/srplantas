import React, { createContext, useState } from "react";

// Creamos el contexto
const NombreCatContext = createContext();

// Creamos el proveedor del contexto
const NombreCatProvider = ({ children }) => {
  // Definimos el estado para almacenar el nombre de la categoría
  const [nombreCat, setNombreCat] = useState("");

  return (
    // Proporcionamos el valor del estado y la función para actualizarlo a través del contexto
    <NombreCatContext.Provider value={{ nombreCat, setNombreCat }}>
      {children}
    </NombreCatContext.Provider>
  );
};

export { NombreCatContext, NombreCatProvider };
