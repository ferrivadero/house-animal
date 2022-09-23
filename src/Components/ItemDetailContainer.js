import {React, useEffect, useState} from 'react';
import ItemDetail from '../Components/ItemDetail';
import LinearProgress from '@mui/material/LinearProgress';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const GetItem = async () => {
            try{
                const respuesta = await fetch("https://632bca1c1aabd837398bdca5.mockapi.io/productos/1")
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
    }, [])

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