import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import BotonCrear from "../BotonCrear";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

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

    const manejarEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
        //Se puede enviar de esta manera también usando las llaves y sus valores
        //crearEquipo({ titulo: titulo, color: color });

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                label="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                setValor={setNombre}
            />
            <Campo
                label="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <Campo
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
                Crear colaborador
            </BotonCrear>
        </form>
        <form onSubmit={manejarEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                label="Titulo"
                placeholder="Ingresar titulo"
                required={true}
                valor={titulo}
                setValor={setTitulo}
            />
            <Campo
                label="Color"
                placeholder="Ingresar color"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <BotonCrear>
                Crear equipo
            </BotonCrear>
        </form>
    </section>
};

export default Formulario;