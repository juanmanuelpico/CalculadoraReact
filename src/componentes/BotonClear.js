import React from "react";
import '../css/BotonClear.css'

export const BotonClear = (props) =>{
    return(
        <div className='boton-clear'
        onClick={props.manejarClic}>
            {props.children}
        </div>
    );
};