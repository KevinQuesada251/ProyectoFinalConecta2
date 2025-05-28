import React, { useState, useEffect } from 'react'
import '../styles/adminUsuarios.css'
import { GetUsuarios } from '../services/UsersServices'

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function obtenerInfo() {
      const lista = await GetUsuarios()
      setUsuarios(lista)
    }
    obtenerInfo()
  }, [])

  return (
    <div>
      <h1>Administracion</h1>
      <h2>Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Correo</th>
            <th scope="col">Nacionalidad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario)=>{
            return(
              <>
                <tr>
                    <td>{usuario.username}</td> 
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsuarios