import {useState, useEffect} from 'react'

//esto es tecnología JSX -(javascript Syntax Extension)
//Es una extensión del lenguaje desarrollada por Facebook para React. 
//Parece JS pero muestra código de HTML, y básicamente es un lenguaje de Template que muestra HTML, pero tiene todas las funciones de Javascript
//ya compilado, se generan archivos JS con funciones y objetos
 //REGLAS: Etiqueta de cierre y apertura oblitatorias en HTML
 //Cada componente debe tener un return
 //Este return debe haber máximo un solo elemento en el nivel máximo 
import Formulario from "./components/Formulario"
import Header  from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  

  const [pacientes, setPacientes] = useState([])//si genero arreglos, debo de agregar arreglos, no strings, ni objetos, ni otras cosas que no sean la variable inicial
  const [unPaciente, setUnPaciente]=useState({})
  
    useEffect(()=>{
       //obtener lo que haya en localStorage
       const obtenerLS=()=>{
         const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
         setPacientes(pacientesLS)
       }
       obtenerLS()
    },[]);//ejecucion a una sola vez

     //guardando en local storage: solo strings, no se pueden meter arreglos
     useEffect(()=>{
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])//ejecucion cada vez que el estado se altere

  //cualquier funcion a ejecutar dentro del html debe ejecutarse aqui
  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(paciente =>paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  const edad = 18

  const alerta = ()=> alert('Hola Mundo') //usando arrow function dentro del html
  const toma1Valor = (valor) =>{
    console.log(valor)
  }
  //siempre se debe retornar un elemento en el nivel mas alto
  return (
    // Este es un primer componente
    <>
    <div className="container mx-auto mt-20">
    
    <Header/>
    <div className="mt-12 md:flex ">
      <Formulario 
      pacientes = {pacientes}
      unPaciente = {unPaciente}
      setPacientes ={setPacientes}
      setUnPaciente = {setUnPaciente}
      />
      <ListadoPacientes
      pacientes = {pacientes}
      setUnPaciente={setUnPaciente}
      eliminarPaciente={eliminarPaciente}
      />
    </div>
    </div>
    
    {/* esto es JAVASCRIPT, aqui deberemos usar ternarios para condicionales */}
    {/* {edad >= 18 ? 'Eres mayor de edad': 'no, eres menor de edad'} 
      <h1>Hola Mundo</h1>
      <p>Tu tienes {edad} años</p>
      <h2>{'ESTO EN BAJAS'.toLowerCase()// USANDO JS dentro del return
      }</h2>
      <input type='text'/>
      <button onClick={alerta}>Presionar boton</button> */}
    </>
  )
}

export default App
