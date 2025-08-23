import React from 'react'

function Respuesta({Fecha,mensaje_respuesta,nombreUsuario}) {
  return (
    <div>
        <div className='row'>
            <div className='col'>
                <p>{nombreUsuario}</p>
            </div>
            <div className='col'>
                <p>{Fecha}</p>
            </div>
        </div>
        <div className='row'>
            <p>{mensaje_respuesta}</p>
        </div>
    </div>
  )
}

export default Respuesta