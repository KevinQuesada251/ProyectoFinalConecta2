
import React, { useState, useEffect } from 'react';
import Llamados from '../services/Llamados';
import CardUbicaciones from '../components/CardUbicaciones';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';

function Ubicaciones() {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [ubicacionesFiltradas, setUbicacionesFiltradas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  const [filtros, setFiltros] = useState({
    velocidad: "",
    capacidad_min: "",
    capacidad_max: "",
    intensidad: ""
  });

  // Obtener todas las ubicaciones al montar el componente
  useEffect(() => {
    async function traerInfo() {
      setLoading(true);
      try {
        const ubi = await Llamados.getData('ubicaciones');
        setUbicaciones(ubi);
        setUbicacionesFiltradas(ubi);
      } catch (error) {
        console.error('Error al traer ubicaciones:', error);
      } finally {
        setLoading(false);
      }
    }

    traerInfo();
  }, []);

  // Aplicar filtros cuando cambien los valores
  useEffect(() => {
    aplicarFiltros();
  }, [filtros, ubicaciones]);

  // Función para aplicar los filtros
  const aplicarFiltros = async () => {
    if (busqueda.trim() !== "") return; // No aplicar filtros durante búsqueda
    
    setLoading(true);
    try {
      const params = new URLSearchParams();
      
      if (filtros.velocidad) params.append('velocidad', filtros.velocidad);
      if (filtros.capacidad_min) params.append('capacidad_min', filtros.capacidad_min);
      if (filtros.capacidad_max) params.append('capacidad_max', filtros.capacidad_max);
      if (filtros.intensidad) params.append('intensidad', filtros.intensidad);
      
      const response = await fetch(`http://127.0.0.1:8000/api/ubicaciones/?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUbicacionesFiltradas(data);
      }
    } catch (error) {
      console.error('Error al aplicar filtros:', error);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambios en los filtros
  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Limpiar filtros
  const limpiarFiltros = () => {
    setFiltros({
      velocidad: "",
      capacidad_min: "",
      capacidad_max: "",
      intensidad: ""
    });
    setBusqueda("");
  };

  // Buscar por nombre (código existente)
  useEffect(() => {
    async function buscarUbicacion() {
      if (busqueda.trim() === "") {
        return;
      }

      setLoading(true);
      try {
        const resultados = await Llamados.GetBuscarUbicacion(busqueda);
        setUbicacionesFiltradas(resultados);
      } catch (error) {
        console.error('Error en búsqueda:', error);
      } finally {
        setLoading(false);
      }
    }

    if (busqueda.trim() !== "") {
      buscarUbicacion();
    } else {
      aplicarFiltros();
    }
  }, [busqueda]);

  const hayFiltrosActivos = Object.values(filtros).some(value => value !== "") || busqueda.trim() !== "";

  return (
    <>
      <Navigation />

      <div className='row'>
        <div className='col'>
          <h1 className='text-center bg-black text-white py-3 rounded-bottom shadow-sm'>
            Ubicaciones 
            {ubicacionesFiltradas.length > 0 && (
              <small className="d-block fs-6 mt-1 opacity-75">
                {ubicacionesFiltradas.length} ubicación{ubicacionesFiltradas.length !== 1 ? 'es' : ''} encontrada{ubicacionesFiltradas.length !== 1 ? 's' : ''}
              </small>
            )}
          </h1>
        </div>
      </div>

      {/* Input de búsqueda */}
      <div className='row'>
        <div className="input-group mb-3 w-50 mx-auto">
          <input
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
            type="text"
            className="form-control border border-dark shadow-sm"
            placeholder="Busca una ubicación..."
            aria-label="Busca una ubicación"
          />
          {busqueda && (
            <button 
              className="btn btn-outline-secondary" 
              type="button" 
              onClick={() => setBusqueda("")}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filtros */}
      <div className='row mb-3'>
        <div className='col-md-3 mb-2'>
          <select 
            name="velocidad" 
            value={filtros.velocidad} 
            onChange={handleFiltroChange}
            className="form-select shadow-sm"
          >
            <option value="">🚀 Todas las velocidades</option>
            <option value="alta">🔥 Alta</option>
            <option value="media">⚡ Media</option>
            <option value="baja">🐌 Baja</option>
          </select>
        </div>
        
        <div className='col-md-3 mb-2'>
          <select 
            name="intensidad" 
            value={filtros.intensidad} 
            onChange={handleFiltroChange}
            className="form-select shadow-sm"
          >
            <option value="">💪 Todas las intensidades</option>
            <option value="alta">🔥 Alta</option>
            <option value="media">⚡ Media</option>
            <option value="baja">😌 Baja</option>
          </select>
        </div>
        
        <div className='col-md-2 mb-2'>
          <input
            type="number"
            name="capacidad_min"
            value={filtros.capacidad_min}
            onChange={handleFiltroChange}
            className="form-control shadow-sm"
            placeholder="👥 Min"
          />
        </div>
        
        <div className='col-md-2 mb-2'>
          <input
            type="number"
            name="capacidad_max"
            value={filtros.capacidad_max}
            onChange={handleFiltroChange}
            className="form-control shadow-sm"
            placeholder="👥 Max"
          />
        </div>

        <div className='col-md-2 mb-2'>
          {hayFiltrosActivos && (
            <button 
              onClick={limpiarFiltros}
              className="btn btn-outline-danger w-100 shadow-sm"
              title="Limpiar filtros"
            >
              🗑️ Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}

      {/* Resultado de ubicaciones */}
      <div className='row'>
        {!loading && ubicacionesFiltradas.length === 0 ? (
          <div className="col-12 text-center py-5">
            <div className="text-muted">
              <h4>🔍 No se encontraron ubicaciones</h4>
              <p>Intenta ajustar los filtros o realizar otra búsqueda</p>
            </div>
          </div>
        ) : (
          ubicacionesFiltradas.map((ubicacion, index) => (
            <div 
              key={ubicacion.id} 
              className="col-12 col-md-6 col-lg-4 mb-4"
              style={{
                animation: loading ? 'none' : `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <CardUbicaciones
                nombreUbicacion={ubicacion.nombre_ubicacion}
                descripcion={ubicacion.descripcion}
                latitud={ubicacion.latitud}
                longitud={ubicacion.longitud}
                username={ubicacion.username}
              />
            </div>
          ))
        )}
      </div>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Ubicaciones;