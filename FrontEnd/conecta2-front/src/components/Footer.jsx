import React from 'react'
import '../styles/footer.css' 
import {Link} from "react-router-dom"
function Footer() {
  return (
    <div className='footer-container'>
      <div className='bloque0'>
    
      </div>
      <div className='bloque1'>
        <ul className='lista1'>
          <li>Contacto</li>
          <li>ejemplo@ejemplo.com</li>
          <li>8707-8899</li>
        </ul>
      </div>

      <div className='bloque2'>
        <ul className='lista2'>
          <li>Ayuda</li>
          <Link>Hay un bug?</Link>
        </ul>
      </div>

      <div className='bloque3'>
        <ul className='lista3'>
          <li>Desarrolladores</li>
          <li>FWD Costa Rica</li>
          <li>Kevin Quesada</li>
        </ul>
      </div>

      <div className='bloque4'>
        <ul>
          <li><img className='insta' src="src/assets/img/x.png" alt="Instagram logo" /></li>
          <li><img className='x' src="src/assets/img/instagram-nuevo-icono.png" alt="Instagram Logo" /></li>
          <li> <img className='face' src="src/assets/img/facebook.png" alt="Facebook Logo" /></li>

        </ul>
      </div>




      <p></p>
    </div>
  )
}

export default Footer