import React from 'react'
import Nav from '../components/Nav'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
        <Nav/>
        <MainHome/>
        <div className='cont-footer'>
        <Footer/>
        </div>

    </div>
  )
}

export default Home