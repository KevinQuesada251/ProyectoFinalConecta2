import React from 'react'

function Comentario({img, nombre, hora, comentario}) {
  return (
    <div>
        <div className='w-100 h-25 b-black' >
              <div className='row'>
                <div className='col'>{img}</div>
                <div className='col'>{nombre}</div>
                <div className='col'>{hora}</div>
              </div>
              <div className='row'>
                <div className='col'>{comentario}</div>
              </div>
        </div>
    </div>
  )
}

export default Comentario