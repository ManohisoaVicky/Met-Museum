import React from 'react'
import ContactInfo from '../components/ContactInfo'
import ImageViewer from '../components/ImageViewer'
import Map from '../components/Map'

function About() {
  return (
    <div>
        <h1>About</h1>
        <ImageViewer />
        <ContactInfo />
        <Map />    
    </div>
  )
}

export default About