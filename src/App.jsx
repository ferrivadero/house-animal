import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Carrito from "./Components/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./context/CartContext";

const App = () => {
  const titulo = "Los mejores productos para tus mascotas";

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <NavBar />
          <Routes>
            <Route
              path="/house-animal/"
              element={<ItemListContainer greeting={titulo} />}
            />
            <Route
              path="/house-animal/categoria/:IdCategoria"
              element={<ItemListContainer greeting={titulo} />}
            />
            <Route
              path="/house-animal/productos/:IdProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/house-animal/carrito" element={<Carrito />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
