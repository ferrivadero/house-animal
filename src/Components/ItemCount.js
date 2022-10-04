import React, {useState} from "react";
import { Button } from "@mui/material";




const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const sumar = () => stock > contador && setContador(contador + 1)

    const restar = () => contador >= 2 && setContador(contador - 1)
    
    return(
        <> 
        <div style={style.contenedor}> 
        <div style={style.contenedorContador}>
        <Button style={style.contador} disabled= {contador === initial} onClick={restar}>-</Button>
        <div style={style.contador} >{contador}</div>
        <Button style={style.contador} disabled= {contador === stock} onClick={sumar} >+</Button>
        </div>
        <Button size="small" onClick={() => {onAdd(contador)}} variant="outlined">Agregar al carrito</Button>
        </div>
        </>
    )
}

const style ={ 
    contenedor:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    alignItems: "center",
    height: "auto",
    width: "auto",
    margin: "auto"
},

    contador:{
    fontSize: 18,
},

    contenedorContador:{
    justifyContent: "space-between",
    height: 22,
    width: 180,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 15
}
}


export default ItemCount;
