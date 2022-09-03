import React from 'react'

import "../styles/ResultsList.css"
import ResultCard from './ResultCard'
// import data from '../data.js'

function ResultsList(props) {

  return (
    <section className="results-section">
      <ResultCard staticData={props.staticData} favorites={props.favorites} setFavorites={props.setFavorites}/>
    </section>
  )
}

export default ResultsList