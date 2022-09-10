import React, {useState} from "react";
import { Button } from "@mui/material";




const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if (stock > contador) {
        setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador >= 2) {
            setContador(contador - 1)
        }
        
    }

    return(
        <> 
        <div style={style.contenedor}> 
        <div style={style.contenedorContador}>
        <button style={style.boton} onClick={restar}>-</button>
        <div style={style.contador} >{contador}</div>
        <button style={style.boton} onClick={sumar} >+</button>
        </div>
        <Button onClick={onAdd} variant="outlined">Agregar al carrito</Button>
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
    backgroundColor: "aliceblue",
    height: 200,
    width: 200,
    margin: "auto"
},

    boton:{
    border: "none",
    background: "none",
    fontSize: 28,
    alignItems: "center"
},

    contador:{
    fontSize: 20,
},

    contenedorContador:{
    backgroundColor: "rgb(230, 230, 230)",
    justifyContent: "space-between",
    height: 30,
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
