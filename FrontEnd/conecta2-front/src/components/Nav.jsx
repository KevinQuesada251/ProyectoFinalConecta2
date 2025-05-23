import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='navBar'>
      <img src="" alt="" />
        <ul className='menu'>
            <Link className='opciones' to='/home'>Inicio</Link>
            <Link className='opciones' to='/map'>Mapa</Link>
            <li>Perfil</li>
            <li>Contacto</li>
        </ul>
    </div>
  )
}

export default Nav