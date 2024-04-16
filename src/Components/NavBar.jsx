import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.webp";
import car from "/icon-cart.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { ShoppingCartContext } from "./ShoppingCartContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShoppingCartContext);
  const [carBuy, setCarBuy] = useState(false);

  const cartRef = useRef(null);

  const toggleCar = () => {
    setCarBuy(!carBuy);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCarBuy(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].cantidad++;
    addToCart(updatedCartItems[index]);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].cantidad > 1) {
      updatedCartItems[index].cantidad--;
      addToCart(updatedCartItems[index]);
    }
  };

  return (
    <div className="relative">
      {carBuy && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
      )}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="fixed h-[80px]   z-50 w-full"
      >
        <NavbarContent className=" ">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden mt-5"
          />
          <NavbarBrand>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-[120px] h-[55px]" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10  " justify="center">
          <NavbarItem className="hover:scale-110 hover:bg-[#67d4768e]  transition duration-300 ease-in-out hover:rounded-lg px-2 py-1 hover:font-semibold">
            <Link to="/pages/aromaticas">Productos</Link>
          </NavbarItem>

          <NavbarItem className="hover:scale-110 hover:bg-[#67d4768e]  transition duration-300 ease-in-out hover:rounded-lg px-2 py-1 hover:font-semibold">
            <Link href="#" aria-current="page">
              Contacto
            </Link>
          </NavbarItem>
          <NavbarItem className="hover:scale-110 hover:bg-[#67d4768e]  transition duration-300 ease-in-out hover:rounded-lg px-2 py-1 hover:font-semibold">
            <Link color="foreground" href="#">
              Acerca de nosotros
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="max-sm:mt-3">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onClick={toggleCar}
              className="relative flex items-center"
            >
              <div className="flex items-center ">
                <img src={car} alt="LogoC" className="w-[25px] h-[23px]" />
                <span className="rounded-xl text-xs px-2 py-1 text-black ml-1">
                  {cartItems.length}
                </span>
              </div>
            </Button>
          </NavbarItem>
          {carBuy && (
            <div
              ref={cartRef}
              className="rounded-md bg-white shadow-md absolute right-9 top-28 z-50 p-4"
            >
              <h4 className="px-6 py-2 text-lg font-bold">
                Carrito de Compras
              </h4>
              <hr />
              {cartItems.length === 0 ? (
                <p className="text-center py-8">Tu carrito está vacío</p>
              ) : (
                <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-4 py-4">
                  {cartItems.map((item, index) => (
                    <div key={index}>
                      <h6>{item.nombre}</h6>
                      <img
                        src={item.imagen}
                        alt={item.product}
                        className="w-16 h-16"
                      />
                      <p>
                        <span>Cantidad: </span>{" "}
                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="px-2 py-1 rounded-md bg-gray-200"
                        >
                          -
                        </button>{" "}
                        {item.cantidad}{" "}
                        <button
                          onClick={() => increaseQuantity(index)}
                          className="px-2 py-1 rounded-md bg-gray-200"
                        >
                          +
                        </button>{" "}
                        <span className="font-bold">Precio: {item.precio}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </NavbarContent>
        <NavbarMenu className="">
          <NavbarMenuItem className="pt-5 flex flex-col">
            <Link
              to="/pages/aromaticas"
              className="w-full py-3 hover:scale-105  hover:bg-[#67d4768e] hover:rounded-[10px] transition duration-300 ease-in-out px-2 hover:font-semibold "
              href="#"
              size="lg"
            >
              Productos
            </Link>

            <Link
              to="/pages"
              className="w-full py-3 hover:scale-105 hover:bg-[#67d4768e]  transition duration-300 ease-in-out px-2 hover:rounded-[10px] hover:font-semibold"
              href="#"
              size="lg"
            >
              Contactos
            </Link>
            <Link
              to="/pages"
              className="w-full py-3 hover:scale-105 hover:bg-[#67d4768e]  transition duration-300 ease-in-out px-2 hover:rounded-[10px] hover:font-semibold"
              href="#"
              size="lg"
            >
              Acerca de nosotros
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
