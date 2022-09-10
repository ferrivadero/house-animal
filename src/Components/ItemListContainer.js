import React from "react";
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    
    const onAdd = () => {
            console.log(`se agregaron productos al carro`)
        
    }
    
    
    return (
        <>
        <h1 style={style.titulo}>{greeting}</h1>
        <ItemCount initial = {1} stock = {7} onAdd = {onAdd}/>
        </>
    )
}


const style = {
    titulo: {
        textAlign: 'center',
        paddingBottom: 15
    }
}

export default ItemListContainer;





