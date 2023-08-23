import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {

    const { id, nombre, foto, puesto, equipo, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} style={{ color: colorPrimario }} title="Eliminar" />
        <div className="encabezado" style={{ background: colorPrimario }}>
            <img src={foto} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/* Operador ternario*/}
            {fav ? < AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador;