import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Swal from 'sweetalert2';
import ModalMap from './ModalMap';
import Llamados from '../services/Llamados';

// Arreglar ícono de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function LocationMarker({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
}

function Map() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
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
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh', backgroundColor: '#f4f6fc', padding: '2rem' }}>
      <div className="text-center mb-4">
        <h2 style={{ color: '#12229D', fontWeight: '700' }}>Mapa de Ubicaciones</h2>
        <p style={{ color: '#444' }}>Haz clic en el mapa para agregar una nueva ubicación</p>
      </div>

      <div style={{ width: '100%', maxWidth: '900px', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
        <MapContainer
          center={[9.9281, -84.0907]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '450px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markerPosition && (
            <Marker position={markerPosition}>
              <Popup>¡Hiciste clic aquí!</Popup>
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
        </MapContainer>
      </div>

      <div className="mt-4">
        <button
          className="btn"
          style={{
            backgroundColor: '#12229D',
            borderColor: '#12229D',
            fontWeight: '600',
            padding: '10px 30px',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '16px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            transition: 'all 0.3s',
          }}
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
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0f1e7d')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#12229D')}
        >
          Agregar Ubicación
        </button>
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


