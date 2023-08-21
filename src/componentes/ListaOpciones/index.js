import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    //Método map se utiliza para recorrer los arreglos en react
    /*
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    */

    /*
        {equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}

        Cuando una arrow function solamente me devuelve un solo elemento lo puedo hacer de la siguiente manera:
        {equipos.map((equipo, index) => <option key={index}>{equipo}</option>})
    */

    const manejarCambio = (e) => {
        //console.log("Seleccionó", e.target.value);
        props.setEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label htmlFor="equipos">Equipos</label>
        <select id="equipos" value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}

        </select>
    </div >
}

export default ListaOpciones;