import { useState } from "react";
import "../styles/InfoContacto.css"
function InfoContacto() {
  const [mostrarInfo,setMostrarInfo] = useState(false)
  return (
    <>
    
    {mostrarInfo && 
    <div className="w-75 px-3 h-10  mt-3 rounded mx-auto" style={{ background: '#12229D' }}>
      <p className="text-center fs-6 fs-md-5 fs-lg-4 text-wrap text-white">
        ¿Tienes dudas, ideas o quieres unirte a nuestra causa? Estamos aquí para escucharte. Nuestro objetivo es construir una comunidad comprometida con la equidad digital, impulsando el acceso a internet como un derecho esencial para el desarrollo educativo y laboral.
      </p>
    </div>
    }
    </>
  );
}
export default InfoContacto;
