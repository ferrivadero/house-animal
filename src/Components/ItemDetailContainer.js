import {React, useEffect, useState} from 'react';
import ItemDetail from '../Components/ItemDetail';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    let { IdProducto } = useParams();

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const productCollection = collection(db, 'productos')
        const refDoc = doc(productCollection, IdProducto)
        getDoc(refDoc)
        .then((result)=>{
            setProducto(
                {
                    id: result.id,
                    ...result.data(),
                }
            )
        })
        .catch(()=>{
            console.log("error")
        })
        .finally(()=>{
            setLoading(false)
        })
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