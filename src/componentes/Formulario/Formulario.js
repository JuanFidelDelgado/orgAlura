import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import BotonCrear from "../BotonCrear";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const { registrarColaborador } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar envio");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                label="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                setValor={setNombre}
            />
            <CampoTexto
                label="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <CampoTexto
                label="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            {/*Se puede manejar con children y en el archivo de boton index.js llamar a props.children*/}
            <BotonCrear>
                Crear
            </BotonCrear>
        </form>
    </section>
};

export default Formulario;