import React from 'react'
import "../styles/ContactInfo.css"

function ContactInfo() {
  return (
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
  )
}

export default ContactInfo