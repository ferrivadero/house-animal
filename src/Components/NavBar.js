import React from "react";
import logo from "../imagenes/logoAnimal2.png";
import "./Header.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
                <img className="logo" src={logo} alt="logo" />
                <nav>
                    <a  href="">Inicio</a>
                    <a href="">Perros</a>
                    <a href="">Gatos</a>
                    <a href="">Accesorios</a>
                    <a href="">Ofertas</a>
                </nav>
                <CartWidget/> 
        </header>
    );
};

export default NavBar;
