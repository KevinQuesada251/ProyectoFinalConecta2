import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/card.css'

function CardHome({tituloCard,imgCard,textoCard}) {
    return (
        <div>
            <Card className='container-card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src={imgCard} />
                <Card.Body>
                    <Card.Title>{tituloCard}</Card.Title>
                    <Card.Text>
                        {textoCard}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardHome