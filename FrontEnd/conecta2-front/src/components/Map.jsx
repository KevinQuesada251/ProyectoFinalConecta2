import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "../styles/Map.css";
import ModalMap from './ModalMap';
import Swal from 'sweetalert2'
import { useEffect } from 'react';
import Llamados from '../services/Llamados';

// Arreglar ícono de Leaflet porque funciona mal con react
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// evento click en el mapa
function LocationMarker({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });

  return null;
}

function Map() {
  const [markerPosition, setMarkerPosition] = useState(null); // Guarda lat/lng
  const [showModal, setShowModal] = useState(false); // control del modal
  const [ubicaciones, setUbicaciones] = useState([])

  useEffect (()=>{
    async function infoUbi() {
      const traerUbi = await Llamados.getData('ubicaciones')
      setUbicaciones(traerUbi)
    }
    infoUbi()
  },[])

  // Manejar  clicks en el mapa
  const handleMapClick = (latlng) => {
    const position = [latlng.lat, latlng.lng];
    setMarkerPosition(position);

    console.log(`Latitud: ${latlng.lat}, Longitud: ${latlng.lng}`);
  };

  return (
    <div className="contenedor-map">
      <MapContainer
        center={[9.9281, -84.0907]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcador si se seleccionó una posición */}
        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>¡Hiciste clic aquí!</Popup>
          </Marker>
        )}

        {ubicaciones.map(ubicacion=>(
          <Marker key={ubicacion.id}
          position={[ubicacion.latitud,ubicacion.longitud]}>
            <Popup>{ubicacion.nombre_ubicacion}</Popup>
          </Marker>
          
        ))}
        <LocationMarker onMapClick={handleMapClick} />
      </MapContainer>

      {/* Botón para abrir el modal */}
      <button
        className="btn-map"
        onClick={() => {
          if (!markerPosition) {
            Swal.fire({
              title: "Ubicacion Vacia",
              text: "Primero debes hacer click en el mapa",
              icon: "error"
            });
            return;
          }
          setShowModal(true);
        }}
      >
        Agregar
      </button>

      {/* Mostrar el modal solo si hay posición y se pidió mostrar */}
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
