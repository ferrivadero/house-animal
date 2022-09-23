import React, { useState, useEffect } from "react";
import  ItemList  from "../Components/ItemList";
import LinearProgress from '@mui/material/LinearProgress';


const ItemListContainer = ({greeting}) => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const customFetch = async () => {
            try{
                const respuesta = await fetch("https://632bca1c1aabd837398bdca5.mockapi.io/productos")
                const data = await respuesta.json()
                setListaProductos(data)
            }
            catch{
                console.log("error");
            }
            finally{
                setLoading(false)
            }}
            customFetch()
    }, [])
    
    return (
        <>             
        <h1 style={style.titulo}>{greeting}</h1>
        {
            loading 
            ?   <LinearProgress />
            : <ItemList listaDeProductos={listaProductos}/>
        }
        
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





