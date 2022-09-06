import React from 'react'
import ContactInfo from '../components/ContactInfo'
import TicketInformation from '../components/TicketInformation'
import "../styles/About.css"

function About() {
  return (
    <div className='About'>
        <h1>About</h1>
        <ContactInfo />
        <TicketInformation />   
    </div>
  )
}

export default About