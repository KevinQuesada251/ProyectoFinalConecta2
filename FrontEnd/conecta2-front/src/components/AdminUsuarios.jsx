import React, { useState, useEffect } from 'react'
import '../styles/adminUsuarios.css'
import { GetUsuarios } from '../services/UsersServices'
import '../styles/adminusers.css'
import ModalAdmin from './ModalAdmin'


function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [showModal, setShowModal] = useState(false);




  useEffect(() => {
    async function obtenerInfo() {
      const lista = await GetUsuarios()
      setUsuarios(lista)
    }
    obtenerInfo()
  }, [])

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>USUARIOS</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Correo</th>
            <th scope="col">Nacionalidad</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <>
                <tr>
                  <td>{usuario.user_id}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.first_name}</td>
                  <td>{usuario.edad}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.nacionalidad}</td>
                  <td><button class="btn btn-success" onClick={() => {
                    setShowModal(true);
                  }}>Editar</button></td>
                  <td><button class="btn btn-danger">Eliminar</button></td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <ModalAdmin show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default AdminUsuarios