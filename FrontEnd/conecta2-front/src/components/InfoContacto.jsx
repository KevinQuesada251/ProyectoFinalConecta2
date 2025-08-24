import { useState } from "react";
import "../styles/InfoContacto.css"
function InfoContacto() {  
  
  return (
    <> 
    <div className="infocontacto" style={{ background: '#12229D' }}>
      <p className="text-center fs-6 fs-md-5 fs-lg-4 text-wrap text-white">
        ¿Tienes dudas, ideas o quieres unirte a nuestra causa? Estamos aquí para escucharte. Nuestro objetivo es construir una comunidad comprometida con la equidad digital, impulsando el acceso a internet como un derecho esencial para el desarrollo educativo y laboral.
      </p>
      <div className="antenna-container">
          <div className="satellite-antenna">📡</div>
          
        </div>
    </div>
    
    </>
  );
}
export default InfoContacto;
