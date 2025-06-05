import React from 'react'
import Nav from '../components/Nav'
import FormContacto from '../components/FormContacto'
import InfoContacto from '../components/InfoContacto'
import Footer from '../components/Footer'
import '../styles/contactmain.css'

function Contacto() {
  return (
    <div style={{background:'#CAE8FF'}}>
      <Nav />
      <div className='container-fluid text-center mt-4'>
        <div className='row'>
          <div className='col-12 col-md-6 mb-3'>
            <FormContacto />
          </div>
          <div className='col-12 col-md-6 mb-3 mx-auto'>
            <InfoContacto />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;