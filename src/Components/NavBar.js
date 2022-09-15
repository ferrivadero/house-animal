import React from "react";
import logo from "../imagenes/logoAnimal2.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header style={style.header}>
            <div style={style.contenedor}>
                <img style={style.logo} src={logo} alt="logo" />
                <nav>
                    <a style={style.a}  href="#">Inicio</a>
                    <a style={style.a} href="#">Perros</a>
                    <a style={style.a} href="#">Gatos</a>
                    <a style={style.a} href="#">Accesorios</a>
                    <a style={style.a} href="#">Ofertas</a>
                </nav>
                <CartWidget/> 
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
},

    a:{
        padding: 15,
        textDecoration: "none",
        color: "black"
}
}

export default NavBar;
