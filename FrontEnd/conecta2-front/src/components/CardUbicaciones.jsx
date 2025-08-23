import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/card-ubicacion.css'

function CardUbicaciones({ nombreUbicacion, descripcion, latitud, longitud, username }) {
  return (
    <Card className='card-ubicacion' style={{ width: '100%', marginBottom: '1rem' }}>
      {/* Mapa dentro de la tarjeta */}
      <MapContainer
        center={[latitud, longitud]}
        zoom={13}
        style={{ height: '200px', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitud, longitud]}>
          <Popup>
            {nombreUbicacion || 'Ubicación'} <br /> {descripcion || 'Sin descripción'}
          </Popup>
        </Marker>
      </MapContainer>

      <Card.Body>
        <Card.Title>Usuario: {username}</Card.Title>
        <Card.Title>Ubicacion: {nombreUbicacion}</Card.Title>
        <Card.Text>Descripcion: {descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardUbicaciones;




