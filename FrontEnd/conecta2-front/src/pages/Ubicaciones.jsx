import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Llamados from '../services/Llamados'
import 'leaflet/dist/leaflet.css'
import CardUbicaciones from '../components/CardUbicaciones'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

function Ubicaciones() {
  const [ubicaciones, setUbicaciones] = useState([])
  const [ubicacionesBusqueda, setUbicacionesBusqueda] = useState([])
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function traerInfo() {
      const ubi = await Llamados.getData('ubicaciones')
      setUbicaciones(ubi)
    }

    async function buscarUbicacion() {
      if (busqueda.trim() === "") {
        setUbicacionesBusqueda([]) // Limpiar resultados si no hay búsqueda
        return
      }
      const ubi = await Llamados.GetBuscarUbicacion(busqueda)
      setUbicacionesBusqueda(ubi)
    }
    traerInfo()
    buscarUbicacion()
  }, [ubicaciones,ubicacionesBusqueda])


  return (
    <>
      <Navigation />
      <div className='row'>
        <div className='col'>
          <h1 className='text-center bg-black text-white'>Ubicaciones</h1>
        </div>
      </div>

      <div className='row'>
        <div className="input-group mb-3 w-50 mx-auto">
          <input
            onChange={(e) => setBusqueda(e.target.value)}
            type="text"
            className="form-control border border-dark"
            placeholder="Busca una ubicación"
            aria-label="Busca una ubicación"
          />
        </div>
      </div>

      <div className='row'>
        {(ubicacionesBusqueda.length > 0 || busqueda.trim() !== "") ?
          ubicacionesBusqueda.map((ubicacion) => (
            <div key={ubicacion.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <CardUbicaciones
                nombreUbicacion={ubicacion.nombre_ubicacion}
                descripcion={ubicacion.descripcion}
                latitud={ubicacion.latitud}
                longitud={ubicacion.longitud}
                username={ubicacion.username}
              />
            </div>
          ))
          :
          ubicaciones.map((ubicacion) => (
            <div key={ubicacion.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <CardUbicaciones
                nombreUbicacion={ubicacion.nombre_ubicacion}
                descripcion={ubicacion.descripcion}
                latitud={ubicacion.latitud}
                longitud={ubicacion.longitud}
                username={ubicacion.username}
              />
            </div>
          ))
        }
      </div>

      <Footer />
    </>
  )
}

export default Ubicaciones
