

const Paciente = ({elPaciente, setUnPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = elPaciente
  const handleEliminar =()=>{
    const respuesta = confirm('¿Deseas eliminar a este paciente?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <>
     <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
           <span className='font-normal normal-case'>{nombre}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
           <span className='font-normal normal-case'>{propietario}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Correo:{' '}
           <span className='font-normal normal-case'>{email}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{' '}
           <span className='font-normal normal-case'>{fecha}</span>
         </p>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas:{' '}
           <span className='font-normal normal-case'>
             {sintomas}
             </span>
         </p>
         <div className="flex justify-between">
            <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={()=>setUnPaciente(elPaciente)} //la funcion se activa al dar click SOLAMENTE
            >
              Editar
            </button>

            <button
            className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={handleEliminar} //USAMOS EL ID del elemento para elminarlo
            >
              Eliminar
            </button>
         </div>

       </div>
    </>
  )
}

export default Paciente