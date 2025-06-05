import React from 'react'
import CardHome from './CardHome'

import { Card } from 'react-bootstrap'

function MainHome() {
  return (
    <div style={{background:'#CAE8FF'}}>
      {/*primera parte */}
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Vision</h1>
          <div className=' p-2 text-center'>
            Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
          </div>
        </div>
        <div className='col'>
          <img className='w-100 p-5' src="src/assets/img/vision.jpg" alt="" />
        </div>
      </div>
      {/*titulo del texto */}
      <div className='row' style={{background:'#12229D'}}>
        <h2 className='text-center text-white'>BENEFICIOS</h2>
      </div>
      {/*parte de los cards */}
      <div className='row'>
        <div className='col'>
          <CardHome tituloCard={"Visibilización de la brecha digitalPermite identificar y mapear las zonas con baja o nula conectividad"} imgCard={"src/assets/img/card1.jpg"} />
        </div>
        <div className='col'>
            <CardHome tituloCard={"Visibilización de la brecha digitalPermite identificar y mapear las zonas con baja o nula conectividad"} imgCard={"src/assets/img/card 2.jpg"} />
        </div>
        <div className='col'>
          <CardHome tituloCard={"Visibilización de la brecha digitalPermite identificar y mapear las zonas con baja o nula conectividad"} imgCard={"src/assets/img/card3.webp"} />
        </div>
      </div>
    </div>
  )
}

export default MainHome 