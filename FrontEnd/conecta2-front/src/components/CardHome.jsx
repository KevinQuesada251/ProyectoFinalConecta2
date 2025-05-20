import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardHome({tituloCard,imgCard,textoCard}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgCard} />
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