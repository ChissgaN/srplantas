import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.webp";
import logoBlanco from "/logoBlanco.jpg";
import car from "/icon-cart.svg";
import trash from "/trash.svg";

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

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShoppingCartContext);
  const [carBuy, setCarBuy] = useState(false);
  const [productQuantities, setProductQuantities] = useState({});
  const cartRef = useRef(null);

  const toggleCar = () => {
    setCarBuy(!carBuy);
  };

  useEffect(() => {
    const quantities = {};
    cartItems.forEach((item) => {
      quantities[item.id] = item.quantity;
    });
    setProductQuantities(quantities);
  }, [cartItems]);

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

  const decreaseQuantity = (productId) => {
    const currentQuantity = productQuantities[productId] || 1;
    const newQuantity = Math.max(currentQuantity - 1, 1);
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const totalCarrito = cartItems.reduce((total, item) => {
    return total + item.precio * (productQuantities[item.id] || 1);
  }, 0);

  const generarPDF = () => {
    const doc = new jsPDF();

    // Definir tamaño y tipo de letra para el texto
    const fontSize = 15; // Tamaño de letra
    const fontType = "times"; // Tipo de letra ("times", "helvetica", "courier")
    doc.setFontSize(fontSize); // Aplicar tamaño de letra
    doc.setFont(fontType); // Aplicar tipo de letra

    // Agregar imagen
    const imgData = logoBlanco; // Reemplaza con la ruta de tu imagen
    doc.addImage(imgData, "JPEG", 10, 10, 40, 40); // Ajusta las coordenadas y dimensiones según lo necesario

    // Agregar texto "COTIZACION"
    doc.text("COTIZACION", 130, 30); // Ajusta las coordenadas según lo necesario

    doc.text("Fecha de Emisión: " + formatDate(new Date()), 10, 60); // Agregar fecha actual

    // Calcular fecha válida hasta 10 días después
    const fechaActual = new Date();
    const fechaValidaHasta = new Date(fechaActual);
    fechaValidaHasta.setDate(fechaValidaHasta.getDate() + 10);
    doc.text("Valido hasta: " + formatDate(fechaValidaHasta), 120, 60);

    doc.text("FACTURA DE LA COMPRA", 10, 70);

    const columns = [
      "ID",
      "Producto",
      "Precio unitario",
      "Cantidad",
      "Precio total",
    ];
    const data = cartItems.map((item, index) => {
      const cantidad = productQuantities[item.id] || 1;
      const precioTotal = item.precio * cantidad;

      return [
        index + 1,
        item.producto,
        `Q${item.precio}`,
        cantidad,
        `Q${precioTotal}`,
      ];
    });

    autoTable(doc, {
      head: [columns],
      body: data,
      startY: 80,
      theme: "grid",
    });

    doc.text(
      `Total a Pagar: Q${totalCarrito}`,
      140,
      doc.lastAutoTable.finalY + 10
    );

    doc.save("Agricultura Especializada.pdf");

    // Compartir via WhatsApp
    const url = doc.output("bloburl");
    const message = `Hola, te envío la orden de tu compra. Haz clic en el siguiente enlace para descargarla: ${url}`;
    const phoneNumber = "+50233332343";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    const file = new File([doc.output("blob")], "Agricultura Especializada.pdf", { type: "application/pdf" });
    const formData = new FormData();
    formData.append("file", file);
    fetch("https://api.whatsapp.com/send?phone=50233332343&text=Hola%20te%20envio%20la%20orden%20de%20tu%20compra", {
      method: "POST",
      body: formData,
    });

    // Función para formatear la fecha como "DD/MM/YYYY"
    function formatDate(date) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  };

  return (
    <div>
      {carBuy && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleCar}
        ></div>
      )}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="fixed h-[80px]   z-40 w-full"
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
        <NavbarContent justify="end" className="max-sm:mt-3 ">
          <NavbarItem>
            <Button
              variant="flat"
              onClick={toggleCar}
              className="relative flex items-center bg-[#67d4768e] pt-1"
            >
              <div className="flex items-center ">
                <img src={car} alt="LogoC" className="w-[25px] h-[23px] " />
                <span className=" absolute right-2 top-0 rounded-xl px-[8px] text-gray-600 ml-1 bg-gray-100 text-[12px]">
                  {cartItems.length}
                </span>
              </div>
            </Button>
          </NavbarItem>
          {carBuy && (
            <div
              ref={cartRef}
              className="rounded-md bg-white shadow-md absolute right-9 top-[85px] z-50 p-4 w-[90%] mx-auto"
            >
              <div className="flex items-center justify-between ">
                <h4 className="px-6 py-2 text-lg font-bold">
                  Carrito de Compras.
                </h4>
                <p className="pr-14">
                  Total: Q <strong>{totalCarrito}</strong>
                </p>
              </div>
              <hr />
              <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6 px-4 py-4 overflow-y-auto max-h-[400px] resultados-container">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-200  mx-auto rounded-2xl w-[200px] h-[290px] sm:w-[190px]  max-sm:w-[195px] p-3"
                  >
                    <h6 className="text-yellow-500 font-semibold w-full truncate text-center mb-2">
                      {item.producto}
                    </h6>
                    <img
                      src={item.imagen}
                      alt={item.producto}
                      className="size-28 mx-auto rounded-xl"
                    />
                    <div className="text-center">
                      <span className="font-bold text-center">Cantidad</span>
                      <div className="flex flex-row items-center justify-center">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 rounded-md bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={ productQuantities[item.id] ? productQuantities[item.id] : ""}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setProductQuantities((prevQuantities) => ({
                              ...prevQuantities,
                              [item.id]: value,
                            }));
                          }}
                          className="w-10 text-center"
                        />
                        <button
                          onClick={() => {
                            setProductQuantities((prevQuantities) => ({
                              ...prevQuantities,
                              [item.id]: (prevQuantities[item.id] || 1) + 1,
                            }));
                          }}
                          className="px-2 py-1 rounded-md bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold">
                        Precio: Q
                        <span className="font-bold">
                          {item.precio * (productQuantities[item.id] || 1)}
                        </span>
                      </span>
                    </div>
                    <div className="w-full flex justify-center mt-2 ">
                      <button
                        className="bg-red-500 w-8 hover:bg-red-600 rounded p-1 transition duration-100 ease-in-out  hover:scale-[1.1]"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <img src={trash} alt="icon de basurero" className="" />
                      </button>
                    </div>
                  </div>
                ))}

                <div></div>
              </div>
              <div className="flex justify-end ">
                <button
                  className={`bg-blue-400 hover:bg-blue-600 text-white py-2 px-6 rounded-[10px] mt-4 hover:scale-[1.05]  transition duration-300 ease-in-out ${
                    cartItems.length === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={generarPDF}
                  disabled={cartItems.length === 0}
                >
                  CREAR PDF
                </button>
              </div>
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
