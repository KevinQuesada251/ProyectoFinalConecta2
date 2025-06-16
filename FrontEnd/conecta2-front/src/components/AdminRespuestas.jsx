import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';
import ModalRespuestas from './ModalRespuestas';

function AdminRespuestas() {

  const [respuestas, setRespuestas] = useState([])
  const [recarga, setRecarga] = useState(false)
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    async function getData() {
      const data = await Llamados.getData("respuestas")
      setRespuestas(data)
      console.log(data);
      
    }
    getData()
  },[recarga,respuestas])

   async function eliminar(id) {
      const serverResponse = await Llamados.deleteData('respuestas',id)
      setRecarga(!recarga)
    }
  

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>Respuestas</h2>
      <table className="table border border-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope='col'>respuesta</th>
            <th scope='col'>fecha</th>
            <th scope='col'>Editar</th>
            <th scope='col'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {respuestas.map((respuesta) => {
            return (
              <>
                <tr>
                  <td>{respuesta.id}</td>
                  <td>{respuesta.username}</td>
                  <td>{respuesta.mensaje_respuesta}</td>
                  <td>{respuesta.fecha }</td>
                  <td><button className="btn btn-primary"
                     onClick={() => {
                        setShowModal(true);
                        localStorage.setItem("respuesta",respuesta.id)
                      }}
                  >Editar</button></td>
                  <td><button className="btn btn-danger" onClick={()=>eliminar(respuesta.id)}>Eliminar</button></td>
                </tr>
              </> 
            )
          })}
        </tbody>
      </table>
      <ModalRespuestas show={showModal} onClose={() => setShowModal(false)} id={localStorage.getItem('respuesta')} />
    </div>
  )
}

export default AdminRespuestas