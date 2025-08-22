import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function FormContacto() {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lb9k21w',       
      'template_qn6m14u',      
      form.current, 
      '6LJdjxAV4b1LUCc43'        
    )
    .then(() => {
      Swal.fire('Mensaje enviado', 'Gracias por contactarnos', 'success');
      form.current.reset();
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      Swal.fire('Error', 'No se pudo enviar el mensaje', 'error');
    });
  };

  return (
    <div>
    <div className="contact-form-container">
      <div className="contact-header">
        <div className="antenna-container">
          <div className="satellite-antenna">📡</div>
          <div className="satellite-antenna">📡</div>
        </div>
        <h1 className="contact-title">Contacto</h1>
      </div>
      <form ref={form} onSubmit={enviarCorreo} className="contact-form">
        <div className="form-group-custom">
          <input
            type="text"
            name="user_name"
            className="input-custom"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-group-custom">
          <textarea
            name="message"
            className="textarea-custom"
            rows="4"
            placeholder="Tu mensaje"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-custom">
          Enviar
        </button>
      </form>
      
      <div className="w-75 px-3 h-10  mt-3 rounded mx-auto" style={{ background: '#12229D' }}>
      <p className="text-center fs-6 fs-md-5 fs-lg-4 text-wrap text-white">
        ¿Tienes dudas, ideas o quieres unirte a nuestra causa? Estamos aquí para escucharte. Nuestro objetivo es construir una comunidad comprometida con la equidad digital, impulsando el acceso a internet como un derecho esencial para el desarrollo educativo y laboral.
      </p>
    </div>
      
    </div>
    </div>
    
    
  );
}

export default FormContacto;