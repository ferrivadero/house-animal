import React from 'react';
import NavBar from  './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';

const App = ()=>{

  const titulo = "Los mejores productos para tus mascotas"

  return (
    <> 
    <NavBar />
    <ItemListContainer greeting= {titulo}/>
    </>
    )
} 

export default App



