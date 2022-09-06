import React from 'react'

function TicketInformation() {
  return (
    <div className='TicketInformation'>
      <div className='OpeningHours'>
        <h2>Opening Hours</h2>
        <p>
          <span>Hours:</span> 10 am–5 pm<br/>
          <span>Extended Hours:</span> Fri. and Sat., 10 am–9 pm<br/>
          <span>Closed:</span> Wednesday
        </p>
      </div>
      <div className='GeneralAdmissionTickets'>
        <h2>General Admission Tickets</h2>
        <p>$30 for adults; $22 for seniors; $17 for students.</p>
        <p>Free for Members, Patrons, and children under 12.</p>
        <p>To purchase general admission tickets in advance, choose one of the The Met locations.</p>
        <p>Admission is free for a caregiver accompanying a visitor with a disability.</p>
        <h3>New York State residents and NY, NJ, CT students:</h3>     
        <p>The amount you pay for tickets is up to you.</p>
        <p>If you wish to pay less than the general admission ticket prices, you may purchase your ticket at one of The Met’s locations with a valid ID. No advance reservations are required.</p>
      </div>
    </div>  
  )
}

export default TicketInformation