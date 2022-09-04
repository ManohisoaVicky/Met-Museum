import React, {useState} from 'react'

import "../styles/ResultCard.css"

function ResultCard(props) {

  return (
    <>
      <div className='result-card' key={props.artKey}>
        <img src={props.src} alt={props.title} className="result-img"/>
        {/* <button className="fav" onClick={props.clickHandler}>Add to Favorite</button> */}
        
        <span className="material-symbols-outlined fav grow" onClick={props.clickHandler}>{props.icon}</span>
        {/* <span class="material-symbols-outlined">favorite</span> */}
        <div className='card-description'>
          <h4>{props.title}</h4>
          <p>{(props.displayName === "") ? (`Artist name not found`) : (`Made by ${props.displayName}`)}</p>
        </div>
      </div>
    </>
  )
}

export default ResultCard