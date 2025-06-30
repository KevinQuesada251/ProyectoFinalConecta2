import React from 'react'
import {Link} from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/footer.css';
function Footer() {
  return (
   <>
  {/* Footer */}
  <footer className="text-center text-lg-start text-white" style={{background:"black"}}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter icon" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3 g-0">
          {/* Grid column */}
          
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
            <p>
              <a href="#!" className="text-reset">
                ejemplo@ejemplo.com
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                8707-8899
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-2">Ayuda</h6>
            <p>
              <a href="#!" className="text-reset">
                Hay un bug?
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-2">Desarrolladores</h6>
            <p>
              <i className="fas fa-home me-3" /> FWD Costa Rica
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              Kevin Quesada
            </p>
          </div>
           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-2">Redes Sociales</h6>
            <p>
              <i className="fas fa-home me-0" /> <FaFacebookF className='social-icon' size={30} /> <FaTwitter className='social-icon'  size={30}/> <FaInstagram className='social-icon' size={30} /> <FaGithub className='social-icon' size={30}/>
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2025 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Conecta2
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}

</>

  )
}

export default Footer