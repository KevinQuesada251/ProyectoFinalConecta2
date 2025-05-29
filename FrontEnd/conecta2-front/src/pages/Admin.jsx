import React, { useState } from 'react'
import SideBarAdmin from '../components/SideBarAdmin'
import AdminUsuarios from '../components/AdminUsuarios'
import '../styles/adminPage.css'
import Var from '../components/var'
import AdminUbicaciones from './AdminUbicaciones'


function Admin() {
  const [ubicaciones,setUbicaciones]=useState(false)
  const [usuarios,setUsuarios]=useState(true)
  
  const mostrarUbicaciones =()=>{
    setUbicaciones(!ubicaciones)
    setUsuarios(false)
  }
  const mostrarUsuarios =()=>{
    setUsuarios(!usuarios)
    setUbicaciones(false)
  }

  return (
    <div className='container-admin'>
        <Var ubicaciones={mostrarUbicaciones} usuarios={mostrarUsuarios}/>
        {usuarios &&
          <AdminUsuarios/>
        }

        {ubicaciones &&
        <AdminUbicaciones/> 
        }

    </div>
  )
}

export default Admin