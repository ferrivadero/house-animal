import React, { useState, useEffect } from "react";
import  {productos}  from '../assets/productos';
import  {customFetch}  from '../utils/customFetch';
import  ItemList  from "../Components/ItemList";




const ItemListContainer = ({greeting}) => {
    
    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        customFetch(productos)
        .then(res => setListaProductos(res))
    }, [])
    
    return (
        <>
        <h1 style={style.titulo}>{greeting}</h1>
        <ItemList listaDeProductos={listaProductos}/>
        </>
    )
}


const style = {
    titulo: {
        textAlign: 'center',
        paddingBottom: 15
    }
}

export default ItemListContainer;





