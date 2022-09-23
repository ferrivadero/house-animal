import React from "react";
import  Item  from "../Components/item";
import './EstilosItemList.css'



const ItemList = ({ listaDeProductos }) => {
    return (
        <>
            <div className="contenedor">
            {listaDeProductos.map((prod, i) => <Item key={`${prod.name}-${i}`} productos={prod} />)}
            </div>
        </>
    )
}




export default ItemList