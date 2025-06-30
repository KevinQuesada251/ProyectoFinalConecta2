// src/components/FormContacto.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function FormContacto() {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lb9k21w',       // reemplaza con el tuyo
      'template_qn6m14u',      // reemplaza con el tuyo
      form.current,
      '6LJdjxAV4b1LUCc43'        // reemplaza con el tuyo
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
    <div className="w-75 px-3 rounded mx-auto py-4" style={{ background: '#12229D' }}>
      <h1 className="text-white mb-4 text-center">Contacto</h1>
      <form ref={form} onSubmit={enviarCorreo}>
        <div className="mb-3">
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Tu mensaje"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormContacto;
