import Card from 'react-bootstrap/Card';

function Texto() {
  return (
    <Card className='' style={{ width: '22rem', height:'18rem', background:'#12229d'}}>
      <Card.Body>
        <Card.Text>
          ¿Tienes dudas, ideas o quieres unirte a nuestra causa? Estamos aquí para escucharte. Nuestro objetivo es construir una comunidad comprometida con la equidad digital, impulsando el acceso a internet como un derecho esencial para el desarrollo educativo y laboral. Si compartes esta visión o deseas colaborar, no dudes en comunicarte con nosotros.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Texto;