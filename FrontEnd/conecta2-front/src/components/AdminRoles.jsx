import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';

function AdminRoles() {

  const [roles, setRoles] = useState([])
  
  useEffect(()=>{
    async function getData() {
      const data = await Llamados.getData("roles")
      setRoles(data)
      console.log(data);
      
    }
    getData()
  },[roles])

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>ROLES</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((rol) => {
            return (
              <>
                <tr>
                  <td>{rol.username}</td>
                  <td>{rol.groups[0]}</td>
                </tr>
              </> 
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdminRoles