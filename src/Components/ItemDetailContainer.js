import {React, useEffect, useState} from 'react';
import ItemDetail from '../Components/ItemDetail';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    let { IdProducto } = useParams();

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const URL_PRODUCTOS = "https://632bca1c1aabd837398bdca5.mockapi.io/productos/"

    useEffect(() => {
        const GetItem = async () => {
            try{
                const respuesta = await fetch(`${URL_PRODUCTOS}${IdProducto}`)
                const data = await respuesta.json()
                setProducto(data)
            }
            catch{
                console.log("error");
            }
            finally{
                setLoading(false)
            }}
            GetItem()
    }, [IdProducto])

    return(
        <> 
        {
            loading
            ? <LinearProgress />
            :<ItemDetail product = {producto} />
        }    
        </>
    )
    }


export default ItemDetailContainer