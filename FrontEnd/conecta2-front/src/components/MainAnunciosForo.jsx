import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import { Link } from 'react-router-dom'
import Llamados from '../services/Llamados'
import '../styles/Anuncios.css'
import Anuncio from './Anuncio'

function MainAnunciosForo() {
  const [anuncios, setAnuncios] = useState([])

  useEffect(() => {
    async function traerData() {
      const data = await Llamados.getData('anuncios')
      setAnuncios(data)
    }
    traerData()
  }, [])

  return (
    <div className="container-fluid py-5" style={{ background: '#CAE8FF' }}>
      <div className="container">
        {/* Encabezado */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="text-white py-3" style={{ backgroundColor: '#12229D', borderRadius: '1rem' }}>
              Anuncios Oficiales
            </h1>
          </div>
        </div>

        {/* Botón de regreso */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <Link
              to="/foro"
              className="btn btn-outline-dark rounded-pill px-4"
            >
              Volver a la principal
            </Link>
          </div>
        </div>

        {/* Anuncios */}
        <div className="row g-4">
          {anuncios.map((anuncio) => (
            <div className="col-12" key={anuncio.id}>
              <Anuncio
                hora={anuncio.hora}
                fecha={anuncio.fecha_anuncio}
                texto={anuncio.texto_anuncio}
                gravedad={anuncio.gravedad_anuncio}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainAnunciosForo
