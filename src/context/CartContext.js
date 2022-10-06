import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [totalDeCompra, setTotalDeCompra] = useState(0)


    useEffect(() => {
        obtenerCantidad()
        totalCompra()
    }, [cart])
    

    console.log("carrito:", cart);
    console.log("total compra", totalDeCompra);

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

    const obtenerCantidad = () => {
        let cantidadTotal = 0
        cart.forEach((prod)=>{
            cantidadTotal = cantidadTotal + prod.cantidad
        })
        setCantidadTotal(cantidadTotal)
    }

    const totalCompra = () => {
        let totalDeCompra = 0
        cart.forEach((prod)=>{
            totalDeCompra = totalDeCompra + prod.precio * prod.cantidad
        })
        setTotalDeCompra(totalDeCompra)
    }

    return (
        <CartContext.Provider value={{totalDeCompra, cantidadTotal, cart, anadir, borrar, reset }} >
        {children}
        </CartContext.Provider>
    )
};

export default CustomProvider;
