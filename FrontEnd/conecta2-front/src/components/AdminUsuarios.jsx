import React, { useState, useEffect } from 'react'
import '../styles/adminUsuarios.css'
import '../styles/adminusers.css'
import { GetUsuarios, PathData } from '../services/UsersServices'
import ModalAdmin from './ModalAdmin'
import Swal from 'sweetalert2'

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)

  // Cargar usuarios
  async function refrescarUsuarios() {
    try {
      const lista = await GetUsuarios()
      setUsuarios(lista)
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
      Swal.fire('Error', 'No se pudieron cargar los usuarios', 'error')
    }
  }

  useEffect(() => {
    refrescarUsuarios()
  }, [])

  // Activar / desactivar usuario
  async function inhabilitar(id) {
    const result = await Swal.fire({
      title: '¿Quieres desactivar o activar?',
      text: 'Deseas continuar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      customClass: {
        popup: 'custom-popup',
      },
    })

    if (result.isConfirmed) {
      try {
        await PathData({ id })
        Swal.fire({
          title: '¡Actualizado!',
          text: 'El estado del usuario se actualizó correctamente.',
          icon: 'success',
          customClass: {
            popup: 'custom-popup',
          },
        })
        refrescarUsuarios()
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo actualizar el estado del usuario', 'error')
      }
    }
  }

  return (
    <>
      <div className="container-users">
        <h1 className="tituloAdmin">Administración</h1>
        <h2 className="tituloUsuarios">USUARIOS</h2>
        <div className="tabla-scroll">
          <table className="table border border-dark table-striped table-hover table-responsive-scroll">
            <thead>
              <tr className="table-dark">
                <th scope="col">#</th>
                <th scope="col">Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Edad</th>
                <th scope="col">Correo</th>
                <th scope="col">Provincia</th>
                <th scope="col">Editar</th>
                <th scope="col">Desactivar / Activar</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.user_id}>
                  <td>{usuario.user_id}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.first_name}</td>
                  <td>{usuario.last_name}</td>
                  <td>{usuario.edad}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.provincia || usuario.nacionalidad}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setUsuarioSeleccionado(usuario)
                        setShowModal(true)
                      }}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => inhabilitar(usuario.user_id)}
                      className={usuario.activo ? 'btn btn-danger' : 'btn btn-success'}
                    >
                      {usuario.activo ? 'Desactivar' : 'Activar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && usuarioSeleccionado && (
        <ModalAdmin
          show={showModal}
          onClose={() => setShowModal(false)}
          userId={usuarioSeleccionado.user_id}
          nombreUsuarioM={usuarioSeleccionado.username}
          nombreM={usuarioSeleccionado.first_name}
          apellidoM={usuarioSeleccionado.last_name}
          edadM={usuarioSeleccionado.edad}
          emailM={usuarioSeleccionado.email}
          nacionalidadM={usuarioSeleccionado.nacionalidad}
          onUpdated={() => {
            setShowModal(false)
            refrescarUsuarios()
          }}
        />
      )}
    </>
  )
}

export default AdminUsuarios
