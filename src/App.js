import { useState } from 'react'; //Para usar los estados se debe realizar dentro de un componente y antes del return
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/257cdb6a1fdd566600a01eb0f9f73b22.jpe",
    nombre: "Juan Delgado",
    puesto: "Estudiante"
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])//Toma los valores actuales del arreglo, los copia y le agrega el nuevo elemento
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorFondo: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorFondo: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorFondo: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorFondo: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorFondo: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorFondo: "#FFEEDF"
    }
  ]

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
            Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador}
          /> : <div></div>}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {//Siempre que se trabaje con map se debe usar key
        equipos.map((equipo) => {
          return <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;