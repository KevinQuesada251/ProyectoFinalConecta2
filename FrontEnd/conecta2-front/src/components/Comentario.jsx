import React from 'react'

function Comentario({ gravedad, fecha, hora, anuncio}) {
  return (
    <div>
        <div className='w-100 h-25 b-black' >

              <div className='row'>
                <div className='col'>{fecha} {hora}</div>
                <div className='col'>{gravedad}</div>
              </div>
              <div className='row'>
                <div className='col'>{anuncio}</div>
              </div>
        </div>
    </div>
  )
}

export default Comentario