import "./ItemStyle.css";
import ItemCount  from "../Components/ItemCount";

const Item = ({ productos }) => {

  const onAdd = () => {
    console.log(`se agregaron productos al carro`)
}
  
  return (
    <>   
    <div className="card">
        <img className="imagenCard" src={`${productos.imagen}`} alt="imagen" />
        <h3>{productos.name}</h3>
        <h4>$ {productos.precio} </h4>
        <ItemCount initial = {1} stock = {productos.stock} onAdd = {onAdd}/>
    </div>
    </>
  );
};

export default Item;
