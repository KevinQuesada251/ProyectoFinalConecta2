import React from 'react'
import CardHome from './CardHome'
import '../styles/MainHome.css'

function MainHome() {
  return (
    <div>
      <div className='section1'>
        <h2 className='visionText'>Visión</h2>
        <div className='imagen'>
          <img className='vision-img' src="src/assets/img/vision.jpg" alt="personas reunidas" />
        </div>
        <div className='texto'>
          Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
        </div>
      </div>
      <h2 className='titulo2'>Beneficios</h2>
      <div className='section2'>
        <CardHome textoCard={"Conciencia social y Apoyo a políticas públicas y toma de decisiones"} imgCard={'src/assets/img/card3.webp'} />
        <CardHome tituloCard={"Conciencia social y participación ciudadana"} textoCard={"Fomenta una comunidad activa"} imgCard={'src/assets/img/card 2.jpg'} />
        <CardHome textoCard={"Mapear las zonas con baja o nula conectividad"} tituloCard={"Visibilización de la brecha digital"} imgCard={'src/assets/img/card1.jpg'} />
      </div>

    </div>
  )
}

export default MainHome