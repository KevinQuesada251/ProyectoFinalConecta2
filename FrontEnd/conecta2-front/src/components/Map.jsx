// Map.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { latLng } from 'leaflet';
import "../styles/Map.css";
import ModalMap from './ModalMap';

// Arreglar icono de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Componente que maneja clics en el mapa
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
  const [marcado, setMarcado] = useState(false)
  const [showModal, setShowModal] = useState(false);

  // const [nombreUbicacion, setNombreUbicacion] = useState("")
  // const [latitud,setLatitud] = useState("")
  // const [longitud,setLongitud] = useState("")




  const handleMapClick = (latlng = '') => {
    setMarkerPosition([latlng.lat, latlng.lng]);
    const posiciones = [latlng.lat, latlng.lng]
    setMarkerPosition(posiciones)

    const objCoordenadas = {
      'latitud': latlng.lat,
      'longitud': latlng.lng
    }
    try {
      console.log(objCoordenadas);

      console.log(`Latitud: ${objCoordenadas.latitud}`);
      console.log(`Longitud: ${objCoordenadas.longitud}`);
    } catch (error) {

    }

  };

  // function cargar() {
  //   const obj = {
  //     nombre_ubicacion :  ,
  //     l
  //   }
  //}

  return (
    <div className='contenedor-map'>
      <MapContainer
        center={[9.9281, -84.0907]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />





        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>¡Hiciste clic aquí!</Popup>
          </Marker>
        )}

        <LocationMarker onMapClick={handleMapClick} />
      </MapContainer>

      <button className="btn-map" onClick={() => {
        console.log("Botón Agregar presionado");
                    setShowModal(true);
                  }}>Agregar</button>

      {showModal && (
        <ModalMap
          latitud={markerPosition ? markerPosition[0] : null}
          longitud={markerPosition ? markerPosition[1] : null}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
    
  );
  
}

export default Map;
