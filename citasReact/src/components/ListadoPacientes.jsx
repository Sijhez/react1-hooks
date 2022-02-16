import React,{useEffect} from 'react'
import Paciente from './Paciente'


function ListadoPacientes({pacientes, setUnPaciente, eliminarPaciente}) {

  // console.log(pacientes && pacientes.length)
  // useEffect(()=>{
  //   if(pacientes.length>0){
  //     console.log('Nuevo paciente agregado')
  //   }
    
  // },[pacientes])
 
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      { pacientes && pacientes.length ? (
        <>
        <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Administra tus {' '}
          <span className='text-blue-600 font-bold '> Pacientes y Citas</span>
        </p>

        {
          pacientes.map( (elPaciente) =>(
            //recibimos el id generado con el prop key y se lo pasamos a cada elemento iterado
              <Paciente 
              key={elPaciente.id}
              elPaciente = {elPaciente}
              setUnPaciente={setUnPaciente}
              eliminarPaciente={eliminarPaciente}
              />
            )
          )
        
        }

        </>
      ) : (

      
       <>
         <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Comienza agregando pacientes {' '}
          <span className='text-blue-600 font-bold '> y se agregarán aquí</span>
        </p>
      </>)
      }
        

        
        
       
      

    </div>
  )
}

export default ListadoPacientes