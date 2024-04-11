import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import searchIcon from "/search.svg";
import categorias from "../scripts/products"; 

export default function Beginning() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = categorias.flatMap((categoria) =>
      Object.values(categoria).flatMap((productos) =>
        productos.filter(
          (producto) =>
            producto.producto && 
            producto.producto.toLowerCase().includes(value.toLowerCase())
        )
      )
    );

    setSearchResults(filteredResults);
  };

  const handleResultClick = (producto) => {
    setInputValue(producto.producto);
    setSearchResults([producto]); 
  };

  return (
    <section className="beginning-container w-full max-sm:w-screen max-md:w-full md:mt-12">
      <div className="my-8 w-full relative px-10 p-5 max-sm:w-screen max-sm:px-5 max-md:w-[80%]">
        <h1 className="text-3xl mb-2 text-white">¡Comienza a sembrar hoy!</h1>
        <div className="flex gap-5">
          <div className="flex items-center w-[55%] sm:w-[79%] max-sm:w-[100%] bg-white px-3 rounded-[10px] transition-[5s] hover:scale-105  duration-200 ease-in-out max-w-[640px]">
            <img src={searchIcon} alt="Search" className="mr-2 p-2" />
            <input
              className="w-[100%] h-full bg-transparent focus:outline-none flex items-center justify-center content-center pt-0 mt-0 pb-1"
              type="text"
              placeholder="¿Qué quieres sembrar hoy?"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <Button
            color="success"
            className="bg-green-100 h-full hover:bg-green-200 transition-[5s] hover:scale-110 duration-300 ease-in-out rounded-[10px] py-[13px] px-6 text-gray-500"
          >
            Buscar
          </Button>
        </div>

        {inputValue && (
          <div className="resultados-container md:max-h-[200px] max-md:h-[200px] lg:max-h-[200px] max-sm:w-[100%] md:w-[95%] lg:w-[72%] xl:w-[59%] max-sm:max-h-[180px] mt-3 overflow-y-auto flex flex-wrap justify-around bg-white p-3 px-8 gap-10 border border-green-600 rounded-lg max-w-[640px]">
            {searchResults.map((producto) => (
              <div key={producto.id} onClick={() => handleResultClick(producto)} className="resultado-item flex-shrink-0 ">
                <img className="w-28 h-28 border border-green-600" src={producto.imagen} alt={producto.producto} />
                <p className="m-0 w-28">{producto.producto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
