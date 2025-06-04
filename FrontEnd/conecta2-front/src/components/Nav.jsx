import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='navBar'>
      <img className='logo' src="src/assets/img/logo.png" alt="" />
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link to={'/home'} className="nav-link active" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/profile'} className="nav-link">Perfil</Link>
        </li>
        <li class="nav-item">
          <Link to={'/map'} className="nav-link" >Map</Link>
        </li>
        <li class="nav-item">
          <Link to={'/contact'} className="nav-link" >Contacto</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav