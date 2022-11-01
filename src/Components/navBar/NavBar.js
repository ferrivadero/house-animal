import React from "react";
import logo from "../../imagenes/logoAnimal2.png";
import CartWidget from "../CartWidget/CartWidget";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    const categorias = [
        { id: 0, nombre: "Inicio", ruta: "/"},
        { id: 1, nombre: "Perros", ruta: "/categoria/perros"},
        { id: 2, nombre: "Gatos", ruta: "/categoria/gatos"},
        { id: 3, nombre: "Accesorios", ruta: "/categoria/accesorios"}
        
    ]

    return (
        <header className="header">
            <div className="contenedorNav">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <Nav categorias= {categorias}/>
                <Link to="/carrito">
                    <CartWidget/> 
                </Link>
            </div>
        </header>
    );
};


export default NavBar;
