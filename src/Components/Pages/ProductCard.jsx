import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import albaca from "../../assets/categorias/aromaticas/ALBAHACA16AGOSTO2023.webp";
const ProductCard = ({ product, openModal }) => {
  const handleClick = () => {
    openModal(product);
  };
  return (
    <div
      className="bg-white rounded-xl px-2  hover:scale-105  duration-500 ease-in-out mb-3 max-w-[240px] max-h-[434px]"
      onClick={handleClick}
    >
      <img
        src={product.imagen}
        alt={product.producto}
        className="w-full h-fit object-cover rounded-xl max-w-[230px] max-h-[306px] "
      />

      <h3 className="text-lg font-semibold mt-2">{product.producto}</h3>

      <p className="text-gray-600">${product.precio}</p>

      <Button
        color="warning"
        variant="ghost"
        className="flex content-center mx-auto hover:scale-105  duration-500 ease-in-out mb-3"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ProductCard;
