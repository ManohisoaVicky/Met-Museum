import React from 'react'

import "../styles/ResultsList.css"
import ResultCard from './ResultCard'
// import data from '../data.js'

function ResultsList(props) {

  function addFavorite(art) {
    const favoriteList = [...props.favorites, art]
    const noDuplicateList = [...new Set(favoriteList)]
    props.setFavorites(noDuplicateList)
  }

  function loadMore() {
    props.setLoad((prev) => prev + 10)
  }

  console.log("props.artwork", props.artwork)

  return (
    <>
    <section className="results-section">
      { props.artwork ?
        props.artwork.map((art) => {
          if (art.primaryImage !== "") {
            return (
              <ResultCard staticData={props.staticData} favorites={props.favorites} setFavorites={props.setFavorites} reviews={props.reviews} setReviews={props.setReviews} artKey={art.objectID} src={art.primaryImage} title={art.title} displayName={art.artistDisplayName}
              clickHandler={() => addFavorite(art)} key={art.objectID} icon={"favorite"}
              />
            )
          }
        }) :
      <>Creating Artwork 🎨</>}
    </section>
    <p className='load-button' onClick={loadMore} >Load More</p>
    </>
  )
}



export default ResultsList