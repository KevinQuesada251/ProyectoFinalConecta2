import React from 'react'
import SideBarAdmin from '../components/SideBarAdmin'
import AdminUsuarios from '../components/AdminUsuarios'
import '../styles/adminPage.css'
import Var from '../components/var'


function Admin() {
  return (
    <div className='container-admin'>
        <Var/>
        <AdminUsuarios/>
        

    </div>
  )
}

export default Admin