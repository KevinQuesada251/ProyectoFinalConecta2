import React from 'react'
import {Link} from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaHome, FaLinkedin, FaTiktok } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaGithub, label: "GitHub" },
    { icon: FaLinkedin, label: "LinkedIn" },
    { icon: FaTiktok, label: "TikTok" }
  ];

  return (
    <footer className="footer-container">
      <section className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-column">
              <h6 className="footer-title">Contacto</h6>
              <a href="mailto:ejemplo@ejemplo.com" className="footer-link">ejemplo@ejemplo.com</a>
              <a href="tel:888888899" className="footer-link">8888-8899</a>
            </div>

            <div className="footer-column">
              <h6 className="footer-title">Ayuda</h6>
              <Link to="/politicas" className="footer-link">Politicas de Privacidad</Link>
              <Link to="/condiciones" className="footer-link">Términos y Condiciones</Link>
            </div>

            <div className="footer-column">
              <h6 className="footer-title">Desarrolladores</h6>
              <p className="footer-text"><FaHome className="footer-icon" /> FWD Costa Rica</p>
              <p className="footer-text"><FaEnvelope className="footer-icon" /> Equipo Conecta2</p>
            </div>

            <div className="footer-column">
              <h6 className="footer-title">Redes Sociales</h6>
              <div className="footer-social">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a key={label} href="#!" aria-label={label}>
                    <Icon className="footer-social-icon" size={18} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <div className="footer-copyright">
        <div className="footer-copyright-content">
          <span className="footer-copyright-text">© Hackaton 2025</span>
          <a className="footer-copyright-link" href="/home">Conecta2</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer