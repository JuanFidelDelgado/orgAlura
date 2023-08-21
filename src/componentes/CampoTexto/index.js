import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }

    return <div className="campo-texto">
        <label htmlFor={props.label}>{props.label}</label>
        <input
            type="text"
            id={props.label}
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto;