import React, {useContext} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {CartContext} from "../../context/CartContext";
import "./CartWidget.css"

const CartWidget = () => {

const {cantidadTotal} = useContext(CartContext)

    return (
        <div className="cartWidget">
            <ShoppingCartOutlinedIcon className="iconoCarrito" fontSize="large"/>
            {cantidadTotal === 0 ? <></> : <p className="contadorCarrito">{ cantidadTotal }</p>}
        </div>
    )
}

export default CartWidget; 

