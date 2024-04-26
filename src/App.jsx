import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import PagesCards from "./Components/Pages/PagesCards";
import { ShoppingCartProvider } from "./Components/ShoppingCartContext";
import { NombreCatProvider } from "./Components/NewContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pages" element={<PagesCards />} />
            <Route path="/pages/:selectedCategory" element={<PagesCards />} />
            
          </Routes>

        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="/Register" element={<Register />} />
          <Route path="/LayoutAdmin" element={<LayoutAdmin />}>
            <Route path="Info" element={<Info />} />
            <Route path="Perfil/:id" element={<Perfil />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="roll" element={<Roll />} />
            <Route path="logs" element={<Logs />} />
            <Route path="page" element={<Page />} />
          </Route> */
}
/* <NextUIProvider>
    <div className="md:w-full">
    <NavBar />
    
    <div className="relative h-auto">
    <SliderImg />
    <div className="absolute inset-0 flex w-[100%]">
    <Beginning />
    </div>
    </div>
    </div>
    
    <div className="flex justify-center  my-10 ">
    <div className=" grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-6 w-[90%] ">
    <Categorias />
    </div>
    </div>
    <section className="h-[20vh]">
    <Footer />
    </section>
    </NextUIProvider> */
