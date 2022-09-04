import React from 'react'

import "../styles/ResultsList.css"
import ResultCard from './ResultCard'
// import data from '../data.js'

function ResultsList(props) {

  function addFavorite(art) {
    const favoriteList = [...props.favorites, art]
    props.setFavorites(favoriteList)
  }

  return (
    <section className="results-section">
      {
        props.staticData.map((artwork) => {
          if (artwork.primaryImage !== "")
          return (
            <ResultCard staticData={props.staticData} favorites={props.favorites} setFavorites={props.setFavorites}
            artKey={artwork.objectID} src={artwork.primaryImage} title={artwork.title} displayName={artwork.artistDisplayName}
            clickHandler={() => addFavorite(artwork)} key={artwork.objectID}
            />
          )
        })
      }
    </section>
  )
}



export default ResultsList