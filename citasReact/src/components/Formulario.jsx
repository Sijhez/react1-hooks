import React,{useState, useEffect} from 'react'
import Error from './Error';


const Formulario = ({pacientes,setPacientes, unPaciente, setUnPaciente}) => {
                                     //valor inicial  
  const [nombre, setNombre]= useState('');  //colocación correcta del hook
  const [propietario, setPropietario]= useState(''); 
  const [email, setEmail]= useState(''); 
  const [fecha, setFecha]= useState(''); 
  const [sintomas, setSintomas]= useState(''); 
  //mensaje de error
  const[error, setError]=useState(false)
 
//captura los cambios que tiene un componente, pueden ser multiples useEffects
 useEffect(()=>{
     //comprbar si un objeto tiene algo              
  if(Object.keys(unPaciente).length>0){
       setNombre(unPaciente.nombre)
       setPropietario(unPaciente.propietario)
       setEmail(unPaciente.email)
       setFecha(unPaciente.fecha)
       setSintomas(unPaciente.sintomas)
      
    }
 },[unPaciente])



  const generarId = ()=>{
    const random = Math.random().toString(36).substr(2) //generamos un valor aleatorio combinado con letras y con dos digitos menos
    const fecha = Date.now().toString(36) //generamos una fecha combinada con letras
    return random+fecha
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    //validacion de formulario
   //[nombre, propietario, email, fecha, sintomas].includes('')
    if(!nombre || !propietario || !email || !fecha || !sintomas ){
      console.log('hay al menos un campo vacio')
      setError(true) //funcion con el parametro para set-tear el valor de la variable 
    }else{
      // console.log('todos llenos')
      // console.log('enviando formulario')
      setError(false)
      //construir objeto de paciente:
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      if(unPaciente.id){
        //Editando el registro
        objetoPaciente.id = unPaciente.id
        console.log(objetoPaciente)
        console.log(unPaciente)

        const pacientesActualizados = pacientes.map(pacienteState=>
          pacienteState.id === unPaciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setUnPaciente({})

      }else{
        //Nuevo registro
                 //usamos spread operator para 'sacar una copia del valor actual' de nuestra variable
                //luego, en vez de reemplazar ese valor con uno nuevo, se agrega un nuevo valor con la siguiente sintaxis 
          objetoPaciente.id= generarId()   //generamos ID unico con una funcion declarada arriba
          setPacientes([...pacientes, objetoPaciente])
         //usando los corchetes establecemos que se agrega como un nuevo objeto dentro de un array
      }
                        
      
        //reinicio de formulario, una vez que se agregó el paciente
         setNombre('')
         setPropietario('')
         setEmail('')
         setFecha('')
         setSintomas('')
         
    }
    
  }
  
  //  setNombre('Pechocho') //uso de funcion modificadora: uso correcto
    //  console.log('nuevo valor:',nombre)
        
    //malas practicas- evitar esto
     // const admin = false 

    // if(admin){
    //   const[puedeVer, setPuedeVer] = useState(true)
    // }
                      //captura del evento onSubmit
   
    

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        
      <h2 className='font-black text-3xl text-center'>
       Seguimiento de pacientes
      </h2>
      <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {' '}
          <span className='text-blue-600 font-bold '>Admintístralos</span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          {/* condicional */}
        {error && 
           <Error><i>Todos los campos son obligatorios</i></Error>
          }
         <div className='mb-5'>
             <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'> Nombre mascota {nombre} </label>
             <input id='mascota' 
             value={nombre}
             onChange={ (ev)=> setNombre(ev.target.value) }
             type="text" placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md'/>
         </div>
         <div className='mb-5'>
             <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'> Nombre propietario </label>
             <input id='propietario' type="text" placeholder='Nombre del propietario'
             value={propietario}
             onChange={ (ev)=> setPropietario(ev.target.value) }
             className='border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md'/>
         </div>
         <div className='mb-5'>
             <label htmlFor='email' className='block text-gray-700 uppercase font-bold'> Nombre email </label>
             <input id='email' type="text" placeholder='Email Contacto Propietario'
             value={email}
             onChange={ (ev)=> setEmail(ev.target.value) }
             className='border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md'/>
         </div>
         <div className='mb-5'>
             <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta </label>
             <input id='alta' type="date"
             value={fecha}
             onChange={ (ev)=> setFecha(ev.target.value) }
             className='border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md'/>
         </div>
         <div className='mb-5'>
             <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'> sintomas </label>
             <textarea rows='2' name="" id="sintomas" 
             value={sintomas}
             onChange={ (ev)=> setSintomas(ev.target.value) }
             className='border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md'/>
         </div>
         <input type='submit' className='p-3 w-full text-white uppercase font-bold 
         hover:bg-blue-700 cursor-pointer transition-all bg-blue-600'
         value={unPaciente.id ? 'Editar Paciente':'Agregar un paciente'}
         />
         
      </form>


    </div>
  )
}

export default Formulario