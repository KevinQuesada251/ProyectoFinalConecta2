import React from 'react'
import '../styles/Anuncios.css'

function Anuncio({ hora, fecha, gravedad, texto }) {
  return (
    <>
    <div>
      {/* Hero section con imagen de fondo */}
      <section className="anuncio-hero">
        <div className="banner-hero-overlay">
          <div className="banner-hero-content">
            <h1 className='banner-hero-title'>Anuncios</h1>
            <p className='banner-hero-subtitle'>
              Explora y contribuye con información sobre conectividad en tu zona.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>

  )
}

export default Anuncio
