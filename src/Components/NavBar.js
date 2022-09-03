import React from "react";
import logo from "../imagenes/logoAnimal2.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";

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
                <ShoppingCartIcon fontSize="large"  /> 
        </header>
    );
};

export default NavBar;
