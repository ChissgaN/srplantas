import React, { useState } from "react";
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

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [carBuy, setCarBuy] = useState(false);

  const toggleCar = () => {
    setCarBuy(!carBuy);
  };

  return (
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
      {
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
                  0
                </span>
              </div>
            </Button>
          </NavbarItem>
        </NavbarContent>
      }
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
      {carBuy && (
        <div className=" rounded-md bg-white shadow-md absolute right-9 top-28 z-40">
          <h4 className="px-6 py-8 text-lg font-bold">Carrito de Compras</h4>
          <hr />

          <p className=" text-center py-8">Tu carrito esta vacio</p>

          <article className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-4 py-4">
            <div>
              <h6>asdas</h6>
              <p>
                <span>$asdf x a</span>{" "}
                <span className="font-bold">$asdfasd</span>
              </p>
            </div>
          </article>
        </div>
      )}
    </Navbar>
  );
}
