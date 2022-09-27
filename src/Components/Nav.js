import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ categorias }) => {
    return(
        <nav>
            {categorias.map((categoria) => {
                return <NavLink key = {categoria.id} style={style.a} to={categoria.ruta}>{categoria.nombre}</NavLink>
            })}
        </nav>
    )

}

const style = {
a:{
    padding: 15,
    textDecoration: "none",
    color: "black"
}
}
export default Nav