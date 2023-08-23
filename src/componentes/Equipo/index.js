import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // Usando destructuración:

    const { id, titulo, colorPrimario, colorFondo } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    return <>
        {colaboradores.length > 0 &&
            < section className="equipo" style={{ background: hexToRgba(colorPrimario, 0.6) }}>
                <input
                    className="input-color"
                    type='color'
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) =>
                            <Colaborador
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
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