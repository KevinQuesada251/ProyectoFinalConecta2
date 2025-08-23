import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';
import ModalComentarios from './ModalComentarios';
import Swal from 'sweetalert2'

function AdminComentarios() {

  const [comentarios, setComentarios] = useState([])
  const [recarga, setRecarga] = useState(false)
  const [showModal, setShowModal] = useState(false);


  useEffect(()=>{
    async function getData() {
      const data = await Llamados.getData("comentarios")
      setComentarios(data)
      console.log(data);
      
    }
    getData()
  },[recarga,comentarios])

    async function eliminar(id) {
        const result = await Swal.fire({
          title: "¿Estás seguro de eliminar?",
          text: "No se pueden recuperar los datos",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirmar"
        });
      
        if (result.isConfirmed) {
          const serverResponse = await Llamados.deleteData('comentarios', id);
          setRecarga(!recarga)
      
          Swal.fire({
            title: "¡Eliminado!",
            text: "Se eliminó con éxito",
            icon: "success"
          });
        }
      }
  
 
  

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>Comentarios</h2>
      <table className="table border border-dark table-striped table-hover">
        <thead>
          <tr className='table-dark'>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope='col'>Comentario</th>
            <th scope='col'>Editar</th>
            <th scope='col'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {comentarios.map((comentario) => {
            return (
              <>
                <tr>
                  <td>{comentario.id}</td>
                  <td>{comentario.username}</td>
                  <td>{comentario.mensaje}</td>
                  <td><button className="btn btn-primary"
                       onClick={() => {
                        setShowModal(true);
                        localStorage.setItem("comentario",comentario.id)
                      }}
                  >Editar</button></td>
                  <td><button className="btn btn-danger" onClick={()=>eliminar(comentario.id)}>Eliminar</button></td>
                </tr>
              </> 
            )
          })}
        </tbody>
      </table>
      <ModalComentarios show={showModal} onClose={() => setShowModal(false)} id={localStorage.getItem('comentario')}/>
    </div>
  )
}

export default AdminComentarios