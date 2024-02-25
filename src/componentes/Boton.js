import React from "react";
import '../css/Boton.css';

export function Boton(props){
    const esOperador = (valor) => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };
    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}