import React, { useState } from "react";
import menuT from "/menuToggle.svg";
import logo from "/LOGO_AGRICULTURA.jpg";
import car from "/icon-cart.svg";
import iconMenu from "/icon-menu.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carBuy, setCarBuy] = useState(false);

  const toggleCar = () => {
    setCarBuy(!carBuy);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="flex items-center justify-around bg-red-400 h-[100px] gap-5 ">
      <div
        className="w-[50px] h-auto sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <img src={iconMenu} alt="Logo" />
      </div>

      <div className="flex items-center  bg-green-400 ">
        <img src={car} alt="Logo" className="sm:hidden" />

        <div className="max-sm:w-[125px] sm:w-[170px] md:w-[190px] cursor-pointer ">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className=" relative">
        {menuOpen && (
          <div className='border border-gray-300 rounded-tl-none rounded-lg shadow-md p-2 sm:hidden flex bg-red-500 w-[175px] h-[250px] absolute top-[85px]  max-sm:right-[240px] mx-auto z-10 flex-col place-content-between py-[39px] items-center text-Dark-grayish-blue max-md:text-[22px] after:content-[""] after:absolute after:top-[-26px] after:left-[0px] after:border-[13px] after:border-r-transparent after:border-t-transparent after:border-l-red-500 after:border-b-red-500 '>
            <a href="" className="mb-2">
              Productos
            </a>
            <a href="" className="mb-2">
              Contacto
            </a>
            <a href="" className="text-center">
              Acerca de nosotros
            </a>
          </div>
        )}

        <div className="max-sm:hidden sm:flex sm:w-[400px] sm:justify-around lg:w-[525px] xl:w-[650px] lg:text-[22px] md:text-[19px]">
          <a href="">Productos</a>
          <a href="">Contacto</a>
          <a href="">Acerca de nosotros</a>

          <button className="relative" onClick={toggleCar}>
            <img src={car} alt="" className="w-[22px] h-[20px]" />
            <span className="right-0 absolute top-0 translate-x-4 rounded-full bg-orange-primary px-2 text-xs font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>

      {carBuy && (
        <div className=" rounded-md bg-white shadow-md absolute right-9 top-28 z-40">
          <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
          <hr />

          <p className=" text-center py-8">Your cart is empty</p>

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
    </section>
  );
}
