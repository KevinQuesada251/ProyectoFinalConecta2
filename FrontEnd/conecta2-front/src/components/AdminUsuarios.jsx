import React, { useState, useEffect } from 'react'
import '../styles/adminUsuarios.css'
import { GetUsuarios, DeleteUser, PathData } from '../services/UsersServices'
import '../styles/adminusers.css'
import ModalAdmin from './ModalAdmin'
import Grafico from './Graficos'
import GraficoEdad from './GraficoEdad'
import GraficoProvincias from './GraficoProvincias'
import Swal from 'sweetalert2'


function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [recarga, setRecarga] = useState(false)



  useEffect(() => {
    async function obtenerInfo() {
      const lista = await GetUsuarios()
      setUsuarios(lista)
    }
    obtenerInfo()
  }, [])

  async function inhabilitar(id) {
    const result = await Swal.fire({
      title: "¿Quieres desactivar o activar?",
      text: "Deseas Continuar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar"
    });

    if (result.isConfirmed) {

      const objDesactivar = { id };
      const serverResponse = await PathData(objDesactivar);
      console.log(id);
      console.log(serverResponse);
      setUsuarios(prev =>
        prev.map(user =>
          user.user_id === id ? { ...user, activo: !user.activo } : user //Operador de propagacion ...
        )
      );
      setActivar(prev => !prev);
      setRecarga(!recarga)

      Swal.fire({
        title: "¡Creado!",
        text: "Se creo con éxito",
        icon: "success"
      });
    }


  }
    return (
      <div className='container-users'>
        <h1 className='tituloAdmin'>Administracion</h1>
        <h2 className='tituloUsuarios'>USUARIOS</h2>
        <table className="table border border-dark table-striped table-hover table-responsive-scroll">
          <thead>
            <tr className='table-dark'>
              <th scope="col">#</th>
              <th scope="col">Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Edad</th>
              <th scope="col">Correo</th>
              <th scope="col">Provincia</th>
              <th scope="col">Editar</th>
              <th scope="col">Desactivar o Activar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <>
                  <tr key={usuario.id}>
                    <td>{usuario.user_id}</td>
                    <td>{usuario.username}</td>
                    <td>{usuario.first_name}</td>
                    <td>{usuario.last_name}</td>
                    <td>{usuario.edad}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.provincia}</td>
                    <td><button className="btn btn-primary" onClick={() => {
                      setShowModal(true);
                      localStorage.setItem("usuario_id", usuario.user_id)
                    }}>Editar</button></td>
                    <td>
                      <button
                        onClick={() => inhabilitar(usuario.user_id)}
                        className={usuario.activo ? 'btn btn-success' : 'btn btn-danger'}
                      >
                        {usuario.activo ? 'Activar' : 'Desactivar'}
                      </button>
                    </td>
                  </tr>
                  <ModalAdmin show={showModal} onClose={() => setShowModal(false)} nombreM={usuario.first_name} nombreUsuarioM={usuario.username} apellidoM={usuario.last_name} edadM={usuario.edad} emailM={usuario.email} nacionalidadM={usuario.nacionalidad} />
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  export default AdminUsuarios