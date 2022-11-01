import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = ({ categorias }) => {
    return(
        <nav>
            {categorias.map((categoria) => {
                return <NavLink key = {categoria.id} className="categoriaNav" to={categoria.ruta}>{categoria.nombre}</NavLink>
            })}
        </nav>
    )

}


export default Nav