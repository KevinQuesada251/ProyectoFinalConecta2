import React from 'react'
import SliderCards from './SliderCards'
import '../styles/mainHome.css' 

function MainHome() {
  return (
    <div className='main-home-dynamic'>
      <div className="home-container">
        <div>
          {/* Primera parte */}
          <div className='row align-items-center fade-in'>
            <div className='col-12 col-md-6 vision-section'>
              <h1 className='title-vision'>Visión</h1>
              <p className='text-vision'>
                Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
              </p>
            </div>
            <div className='col-12 col-md-6 vision-img'>
              <img className='img-vision' src="src/assets/img/vision.jpg" alt="Visión" />
            </div>
          </div>

          {/* Título beneficios */}
          <div className='row m-0 w-100 benefits-bar'>
            <div className='col-12'>
              <h3 className='benefits-title'>BENEFICIOS</h3>
            </div>
          </div>

          {/* Cards */}
          <div className='row mt-4 fade-in-up'>
            <SliderCards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHome
