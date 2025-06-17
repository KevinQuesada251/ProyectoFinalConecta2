import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';
import ModalRoles from './ModalRoles';

function AdminRoles() {

  const [roles, setRoles] = useState([])
  const [nuevoRol, setNuevoRol] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  
  useEffect(()=>{
    async function getData() {
      const data = await Llamados.getData("roles")
      setRoles(data)
      console.log(data);
      
    }
    getData()
  },[])

  async function creaRol() {
    const obj = {
      newgroup : nuevoRol
    }
    const serverResponse = await Llamados.postData(obj,'roles_crear')
  }

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>ROLES</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Usuario</th>
            <th scope="col">Rol</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((rol) => {
            return (
              <>
                <tr>
                  <td>{rol.user_id}</td>
                  <td>{rol.username}</td>
                  <td>{rol.groups[0]}</td>
                  <td><button className='btn btn-primary'
                      onClick={() => {
                        setSelectedUserId(rol.user_id);
                        setShowModal(true);
                      }}
                  >Editar</button></td>
                </tr>
                <ModalRoles user_id={selectedUserId} show={showModal} onClose={() => setShowModal(false) }  />
              </> 
            )
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <div className='row w-75 p-3 rounded' style={{ background: '#2c2c2c' }}>
          <div className='col d-flex align-items-center'>
            <label className='text-white'>Nuevo Rol</label>
          </div>
          <div className='col'>
            <input className="form-control" onChange={(e) => setNuevoRol(e.target.value)} type="text" />
          </div>
          <div className='col'>
            <button className='btn btn-success w-100' onClick={creaRol}>Crear</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminRoles