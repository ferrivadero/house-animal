import React from "react";
import logo from "../imagenes/logoAnimal2.png";
import CartWidget from "./CartWidget";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {

    const categorias = [
        { id: 0, nombre: "Inicio", ruta: "/"},
        { id: 1, nombre: "Perros", ruta: "/categoria/perros"},
        { id: 2, nombre: "Gatos", ruta: "/categoria/gatos"},
        { id: 3, nombre: "Accesorios", ruta: "/categoria/accesorios"}
        
    ]

    return (
        <header style={style.header}>
            <div style={style.contenedor}>
                <Link to="/">
                    <img style={style.logo} src={logo} alt="logo" />
                </Link>
                <Nav categorias= {categorias}/>
                <Link to="/carrito">
                    <CartWidget/> 
                </Link>
            </div>
        </header>
    );
};

const style = {

    header:{
        backgroundColor: "rgb(224, 224, 224)",
        width: "100%"
    },

    contenedor:{
        
        width: "80%",
        paddingLeft: 60,
        paddingRight: 60,
        height: 150,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto"
},                                                                          

    logo:{
        width: 180,
        height: 160
}
}

export default NavBar;
