import React from 'react'
import "../styles/About.css"

function About() {
  return (
    <div className='About'>
      <h1>About</h1>
      <div className='ContactInfo'>
        <h2>Contact Us</h2>
        <hr/>
        <a href="mailto:onlinetickets@metmuseum.org">
          <p><span>Email: </span>onlinetickets@metmuseum.org</p>
        </a>
        <hr />
        <a href="tel:+">
          <p><span>Phone:</span> 212-535-7710</p>
        </a>
        <hr/>
        <a href="https://goo.gl/maps/p8imrWTqFA52DRoe6">
          <address>
            <p>
            <span>Address:</span>  
            1000 Fifth Avenue<br/>
            New York, NY 10028<br/>
            </p>
          </address>
        </a>
        <hr />
      </div>
      <div className='TicketInformation'>
        <div className='opening-hours'>
          <h2>Opening Hours</h2>
          <hr />
          <p><span>Hours:</span> 10 am–5 pm</p>
          <hr />
          <p><span>Extended Hours:</span> Fri. and Sat., 10 am–9 pm</p>
          <hr />
          <p><span>Closed:</span> Wednesday</p>
          <hr />
        </div>
        <div className='general-admissions'>
          <h2>General Admission Tickets</h2>
          <p>$30 for adults; $22 for seniors; $17 for students.</p>
          <p>Free for Members, Patrons, and children under 12.</p>
          <p>To purchase general admission tickets in advance, choose one of the The Met locations.</p>
          <p>Admission is free for a caregiver accompanying a visitor with a disability.</p>
          <div className='resident-admissions'> 
            <h3>New York State residents and NY, NJ, CT students:</h3>     
            <p>The amount you pay for tickets is up to you.</p>
            <p>If you wish to pay less than the general admission ticket prices, you may purchase your ticket at one of The Met’s locations with a valid ID. No advance reservations are required.</p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default About