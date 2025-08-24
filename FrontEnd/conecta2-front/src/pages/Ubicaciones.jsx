import React, { useState, useEffect } from 'react';
import Llamados from '../services/Llamados';
import CardUbicaciones from '../components/CardUbicaciones';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';
import '../styles/ubicaciones.css'; // Importar los estilos específicos

function Ubicaciones() {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [ubicacionesBusqueda, setUbicacionesBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // ✅ Este useEffect se ejecuta UNA VEZ cuando se monta el componente
  useEffect(() => {
    async function traerInfo() {
      try {
        const ubi = await Llamados.getData('ubicaciones');
        setUbicaciones(ubi);
      } catch (error) {
        console.error('Error al traer ubicaciones:', error);
      }
    }

    traerInfo();
  }, []); // Solo una vez

  // ✅ Este useEffect se ejecuta cada vez que el usuario escribe en el input
  useEffect(() => {
    async function buscarUbicacion() {
      if (busqueda.trim() === "") {
        setUbicacionesBusqueda([]);
        return;
      }

      try {
        const resultados = await Llamados.GetBuscarUbicacion(busqueda);
        setUbicacionesBusqueda(resultados);
      } catch (error) {
        console.error('Error en búsqueda:', error);
      }
    }

    buscarUbicacion();
  }, [busqueda]); // Solo cuando cambia la búsqueda

  return (
    <>
      <Navigation />

      {/* Header estilizado como el de la imagen */}
      <div className="ubicaciones-header">
        <div className="ubicaciones-header-overlay">
          <div className="ubicaciones-header-content">
            <h1 className="ubicaciones-title">Mapa Colaborativo</h1>
            <p className="ubicaciones-subtitle">
              Explora y contribuye con información sobre conectividad en tu zona
            </p>
          </div>
        </div>
      </div>

      <div className="ubicaciones-container">
        {/* Input de búsqueda */}
        <div className="ubicaciones-search-section">
          <div className="ubicaciones-search-container">
            <input
              onChange={(e) => setBusqueda(e.target.value)}
              type="text"
              className="ubicaciones-search-input"
              placeholder="Busca una ubicación"
              aria-label="Busca una ubicación"
              value={busqueda}
            />
            <div className="ubicaciones-search-icon">
              🔍
            </div>
          </div>
        </div>

        {/* Resultado de ubicaciones */}
        <div className="ubicaciones-content">
          <div className='row'>
            {(ubicacionesBusqueda.length > 0 || busqueda.trim() !== "")
              ? ubicacionesBusqueda.map((ubicacion) => (
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
              : ubicaciones.map((ubicacion) => (
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
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Ubicaciones;