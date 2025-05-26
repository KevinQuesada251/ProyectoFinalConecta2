import React from 'react'
import Nav from '../components/Nav'
import FormContacto from '../components/FormContacto'
import InfoContacto from '../components/InfoContacto'
import Footer from '../components/Footer'
function Contacto() {

    return (
        <div>
            <Nav />
            <div className='container-main'>
                <FormContacto />
                <InfoContacto />
            </div>
            <Footer />
        </div>
    )
}

export default Contacto