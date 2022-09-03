import React from 'react'

import ResultCard from '../components/ResultCard'
import "../styles/Favourites.css"

function Favorites(props) {
  return (
    <div className=".favorites">
      <h1>Favorites</h1>
      <section className="favorite-section">
      <ResultCard staticData={props.favorites}/>
      </section>
    </div>
  )
}

export default Favorites