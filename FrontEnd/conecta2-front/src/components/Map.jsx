import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Swal from 'sweetalert2';
import ModalMap from './ModalMap';
import Llamados from '../services/Llamados';
import '../styles/Map.css';

// 🔧 Arreglar íconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// 🎯 Componente para detectar clics en el mapa
function LocationMarker({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
}

// 🔄 Componente para centrar el mapa dinámicamente
function SetMapCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position]);

  return null;
}

function Map() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ubicaciones, setUbicaciones] = useState([]);
  const [userPosition, setUserPosition] = useState([9.9281, -84.0907]); // San José por defecto

  useEffect(() => {
    // 🌎 Obtener ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
          setMarkerPosition([latitude, longitude]); // también coloca un marcador inicial
        },
        (error) => {
          console.warn('No se pudo obtener la ubicación:', error.message);
        }
      );
    }

    // 🔁 Traer ubicaciones del backend
    async function infoUbi() {
      const traerUbi = await Llamados.getData('ubicaciones');
      setUbicaciones(traerUbi);
    }
    infoUbi();
  }, []);

  const handleMapClick = (latlng) => {
    setMarkerPosition([latlng.lat, latlng.lng]);
  };

  return (
    <div>
      {/* Hero section con imagen de fondo */}
      <section className="map-hero">
        <div className="map-hero-overlay">
          <div className="map-hero-content">
            <h1 className='map-hero-title'>Mapa Colaborativo</h1>
            <p className='map-hero-subtitle'>
              Explora y contribuye con información sobre conectividad en tu zona
            </p>
          </div>
        </div>
      </section>

      {/* Contenido del mapa */}
      <div className="map-page-container">
        <div className="map-section">
          <div className="map-instructions">
            <h2 className="map-section-title">Agregar Nueva Ubicación</h2>
            <p className="map-instructions-text">Haz clic en el mapa para seleccionar una ubicación y luego completa la información</p>
          </div>

          <div className="map-container-wrapper">
            <MapContainer
              center={userPosition}
              zoom={13}
              scrollWheelZoom={true}
              className="map-leaflet-container"
            >
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                minZoom={0}
                maxZoom={20}
              />

              {markerPosition && (
                <Marker position={markerPosition}>
                  <Popup>¡Ubicación seleccionada!</Popup>
                </Marker>
              )}

              {ubicaciones.map((ubicacion) => (
                <Marker
                  key={ubicacion.id}
                  position={[ubicacion.latitud, ubicacion.longitud]}
                >
                  <Popup>{ubicacion.nombre_ubicacion}</Popup>
                </Marker>
              ))}

              <LocationMarker onMapClick={handleMapClick} />
              <SetMapCenter position={userPosition} />
            </MapContainer>
          </div>

          <div className="map-action-section">
            <button
              className="map-add-btn"
              onClick={() => {
                if (!markerPosition) {
                  Swal.fire({
                    title: 'Ubicación Vacía',
                    text: 'Primero debes hacer clic en el mapa',
                    icon: 'error',
                  });
                  return;
                }
                setShowModal(true);
              }}
            >
              Agregar Ubicación
            </button>
          </div>
        </div>
      </div>

      {markerPosition && (
        <ModalMap
          show={showModal}
          onClose={() => setShowModal(false)}
          latitud={markerPosition[0]}
          longitud={markerPosition[1]}
        />
      )}
    </div>
  );
}

export default Map;