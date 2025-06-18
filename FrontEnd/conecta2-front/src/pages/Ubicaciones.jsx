import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import { useEffect } from 'react'
import Llamados from '../services/Llamados'
import 'leaflet/dist/leaflet.css'
import CardUbicaciones from '../components/CardUbicaciones'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

function Ubicaciones() {
  const [ubicaciones, setUbicaciones] = useState([])

  useEffect(() => {
    async function traerInfo() {
      const ubi = await Llamados.getData('ubicaciones')
      console.log(ubi);

      setUbicaciones(ubi)
    }

    traerInfo()
  }, [])


  return (
    <>
      <Navigation/>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center bg-black text-white'>Ubicaciones</h1>
        </div>
      </div>

      <div className='row'>
        {ubicaciones.map((ubicacion) => (
          <div key={ubicacion.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <CardUbicaciones
              nombreUbicacion={ubicacion.nombre_ubicacion}
              descripcion={ubicacion.descripcion}
              latitud={ubicacion.latitud}
              longitud={ubicacion.longitud}
              username={ubicacion.username}
            />
          </div>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default Ubicaciones