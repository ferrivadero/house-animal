import React, { useState, useEffect } from "react";
import  ItemList  from "../Components/ItemList";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {

    let { IdCategoria } = useParams();

    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    const URL_BASE = "https://632bca1c1aabd837398bdca5.mockapi.io/productos"
    const URL_CATEGORIA = "https://632e3a2e2cfd5ccc2afda51f.mockapi.io/categorias/"

    useEffect(() => {
        const customFetch = async () => {
            try{
                const respuesta = await fetch( IdCategoria ? `${URL_CATEGORIA}${IdCategoria}` : URL_BASE)
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
    }, [IdCategoria])
    
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





