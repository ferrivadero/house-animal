import React, { useState, useEffect } from "react";
import  ItemList  from "../Components/ItemList";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

    let { IdCategoria } = useParams();

    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const productsCollection = collection(db, 'productos')
        const q = IdCategoria ? query(productsCollection, where('categoria', '==', IdCategoria)) : productsCollection

        getDocs(q)
        .then((data) =>{
            const lista = data.docs.map((producto)=>{
                return { ...producto.data(), id: producto.id }
            })
            setListaProductos(lista)
        })
        .catch(()=>{
            console.log("errorrrrr")
        })
        .finally(()=>{
            setLoading(false)
        })
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





