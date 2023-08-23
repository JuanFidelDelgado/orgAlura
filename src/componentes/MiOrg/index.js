import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //De la siguiente manera se declaran los estados
    //const [nombreVariable, funcion] = useState("valorInicial")
    //console.log(props);

    const [mostrar, actualizarMostrar] = useState(true)

    /*Función para controlar las acciones de el formulario al dar click */
    /*Esta función es como se realiza un switch */
    /*
    const manejarClick = () => {
        console.log("Mostrar / Ocultar", mostrar);
        actualizarMostrar(!mostrar);
    }
    */
    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/Add.png" alt="Add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg;