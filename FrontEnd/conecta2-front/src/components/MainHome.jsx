import React, { useState } from 'react'
import '../styles/mainHome.css'


function MainHome() {
  // Estado para controlar qué tarjetas están volteadas
  const [flippedCards, setFlippedCards] = useState({})

  // Función para voltear una tarjeta específica
  const toggleCardFlip = (cardIndex) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }))
  }

  // Datos de las tarjetas de beneficios con imágenes y definiciones
  const benefitCards = [
    {
      image: "/src/assets/conexionrural.jpeg",
      alt: "Conexión Rural",
      title: "Conexión Rural",
      definition: "Mejoramiento de la conectividad en zonas rurales mediante el mapeo colaborativo de la calidad de internet, identificando áreas con deficiente cobertura para priorizar inversiones en infraestructura."
    },
    {
      image: "/src/assets/red.jpeg",
      alt: "Monitoreo en Tiempo Real",
      title: "Monitoreo en Tiempo Real",
      definition: "Sistema de seguimiento continuo que permite a las comunidades reportar problemas de conectividad instantáneamente, facilitando respuestas rápidas de los proveedores de servicios."
    },
    {
      image: "/src/assets/mantenimientored.jpg",
      alt: "Mantenimiento de Red",
      title: "Mantenimiento de Red",
      definition: "Optimización del mantenimiento preventivo y correctivo de la infraestructura de telecomunicaciones basado en datos reales reportados por los usuarios de cada zona."
    }
  ]

  return (
    <div>
      {/* Hero header con imagen de fondo */}
      
      <section className="mainHome-hero">
        <div className="mainHome-hero-overlay">
          <div className="mainHome-vision-content">
            <h1 className='mainHome-hero-title'>Visión</h1>
            <p className='mainHome-hero-subtitle'>
              Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container-fluid py-5" style={{ background: '#D6ECFF' }}>
        {/* Título BENEFICIOS */}
        <div className='row m-0 w-100' style={{ background: '#151C9E' }}>
          <div className='col-12'>
            <h3 className='text-center text-white py-3 m-0' style={{ fontWeight: '600', letterSpacing: '1.2px' }}>
              BENEFICIOS
            </h3>
          </div>
        </div>

        {/* Cards de Beneficios con efecto flip */}
        <div className='row mt-4 px-3 px-md-4'>
          {benefitCards.map((card, index) => (
            <div key={index} className='col-12 col-md-4 mb-4'>
              <div
                className={`mainHome-benefit-flip-container ${flippedCards[index] ? 'flipped' : ''}`}
                onClick={() => toggleCardFlip(index)}
              >
                <div className="mainHome-benefit-flip-card">
                  {/* Lado frontal - Solo imagen */}
                  <div className="mainHome-benefit-card-front">
                    <img src={card.image} alt={card.alt} className="mainHome-benefit-img" />
                    <div className="mainHome-benefit-overlay">
                      <h4 className="mainHome-benefit-title">{card.title}</h4>
                      <p className="mainHome-flip-hint">Click para más información</p>
                    </div>
                  </div>

                  {/* Lado trasero - Toda la información/definición */}
                  <div className="mainHome-benefit-card-back">
                    <div className="mainHome-benefit-back-content">
                      <div className="mainHome-benefit-back-header">
                        <div className="mainHome-benefit-back-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 11H1l6-6 6 6z" />
                            <path d="M23 11h-8l6-6 6 6z" />
                            <path d="M12 23v-6" />
                            <path d="M8 17h8" />
                          </svg>
                        </div>
                        <h4 className="mainHome-benefit-back-title">{card.title}</h4>
                      </div>
                      <div className="mainHome-benefit-definition-container">
                        <p className="mainHome-benefit-definition">{card.definition}</p>
                      </div>
                      <div className="mainHome-benefit-back-footer">
                        <p className="mainHome-flip-back-hint">Click para regresar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ideas Principales */}
        <div className='row mt-5 px-3 px-md-4'>
          <div className='col-12 text-center mb-4'>
            <h3 className='mb-3' style={{ fontWeight: '600', color: '#0B2A59' }}>IDEAS PRINCIPALES</h3>
          </div>
          <div className='col-12 col-md-4 mb-4'>
            <div className="mainHome-benefit-card">
              <div className="mainHome-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4 className="mainHome-card-title">Información Transparente</h4>
              <p className="mainHome-card-description">
                Acceso a datos reales sobre la calidad de conectividad en cada zona,
                proporcionando información valiosa para la toma de decisiones.
              </p>
            </div>
          </div>

          <div className='col-12 col-md-4 mb-4'>
            <div className="mainHome-benefit-card">
              <div className="mainHome-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="mainHome-card-title">Colaboración Comunitaria</h4>
              <p className="mainHome-card-description">
                Permite que los usuarios compartan sus experiencias y contribuyan
                al mejoramiento colectivo de la conectividad en sus comunidades.
              </p>
            </div>
          </div>

          <div className='col-12 col-md-4 mb-4'>
            <div className="mainHome-benefit-card">
              <div className="mainHome-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11H1l6-6 6 6z" />
                  <path d="M23 11h-8l6-6 6 6z" />
                  <path d="M12 23v-6" />
                  <path d="M8 17h8" />
                </svg>
              </div>
              <h4 className="mainHome-card-title">Mejora Continua</h4>
              <p className="mainHome-card-description">
                Facilita la identificación de áreas problemáticas y el monitoreo
                de mejoras en la infraestructura de conectividad digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHome