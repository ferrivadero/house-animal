import React from "react";
import "../Components/ItemDetail.css"
import ItemCount from "../Components/ItemCount";


const ItemDetail = ({ product }) => {
    const onAdd = () => {
        console.log(`se agregaron productos al carro`)
    }



    return (
        <>  
            <div className="contenedorCard">
                <div className="imagen">
                    <img src={product.imagen} alt=""/>
                </div>
                <div className="datos">
                    <h1>{product.name} x15Kg</h1>
                    <p className="descripcion">{product.descripcion}</p>
                        <div className="contenedorPrecioContador">
                            <div className="precioStock">
                                <p className="precio">${product.precio}</p>
                                <p className="stock">stock: {product.stock}</p>
                            </div>
                            <div className="contador">
                                <ItemCount initial = {1} stock = {product.stock} onAdd = {onAdd}/>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
    
}

export default ItemDetail   
