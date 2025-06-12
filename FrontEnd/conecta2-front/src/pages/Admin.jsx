import React, { useState } from 'react' 
import AdminUsuarios from '../components/AdminUsuarios'
import '../styles/adminPage.css'
import Var from '../components/var'
import AdminUbicaciones from './AdminUbicaciones'
import AdminRoles from '../components/AdminRoles'
import AdminComentarios from '../components/AdminComentarios'
import AdminRespuestas from '../components/AdminRespuestas'
import AdminAnuncios from '../components/AdminAnuncios'

function Admin() {
  const [seccionActiva, setSeccionActiva] = useState('usuarios')

  return (
    <>
    <div className='container-admin'>
      <Var 
        ubicaciones={() => setSeccionActiva('ubicaciones')} 
        usuarios={() => setSeccionActiva('usuarios')}
        roles={() => setSeccionActiva('roles')}
        comentarios={() => setSeccionActiva('comentarios')}
        respuestas={() => setSeccionActiva('respuestas')}
        anuncios={()=> setSeccionActiva('anuncios')}
      />

      {seccionActiva === 'usuarios' && <AdminUsuarios />}
      {seccionActiva === 'ubicaciones' && <AdminUbicaciones />}
      {seccionActiva === 'roles' && <AdminRoles />}
      {seccionActiva === 'comentarios' && <AdminComentarios />}
      {seccionActiva === 'respuestas' && <AdminRespuestas />}
      {seccionActiva === 'anuncios' && <AdminAnuncios />}
    </div>
    </>
  )
}

export default Admin
