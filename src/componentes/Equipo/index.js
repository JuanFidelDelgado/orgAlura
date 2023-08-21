import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    // Usando destructuración:

    const { titulo, colorPrimario, colorFondo } = props.datos;
    const { colaboradores } = props

    console.log(props)
    return <>
        {colaboradores.length > 0 &&
            < section className="equipo" style={{ background: colorFondo }}>
                <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) =>
                            <Colaborador
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                            />)
                    }
                </div>
            </ section >
        }
    </>


    //Sin usar destructuración:
    /*
    return <section className="equipo" style={{ background: props.datos.colorFondo }}>
        <h3 style={{ borderColor: props.datos.colorPrimario }}>{props.datos.titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
        </div>
    </section>
    */
}

export default Equipo;