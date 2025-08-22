import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainForo.css'

function MainForo() {
  return (
    <div className="foro-page">
      {/* Hero superior */}
      <section className="foro-hero">
        <div className="foro-hero-overlay">
          <h1 className="foro-hero-title">Foros disponibles</h1>
          <p className="foro-hero-subtitle">Explora, comparte y conecta con nuestra comunidad</p>
        </div>
      </section>

      {/* Contenido de foros */}
      <section className="foro-section">
        <div className="foro-grid">
          <div className="foro-card">
            <h4>Anuncios Oficiales</h4>
            <p className="foro-desc">
              Entérate de las últimas novedades, actualizaciones y comunicados importantes.
            </p>
            <Link to={'/anuncios'} className="foro-btn">Entrar</Link>
          </div>

          <div className="foro-card">
            <h4>Comunidad</h4>
            <p className="foro-desc">
              Comparte ideas, haz preguntas y conecta con otros miembros de la comunidad.
            </p>
            <Link to={'/comunidad'} className="foro-btn">Entrar</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainForo
