import React from "react";
import '../stylesheets/tarjeta.css';

function Tarjeta(props){

    return(
        <div className="tarjeta">
            <img src={props.foto} alt="Foto de la persona" className="foto-tarjeta"/>
            <div className="contenido-tarjeta">
                <h2 className="nombre">{props.nombre}</h2>
                <p className="profesion">{props.empresa}</p>
                <p className="descripcion">{props.informacion}</p>
                
            </div>
        </div>
    );
}

export default Tarjeta;

/*
 <Tarjeta nombre='Leonid Almanza' empresa='Independiente' informacion='Soy ingeniero de sistemas independiente, por lo cual no estoy en ninguna empresa'/>
*/