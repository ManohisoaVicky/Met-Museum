import React from 'react'

function ContactInfo() {
  return (
    <div className='ContactInfo'>
      <a href="mailto:onlinetickets@metmuseum.org"><span>Email: </span>onlinetickets@metmuseum.org</a>
      <br/>
      <a href="tel:+"><span>Phone:</span> 212-535-7710</a>
      <br/>
      <a href="https://goo.gl/maps/p8imrWTqFA52DRoe6">
        <address>
          1000 Fifth Avenue<br/>
          New York, NY 10028<br/>
        </address>
      </a>
    </div>
  )
}

export default ContactInfo