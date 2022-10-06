import React, {useContext} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {CartContext} from "../context/CartContext";
import { textDecoration } from "@chakra-ui/react";

const CartWidget = () => {

const {cantidadTotal} = useContext(CartContext)

    return (
        <div>
            <ShoppingCartOutlinedIcon fontSize="large"/>
            {cantidadTotal === 0 ? <></> : <sup style={style.contador}>{cantidadTotal}</sup>}
        </div>
    )
}

const style={
    contador:{
        fontSize: 18
    }
}

export default CartWidget; 

