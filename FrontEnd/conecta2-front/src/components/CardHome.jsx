import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/card.css'

function CardHome({ tituloCard, imgCard, textoCard }) {
  return (
    <Card className="h-100 shadow-sm" style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={imgCard} 
        style={{ height: '180px', objectFit: 'cover' }} 
        alt={tituloCard}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{tituloCard}</Card.Title>
        <Card.Text className="flex-grow-1">
          {textoCard}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardHome
