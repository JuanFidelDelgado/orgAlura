import "./Colaborador.css"

const Colaborador = (props) => {

    const { nombre, foto, puesto, equipo } = props.datos
    const { colorPrimario } = props

    return <div className="colaborador">
        <div className="encabezado" style={{ background: colorPrimario }}>
            <img src={foto} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador;