import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const ItemCompra = () =>{

    return (
        <>
            <Button style={style.boton} variant="contained" color="success"><Link style={style.textoBoton} to="/house-animal/carrito">Finalizar compra</Link></Button>
        </>
    )
}



const style = {
    textoBoton:{
        textDecoration: "none",
        color: "white"
    },
    boton:{
        height: 70,
        width: 190
    }
}
export default ItemCompra