import React from 'react'
import CardHome from './CardHome'

function MainHome() {
  return (
    <div style={{ background: '#D6ECFF' }} className="container-fluid py-5">
      <div>
        {/* Primera parte */}
        <div className='row align-items-center'>
          <div className='col-12 col-md-6'>
            <h1 className='text-center mb-4' style={{ fontWeight: '700', color: '#0B2A59' }}>Visión</h1>
            <p className='text-center px-3 px-md-5' style={{ fontSize: '1.1rem', color: '#1A3D7C', lineHeight: '1.6' }}>
              Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <img className='w-100 p-3 rounded shadow-sm' src="src/assets/img/vision.jpg" alt="Visión" style={{ objectFit: 'cover', maxHeight: '350px' }} />
          </div>
        </div>

        {/* Título del texto fuera del container */}
        <div className='row m-0 w-100' style={{ background: '#151C9E' }}>
          <div className='col-12'>
            <h3 className='text-center text-white py-3 m-0' style={{ fontWeight: '600', letterSpacing: '1.2px' }}>
              BENEFICIOS
            </h3>
          </div>
        </div>

        {/* Cards */}
        <div className='row mt-4'>
          <div className='col-12 col-md-4 mb-4'>
            <CardHome
              tituloCard={"Visibilización de la brecha digital. Permite identificar y mapear las zonas con baja o nula conectividad"}
              imgCard={"src/assets/img/card1.jpg"}
            />
          </div>
          <div className='col-12 col-md-4 mb-4'>
            <CardHome
              tituloCard={"Facilita la toma de decisiones basadas en datos para mejorar la infraestructura digital"}
              imgCard={"src/assets/img/card 2.jpg"}
            />
          </div>
          <div className='col-12 col-md-4 mb-4'>
            <CardHome
              tituloCard={"Fomenta la participación ciudadana en el desarrollo digital del país"}
              imgCard={"src/assets/img/card3.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHome

