import { useState } from 'react'; //Para usar los estados se debe realizar dentro de un componente y antes del return
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/257cdb6a1fdd566600a01eb0f9f73b22.jpe",
      nombre: "Juan Delgado",
      puesto: "Estudiante",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/257cdb6a1fdd566600a01eb0f9f73b22.jpe",
      nombre: "Juan Delgado",
      puesto: "Estudiante",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/257cdb6a1fdd566600a01eb0f9f73b22.jpe",
      nombre: "Juan Delgado",
      puesto: "Estudiante",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/257cdb6a1fdd566600a01eb0f9f73b22.jpe",
      nombre: "Juan Delgado",
      puesto: "Estudiante",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorFondo: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorFondo: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorFondo: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorFondo: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorFondo: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorFondo: "#FFEEDF"
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Función para registrar un nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])//Toma los valores actuales del arreglo, los copia y le agrega el nuevo elemento
  }

  //Función para eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores)
  }

  //Función para actualizar el color del equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Función para crear equipos
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
    //Los tres puntos definen que sea una copia de lo que hay en el arreglo
  }

  const like = (id) => {
    console.log("like: ", id)

    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos
  //Ternarios --> condicion? seMuestra : noSeMuestra
  //El renderizado condicional se puede declarar así tambien:
  // {mostrarFormulario ? <Formulario /> : <></>} Solamente se valida el estado booleano y se dan las opciones
  // {mostrarFormulario && <Formulario />} Solamente se valida el estado booleano y la opción para ese estado

  return (
    <div>
      <Header />
      {
        mostrarFormulario === true ?
          <
            Formulario
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          /> : <div></div>}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {//Siempre que se trabaje con map se debe usar key
        equipos.map((equipo) => {
          return <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;