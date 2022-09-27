import React from 'react';
import NavBar from  './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import  ItemDetailContainer  from "./Components/ItemDetailContainer";
import Carrito from "./Components/Carrito";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = ()=>{

  const titulo = "Los mejores productos para tus mascotas"

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer greeting= {titulo}/>}/>
        <Route path="/categoria/:IdCategoria" element= {<ItemListContainer greeting= {titulo}/>}/>
        <Route path="/productos/:IdProducto" element={ <ItemDetailContainer/> }/>
        <Route path="/carrito" element={ < Carrito /> } />
      </Routes>
    </BrowserRouter> 
    </>
    )
} 

export default App



