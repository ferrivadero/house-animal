import React from "react";
import NavBar from "./Components/navBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Carrito from "./Components/Carrito/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./context/CartContext";
import Footer from "./footer/footer"

const App = () => {
  const titulo = "Los mejores productos para tus mascotas";

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <NavBar/>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={titulo} />}
            />
            <Route
              path="/categoria/:IdCategoria"
              element={<ItemListContainer greeting={titulo} />}
            />
            <Route
              path="/productos/:IdProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;
