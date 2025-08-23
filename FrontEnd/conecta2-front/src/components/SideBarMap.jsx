import React, { useEffect, useState } from 'react'
import '../styles/sideBarMap.css'
import Llamados from '../services/Llamados'

function SideBarMap() {
  const [ubicaciones, setUbicaciones] = useState([])
  useEffect (()=>{
    async function traerInfo() {
      const todasUbicaciones = await Llamados.getData('ubicaciones')
      console.log(todasUbicaciones);
      setUbicaciones(todasUbicaciones)
      console.log(ubicaciones);
    }
    traerInfo()
  },[])
  return (
    <div className='sidebarMap-container'>
        <h2>Descripcion</h2>
        {ubicaciones.map((ubicacion)=>{
          return(
          <p>{ubicacion.descripcion}</p>
          )
        })}


    </div>
  )
}

export default SideBarMap