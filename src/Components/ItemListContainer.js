import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <h1 style={style.titulo}>{greeting}</h1>
    )
}


const style = {
    titulo: {
        textAlign: 'center'
    }
}

export default ItemListContainer;





