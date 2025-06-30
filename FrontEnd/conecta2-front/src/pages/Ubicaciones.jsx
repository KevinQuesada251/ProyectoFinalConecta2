import React, { useState, useEffect } from 'react';
import Llamados from '../services/Llamados';
import CardUbicaciones from '../components/CardUbicaciones';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';

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

      <div className='row'>
        <div className='col'>
          <h1 className='text-center bg-black text-white'>Ubicaciones</h1>
        </div>
      </div>

      {/* Input de búsqueda */}
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

      {/* Resultado de ubicaciones */}
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

      <Footer />
    </>
  );
}

export default Ubicaciones;
