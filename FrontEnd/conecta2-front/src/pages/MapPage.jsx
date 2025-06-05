import React from 'react'
import Map from '../components/Map'
import Nav from '../components/Nav'
import SideBarMap from '../components/SideBarMap'
import '../styles/mapaPage.css'
function MapPage() {
  return (
    <div style={{background:'#CAE8FF'}}>
      <Nav />
      <div className='row'>
        <div className='col'>
          <SideBarMap />
        </div>
        <div className='col'>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default MapPage