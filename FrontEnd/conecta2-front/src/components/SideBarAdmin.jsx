import React from 'react'
import '../styles/sidebarAdmin.css'
function SideBarAdmin() {
    return (
        <div>
            <div className='container-sidebar-admin'>
                <ul className='sidebarAdmin'>
                    <li>Usuarios</li>
                    <li>Ubicaciones</li>
                    <li>Roles</li>
                    <li>Comentarios</li>
                    <li>Respuestas</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarAdmin