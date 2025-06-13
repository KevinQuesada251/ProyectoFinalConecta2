import React from 'react'

function Comentario({ gravedad, fecha, hora, anuncio, responder}) {
  return (
    <div>
        <div className='w-75 h-100 border border-dark' >

              <div className='row'>
                <div className='col'>{fecha} {hora}</div>
                <div className='col'>{gravedad}</div>
              </div>
              <div className='row'>
                <div className='col'>{anuncio}</div>
              </div>
              <div className='row'><button onClick={responder}>Responder</button></div>
        </div>
    </div>
  )
}

export default Comentario