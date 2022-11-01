import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore, serverTimestamp, 
} from "firebase/firestore";
import swal from "sweetalert";
import "./formulario.css"

const Formulario = () => {
  const { cart, totalDeCompra, reset } = useContext(CartContext);
  const [datosComprador, setDatosComprador] = useState({});

  const orden = {
    cliente: datosComprador,
    items: cart.map((producto) => ({
      id: producto.id,
      producto: producto.name,
      precio: producto.precio,
      cantidad: producto.cantidad,
    })),
    fechaCompra: serverTimestamp(),
    total: totalDeCompra,
  };

  const confirmarCompra = () => {
    if (
      datosComprador.mail &&
      datosComprador.telefono &&
      datosComprador.nombre
    ) {
      const db = getFirestore();
      const ordenCollection = collection(db, "orden");
      addDoc(ordenCollection, orden).then(({ id }) => {
        let idCompraFinal = id;
        alertaConfirmacionCompra(idCompraFinal);
      });
      reset();
    } else {
      errorDatos();
    }
  };

  const alertaConfirmacionCompra = (idCompraFinal) => {
    swal({
      title: "Gracias por tu compra",
      text: `tu id de compra es: ${idCompraFinal}`,
      icon: "success",
    });
  };

  const errorDatos = () => {
    swal(
      "Debes completar tus datos!",
      "asegurate de completar el formulario",
      "warning"
    );
  };

  const entradaDatos = (e) => {
    setDatosComprador({
      ...datosComprador,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
            <h3 className="tituloForm">Ingresa tus datos para completar la compra</h3>
            <form>
                <label htmlFor="nombre">Nombre y Apellido</label>
                <input type="text" id="nombre" name="nombre" onChange={entradaDatos}  required />
                <label htmlFor="telefono">Telefono</label>
                <input type="number" id="telefono" name="telefono" onChange={entradaDatos}  required/>
                <label htmlFor="mail">Mail</label>
                <input type="mail" id="mail" name="mail" onChange={entradaDatos} placeholder="ejemplo@ejemplo.com" required/>
            </form>
            <div className="botonCompra">
                <Button variant="contained" color="success" onClick={confirmarCompra}>Confirmar Compra</Button>
            </div>
    </>
  );
};

export default Formulario;

