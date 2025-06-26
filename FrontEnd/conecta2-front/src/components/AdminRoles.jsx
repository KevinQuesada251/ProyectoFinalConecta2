import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';
import ModalRoles from './ModalRoles';
import Swal from 'sweetalert2';
import RueditaCarga from './RueditaCarga';


function AdminRoles() {

  const [roles, setRoles] = useState([])
  const [nuevoRol, setNuevoRol] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
   const [loading, setLoading] = useState(true); 
  const [recarga, setRecarga] = useState(false);  
  
 useEffect(() => {
    async function getData() {
      try {
        const data = await Llamados.getData("roles");
        setRoles(data);
      } catch (error) {
        console.error("Error al obtener roles", error);
      } finally {
        setLoading(false); // 👈 Finaliza el loading
      }
    }
    getData();
  }, [recarga]);

 async function creaRol() {
       const result = await Swal.fire({
         title: "¿Quieres crear este rol?",
         text: "Deseas Continuar",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirmar",
          customClass: {
            popup: 'custom-popup'
          }
       });
     
       if (result.isConfirmed && nuevoRol !== "") {
         const obj = {
           newgroup: nuevoRol,
         }
         const serverResponse = await Llamados.postData(obj,'roles_crear');
         setRecarga(!recarga)
         setNuevoRol("")
     
         Swal.fire({
           title: "¡Creado!",
           text: "Se creo con éxito",
           icon: "success",
            customClass: {
              popup: 'custom-popup'
            }
         });
       }else {
         Swal.fire({
           title: "¡Error!",
           text: "Debes completar el campo",
           icon: "error",
            customClass: {
              popup: 'custom-popup'
            }
         });
       }
     }
 
      if (loading) {
    return <div className='d-flex justify-content-center align-items-center vh-100'>
      <RueditaCarga />
    </div>;
  }

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>ROLES</h2>
      <table className="table border border-dark table-striped table-hover">
        <thead>
          <tr className='table-dark'>
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
            <input className="form-control" value={nuevoRol} onChange={(e) => setNuevoRol(e.target.value)} type="text" />
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