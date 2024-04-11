import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Verduras from "../../assets/agricultura/verduras1.jpg";
import ProductCard from "./ProductCard";
import categorias from "../../scripts/products";
import categoria from "../../../public/categorias.json";
import albaca from "../../assets/categorias/aromaticas/ALBAHACA16AGOSTO2023.webp";
import { Button, ButtonGroup } from "@nextui-org/react";
import ScrollToTopButton from "../ScrollToTop";

const PagesCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("aromaticas");
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [loadedCards, setLoadedCards] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handleCategoryClick = (categoria) => {
    if (categoria === "Mostrar Todo") {
      setShowAllProducts(true);
    } else {
      setSelectedCategory(categoria);
      console.log(setSelectedCategory(categoria));
      setShowAllProducts(false);
    }
    setLoadedCards(6);
    console.log("Categoría seleccionada:", categoria);
  };

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      ) {
        return;
      }
      setLoading(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (!loading) return;

    setTimeout(() => {
      setLoadedCards((prev) => prev + 6);
      setLoading(false);
    }, 500);
  }, [loading]);

  let sortedProducts = [];

  switch (selectedSortOption) {
    case "priceAsc":
      sortedProducts = categorias[0][selectedCategory]
        .slice()
        .sort((a, b) => a.precio - b.precio);
      break;
    case "priceDesc":
      sortedProducts = categorias[0][selectedCategory]
        .slice()
        .sort((a, b) => b.precio - a.precio);
      break;
    case "nameAsc":
      sortedProducts = categorias[0][selectedCategory]
        .slice()
        .sort((a, b) => a.producto.localeCompare(b.producto));
      break;
    case "nameDesc":
      sortedProducts = categorias[0][selectedCategory]
        .slice()
        .sort((a, b) => b.producto.localeCompare(a.producto));
      break;
    default:
      sortedProducts = categorias[0][selectedCategory];
      break;
  }

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleModalClick = (event) => {
    if (event.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

  return (
    <>
      <NavBar />
      <section className="mt-28 w-[90%] mx-auto relative flex justify-center items-center">
        <img
          className="bg-slate-700 rounded-2xl md:h-[420px] md:w-full"
          src={Verduras}
          alt=""
        />
        <div className="absolute text-white font-extrabold text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] ">
          {selectedCategory.toUpperCase()}
        </div>
      </section>
      <section className="container mx-auto p-4 w-[85%]">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold my-10">
            {selectedCategory.toUpperCase()}
          </h1>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder={`Buscar ${selectedCategory}...`}
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-fit px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <select
              className="h-[30%] px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={selectedSortOption}
              onChange={handleSortChange}
            >
              <option value="default" disabled>
                Ordenar por...
              </option>
              <option value="priceAsc">Precio: Menor a mayor</option>
              <option value="priceDesc">Precio: Mayor a menor</option>
              <option value="nameAsc">Nombre: Ascendente</option>
              <option value="nameDesc">Nombre: Descendente</option>
              <option value="all">Mostrar todos</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 w-[85%] flex">
        <div className="container w-[20%] bg-white h-screen py-4 sticky top-[130px]">
          <h2 className="text-xl font-semibold mb-4">Categorías</h2>
          <ul className="space-y-2">
            {Object.keys(categorias[0]).map((nombreCategoria, index) => (
              <li
                key={index}
                className="flex items-center hover:bg-gray-200 hover:scale-105 rounded-md py-2 transition duration-300 ease-in-out pl-1 cursor-pointer focus:bg-gray-200"
                onClick={() => handleCategoryClick(nombreCategoria)}
              >
                <img
                  src={categoria[index].imgProyect}
                  alt={categoria[index].tituloCategoria}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{categoria[index].tituloCategoria}</span>
              </li>
            ))}
            <li
              className="flex items-center hover:bg-gray-200 hover:scale-105 rounded-md py-2 transition duration-300 ease-in-out pl-1 cursor-pointer"
              onClick={() => handleCategoryClick("Mostrar Todo")}
            >
              <span>Mostrar Todo</span>
            </li>
          </ul>
        </div>
        {!showAllProducts && (
          <div className="w-full py-4 ml-[10%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 w-fit">
              {sortedProducts
                .filter(
                  (product, index) =>
                    index < loadedCards &&
                    (searchTerm === "" ||
                      product.producto
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()))
                )
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    openModal={openModal}
                  />
                ))}
            </div>
            {loading && (
              <div className="flex justify-center">
                <Button
                  isLoading
                  className="bg-green-600 text-white"
                  color=""
                  spinner={
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  Loading
                </Button>
              </div>
            )}
          </div>
        )}
        {showAllProducts && (
          <div className="w-full py-4 ml-[10%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 w-fit">
              {Object.keys(categorias[0]).flatMap((category) =>
                categorias[0][category]
                  .filter((product, index) => index < loadedCards)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      openModal={openModal}
                    />
                  ))
              )}
            </div>
            {loading && (
              <div className="flex justify-center">
                <Button
                  isLoading
                  className="bg-green-600 text-white"
                  color=""
                  spinner={
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  Loading
                </Button>
              </div>
            )}
          </div>
        )}
      </section>
      {selectedProduct && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center modal-background"
          onClick={handleModalClick}
        >
          <div className="bg-white py-8 px-6 rounded-lg w-[50%] h-[70%] flex gap-6 max-sm:w-[95%] max-sm:px-3 sm:w-[80%] sm:h-[70%] ">
            <div className="h-[100%] w-[50%] max-sm:w-[224px]  max-sm:h-[304px] sm:w-[60%]  sm:h-[80%] md:w-[276px] max-md:h-[390px] max-md:w-[276px] md:h-[390px] ">
              <img
                src={selectedProduct.imagen}
                alt={selectedProduct.nombre}
                className="w-full h-full  object-cover rounded-md mb-4  max-sm:w-[224px]  max-sm:h-[304px] max-md:h-[390px] max-md:w-[276px]"
              />
              <div className="flex">
                <button className="w-[80%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto sm:hidden">
                  Agregar al carrito
                </button>
              </div>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col max-sm:w-[40%] max-sm:h-full lg:w-[60%]">
              <div className="py-4 flex flex-col justify-between h-full w-full  ">
                <h2 className="text-xl font-semibold mb-2 ">
                  {selectedProduct.producto}
                </h2>
                <p className="text-gray-600 ">
                  Precio: ${selectedProduct.precio}
                </p>
                <p className="text-gray-600  w-full h-full overflow-hidden text-pretty mb-4">
                  Descripción: {selectedProduct.descripcion}
                </p>

                <div className="flex">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto max-sm:hidden">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToTopButton />
    </>
  );
};

export default PagesCards;
