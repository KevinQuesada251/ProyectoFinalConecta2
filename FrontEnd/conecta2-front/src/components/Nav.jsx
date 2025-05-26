import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='navBar'>
      <img className='logo' src="src/assets/img/logo.png" alt="" />
        <ul className='menu'>
            <Link className='opciones' to='/home'>Inicio</Link>
            <Link className='opciones' to='/map'>Mapa</Link>
            <Link className='opciones' to='/profile'>Perfil</Link>
            <Link className='opciones' to='/contact'>Contacto</Link>
        </ul>
    </div>
  )
}

export default Nav