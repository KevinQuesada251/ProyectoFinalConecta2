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
    <div className="contact-form-container">
  <div className="contact-header">
    
    <h1 className="contact-title">Contacto</h1>
  </div>

  
  <div className="contact-content">
    {/* Formulario */}
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
          placeholder="Tu mensaje es muy importante para nosotros."
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-custom">
        Enviar
      </button>
    </form>

    
  </div>
</div>

    
    
  );
}

export default FormContacto;