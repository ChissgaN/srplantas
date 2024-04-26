import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductCart, setSelectedProductCart] = useState({
    quantity: 1,
  });

<<<<<<< HEAD
=======
  const [productoNombre, setProductoNombre] = useState("");
  console.log("Valor inicial de productoNombre:", productoNombre);
>>>>>>> 978124eaabbeb961c983f5e55454b157a7376d5e

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        selectedProduct,
        setSelectedProduct,
        selectedProductCart,
        setSelectedProductCart,

      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
