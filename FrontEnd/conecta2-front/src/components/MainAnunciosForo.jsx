import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Llamados from '../services/Llamados'
import '../styles/Anuncios.css'
import '../styles/Map.css';
function MainAnunciosForo() {
  const [anuncios, setAnuncios] = useState([])

  useEffect(() => {
    async function traerData() {
      const data = await Llamados.getData('anuncios')
      setAnuncios(data)
    }
    traerData()
  }, [])

  return (
    <div>
      {/* Hero section */}
      <section className="banner-hero anuncio-hero">
        <div className="banner-hero-overlay">
          <div className="banner-hero-content">
            <h1 className='banner-hero-title'>Noticias Oficiales</h1>
            <p className='banner-hero-subtitle'>
              Últimas actualizaciones y comunicados importantes de nuestra plataforma
            </p>
            <Link to="/foro" className="noticias-back-btn">
              ← Volver al Foro
            </Link>
          </div>
        </div>
      </section>
      {/* Anuncios section */}
      <section className="anuncios-section">
        <div className="anuncios-container">
         <img className='anuncios-imagen' src="/src/assets/anuncios.png" alt="Imagen anuncio" />
        </div>
      </section>
    </div>
  )
}

export default MainAnunciosForo