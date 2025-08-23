import React, { useState } from 'react' 
import AdminUsuarios from '../components/AdminUsuarios'
import '../styles/adminPage.css'
import Var from '../components/SideBarAdmin'
import AdminUbicaciones from './AdminUbicaciones'
import AdminRoles from '../components/AdminRoles'
import AdminComentarios from '../components/AdminComentarios'
import AdminRespuestas from '../components/AdminRespuestas'
import AdminAnuncios from '../components/AdminAnuncios'
import SideBarAdmin from '../components/SideBarAdmin'
import '../styles/sideBarAdmin.css'
import Dashboard from '../components/Dashboard'

function Admin() {
  const [seccionActiva, setSeccionActiva] = useState('usuarios')
  return (
    <>
    <div className='container-admin'>
      <SideBarAdmin 
      dashboard={() => setSeccionActiva('dashboard')} 
        ubicaciones={() => setSeccionActiva('ubicaciones')} 
        usuarios={() => setSeccionActiva('usuarios')}
        roles={() => setSeccionActiva('roles')}
        comentarios={() => setSeccionActiva('comentarios')}
        respuestas={() => setSeccionActiva('respuestas')}
        anuncios={()=> setSeccionActiva('anuncios')}
      />

      {seccionActiva === 'dashboard' && <Dashboard />}
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
