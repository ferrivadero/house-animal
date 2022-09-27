import "./ItemStyle.css";
import Button from '@mui/material/Button';
import  {Link}  from "react-router-dom";



const Item = ({ productos }) => {


  return (
    <>   
    <div className="card">
        <img className="imagenCard" src={`${productos.imagen}`} alt="imagen" />
        <h3>{productos.name}</h3>
        <h4>${productos.precio} </h4>
        <Button><Link className="boton" to = {`/productos/${productos.id}`} variant="text">Ver Detalles</Link></Button>
    </div>
    </>
  );
};

export default Item;
