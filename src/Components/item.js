import "./ItemStyle.css";
//import ItemCount  from "../Components/ItemCount";
import { Button } from "@mui/material";

const Item = ({ productos }) => {

  //const onAdd = () => {
 //   console.log(`se agregaron productos al carro`)
//}
  
  return (
    <>   
    <div className="card">
        <img className="imagenCard" src={`${productos.imagen}`} alt="imagen" />
        <h3>{productos.nombre}</h3>
        <h4>$ {productos.precio} </h4>
        <Button variant="outlined">Ver Detalles</Button>
    </div>
    </>
  );
};

//<ItemCount initial = {1} stock = {productos.stock} onAdd = {onAdd}/>



export default Item;
