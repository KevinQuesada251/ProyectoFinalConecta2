import React from 'react'
import SliderCards from './SliderCards'
import '../styles/mainHome.css' // Asegúrate de que la ruta sea correcta

function MainHome() {
  return (
    <div style={{ background: '#D6ECFF' }} className="container-fluid py-5">
      <div>
        {/* Primera parte */}
        <div className='row align-items-center'>
          <div className='col-12 col-md-6 vision'>
            <h1 className='text-center mb-4' style={{ fontWeight: '700', color: '#0B2A59' }}>Visión</h1>
            <p className='text-center px-3 px-md-5' style={{ fontSize: '1.1rem', color: '#1A3D7C', lineHeight: '1.6' }}>
              Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
            </p>
          </div>
          <div className='col-12 col-md-6 vision'>
            <img className='w-100 p-3 rounded shadow-sm' src="src/assets/img/vision.jpg" alt="Visión" style={{ objectFit: 'cover', maxHeight: '350px' }} />
          </div>
        </div>

        {/* Título del texto fuera del container */}
        <div className='row m-0 w-100' style={{ background: '#151C9E' }}>
          <div className='col-12'>
            <h3 className='text-center text-white py-3 m-0 vision' style={{ fontWeight: '600', letterSpacing: '1.2px' }}>
              BENEFICIOS
            </h3>
          </div>
        </div>

        {/* Cards */}
        <div className='row mt-4'>
          <SliderCards/>
        </div>
      </div>
    </div>
  )
}

export default MainHome

