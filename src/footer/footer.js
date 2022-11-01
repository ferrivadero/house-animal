import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import  mastercard from "../imagenes/mastercard.png"
import  visa from "../imagenes/visa.png"
import  maestro from "../imagenes/maestro.png"
import  amex from "../imagenes/amex.png"

const Footer = () => {
    return (
        <>  
        <div className="contenedorFooter">
            <div className="footer">
                <div className="footerColum">
                    <h4 className="titulosFooter">Nuestra Mision</h4>
                    <p className="textoMision">
                    Nuestro objetivo es que puedas devolverle a tus mascotas al menos una parte de todo el amor que te dan.
                    </p>
                </div>

                <div className="footerColum">
                    <h4 className="titulosFooter">Atencion al cliente</h4>
                    <ul>
                        <li>telefono: 351666666</li>
                        <li>horario: Lunes a viernes de 09:00 a 19:00hs</li>
                        <li>Direccion: Avenida Siempre Viva 742</li>
                    </ul>
                </div>

                <div className="footerColum">
                    <h4 className="titulosFooter">Politicas</h4>
                    <ul>
                        <li>Envios</li>
                        <li>Devoluciones</li>
                        <li>Trabaja con nosotros</li>
                    </ul>
                </div>
            </div>
            <div className="footerDos">
                <div>
                    <h5>redes sociales</h5>
                    <FacebookIcon fontSize= "large"/>
                    <InstagramIcon fontSize= "large"/>
                    <TwitterIcon fontSize= "large"/>
                </div>
                <div>
                    <h5>medios de pago</h5>
                        <img className="imgPagos" src={mastercard} alt="mastercard" />
                        <img className="imgPagos" src={visa} alt="visa" />
                        <img className="imgPagos" src={maestro} alt="maestro" />
                        <img className="imgPagos" src={amex} alt="amex" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer