import React from 'react'

function Anuncio({ hora, fecha, gravedad, texto }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ fontWeight: 'bold', color: '#333' }}>{gravedad}</div>
        <div style={{ fontSize: '0.9em', color: '#666' }}>
          {fecha} {hora}
        </div>
      </div>
      <div style={{ color: '#444' }}>
        {texto}
      </div>
    </div>
  )
}

export default Anuncio
