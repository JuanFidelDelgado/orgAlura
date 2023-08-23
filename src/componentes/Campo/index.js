import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {

    //Destructuración

    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label htmlFor={props.label}>{props.label}</label>
        <input
            id={props.label}
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;