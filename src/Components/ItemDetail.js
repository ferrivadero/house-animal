import React, {useState} from "react";
import "../Components/ItemDetail.css"
import ItemCount from "../Components/ItemCount";
import  ItemCompra  from "./ItemCompra";


const ItemDetail = ({ product }) => {

    const onAdd = () => {
        console.log(`se agregaron productos al carro`)
        setAgregar(false)
    }

    const [agregar, setAgregar] = useState(true)

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
                                {
                                agregar ?
                                <ItemCount initial = {1} stock = {product.stock} onAdd = {onAdd}/>:
                                <ItemCompra/>
                                }
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
    
}

export default ItemDetail   
