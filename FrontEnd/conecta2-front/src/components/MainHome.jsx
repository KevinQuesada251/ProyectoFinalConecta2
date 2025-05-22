import React from 'react'
import CardHome from './CardHome'


function MainHome() {
  return (
    <div>
        <h2>Visión</h2>
        <div className='texto'>
            Este proyecto propone la creación de un mapa colaborativo donde las personas puedan registrar y calificar la conectividad a internet en sus zonas.
        </div>
        <div className='imagen'>
              <img src="" alt="personas reunidas" />
        </div>
        <h2>Beneficios</h2>
        <CardHome />
        <CardHome/>
        <CardHome textoCard={"Mapear las zonas con baja o nula conectividad"} tituloCard={"Visibilización de la brecha digital"} imgCard={''}/>
        

    </div>
  )
}

export default MainHome