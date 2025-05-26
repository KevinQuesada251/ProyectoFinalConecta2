import React from 'react'
import Map from '../components/Map'
import Nav from '../components/Nav'
import SideBarMap from '../components/SideBarMap'
import '../styles/mapaPage.css'
function MapPage() {
  return (
    <div>
      <Nav/>
      <div className='Container-Map-Page'>
        <SideBarMap />
        <section className='mapita'>
          <Map />
        </section>
      </div>
    </div>
  )
}

export default MapPage