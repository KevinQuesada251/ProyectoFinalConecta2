import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import FormContacto from '../components/FormContacto'
import InfoContacto from '../components/InfoContacto'
import Footer from '../components/Footer'
import '../styles/contactmain.css'

function Contacto() {
  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Manejo de cambios en inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío
    setTimeout(() => {
      console.log('Formulario enviado:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        })
        setSubmitStatus('')
      }, 3000)
    }, 1500)
  }

  // Componente de mensaje de éxito
  const SuccessMessage = () => (
    <div className="success-message">
      <div className="success-icon">✓</div>
      <h3 className="success-title">¡Mensaje enviado!</h3>
      <p className="success-text">Te contactaremos pronto.</p>
    </div>
  )

  // Datos de contacto
  const contactInfo = [
    {
      icon: '📍',
      title: 'Ubicación',
      content: 'Desamparados, San José, CR',
      link: 'https://maps.google.com/?q=Desamparados,San+José,Costa+Rica'
    },
    {
      icon: '🕐',
      title: 'Horario',
      content: 'L-V: 8AM-6PM\nSáb: 9AM-2PM'
    },
    {
      icon: '⚡',
      title: 'Soporte 24/7',
      content: 'Emergencias técnicas',
      link: 'tel:+50620000001'
    }
  ]

  return (
    <div className="contacto-container">
      <Nav />
      
      <div className="container">
        {/* Header */}
        <div className="contacto-header">
          <h1 className="contacto-title">Contáctanos</h1>
          <p className="contacto-subtitle">
            Explora y contribuye con información sobre conectividad en tu zona
          </p>
        </div>

        <div className="row justify-content-center">
          {/* Formulario */}
          <div className="col-12 col-lg-5 mb-4">
            <div className="contacto-card">
              <h2 className="contacto-card-title">Envíanos un Mensaje</h2>
              
              {submitStatus === 'success' ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="contacto-form">
                  {/* Fila 1: Nombre y Teléfono */}
                  <div className="form-row">
                    <div className="form-group form-group-half">
                      <input
                        type="text"
                        name="nombre"
                        className="form-input"
                        placeholder=" "
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="form-label">Nombre completo</label>
                    </div>

                    <div className="form-group form-group-half">
                      <input
                        type="tel"
                        name="telefono"
                        className="form-input"
                        placeholder=" "
                        value={formData.telefono}
                        onChange={handleInputChange}
                      />
                      <label className="form-label">Teléfono</label>
                    </div>
                  </div>

                  {/* Fila 2: Asunto */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="asunto"
                      className="form-input"
                      placeholder=" "
                      value={formData.asunto}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-label">Asunto</label>
                  </div>

                  {/* Fila 3: Mensaje */}
                  <div className="form-group">
                    <textarea
                      name="mensaje"
                      className="form-input form-textarea"
                      placeholder=" "
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows="4"
                      required
                    />
                    <label className="form-label">Mensaje</label>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Información de contacto */}
          <div className="col-12 col-lg-5 mb-4">
            <div className="contacto-card">
              <h2 className="contacto-card-title">Información.</h2>
              
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h5>{item.title}</h5>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="info-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <p>{item.content}</p>
                      </a>
                    ) : (
                      <p style={{whiteSpace: 'pre-line'}}>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contacto