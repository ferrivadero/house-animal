import React, { createContext, useState } from "react";


export const CartContext = createContext();


const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    console.log("carrito:", cart);

    const anadir = (producto, cantidad) => {
        if (estaEnLista(producto.id)){
            setCart(cart.map(item => {
                return item.id === producto.id ? {...item, cantidad: item.cantidad + cantidad } : item
            }))
        }else{
            setCart([...cart, { ...producto, cantidad }])
        }
    }

    const borrar = (id) => {
        const arrayFiltrado = cart.filter((producto) => {
            return producto.id !== id
        })
        setCart(arrayFiltrado)
    }

    const estaEnLista = (id) => cart.find(product => product.id === id) ? true : false

    const reset = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, anadir, borrar, reset }} >
        {children}
        </CartContext.Provider>
    )
};

export default CustomProvider;
