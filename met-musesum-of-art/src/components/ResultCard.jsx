import React from 'react'
import { Link} from 'react-router-dom'

import "../styles/ResultCard.css"

function ResultCard(props) {

  return (
    <>
    <div className='result-card' >
      {(props.favorites.map((art) => (art.objectID)).includes(props.artKey)) ? 
      <span className="material-symbols-outlined fav grow active" onClick={props.clickHandler}>{props.icon}</span> : 
      <span className="material-symbols-outlined fav grow" onClick={props.clickHandler}>{props.icon}</span>
      }
    <Link to={`/detailed/${props.artKey}`} key={props.artKey} id={props.artKey}> 
        <img src={props.src} alt={props.title} className="result-img"/>
        <div className='card-description'>
          <h4>{props.title}</h4>
          <p>{(props.displayName === "") ? (`Artist name not found`) : (`Made by ${props.displayName}`)}</p>
        </div>
    </Link>
      </div>
    </>
  )
}

export default ResultCard