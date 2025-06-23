import React from 'react'
import Grafico from './Graficos'
import GraficoEdad from './GraficoEdad'
import GraficoProvincias from './GraficoProvincias'

function Dashboard() {
  return (
    <div className='container'>
        <div className='row w-100 border border-dark'>
            <h1 className='text-center'>Dashboard</h1>
        </div>

        <div className='row w-100'>
            <div className='col w-50 border border-dark'><Grafico/></div>
            <div className='col w-50 border border-dark'><GraficoEdad/></div>
        </div>

        <div className='row w-100 border border-dark'>
            <GraficoProvincias/>
        </div>
    </div>
  )
}

export default Dashboard