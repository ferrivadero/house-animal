import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./carrito.css";

const Carrito = () => {
    const { cart, borrar, totalDeCompra } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h1 style={style.titulo}>Carrito</h1>
                    <h2 style={style.titulo}>
                        No agregaste productos a tu carrito, ingresa{" "}   
                        <Link to="/house-animal/">aqui</Link> para agregar productos
                    </h2>
                </>
            ) : (
                <>
                    <h1 style={style.titulo}>Carrito</h1>
                    <div className="contenedor">
                        <div className="contenedorListaCarrito">
                            <div className="contenedorTitulos">
                                <h1 className="tituloProducto">Producto</h1>
                                <h1 className="tituloCantidad">Cantidad</h1>
                                <h1 className="tituloTotal">Total</h1>
                            </div>

                            {cart.map((producto) => {
                                return (
                                    <div className="cardCarrito">
                                        <div className="itemCardUno">
                                            <div className="imagenCard">
                                                <img src={producto.imagen}></img>
                                            </div>
                                            <div className="nombrePrecio">
                                                <h1 key={producto.id}>{producto.name}</h1>
                                                <span>${producto.precio}</span>
                                            </div>
                                        </div>
                                        <div className="itemCardDos">
                                            <span>{producto.cantidad}</span>
                                            <div className="boton">
                                                <Button
                                                    onClick={() => {
                                                        borrar(producto.id);
                                                    }}
                                                    color="error"
                                                    variant="outlined"
                                                >
                                                    Quitar
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="itemCardTres">
                                            <span>${producto.cantidad * producto.precio}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <h1>Total de compra</h1>
                            <h2>${totalDeCompra}</h2>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

const style = {
    titulo: {
        textAlign: "center",
    },
};

export default Carrito;
