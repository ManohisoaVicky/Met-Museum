import React, {useState} from 'react'

import "../styles/ResultCard.css"

function ResultCard(props) {
 
  // const [favorite, setFavorite] = useState(false)

  // function favoriteHandler() {
  //   setFavorite((prev) => !prev)
  // }

  function addFavorite(art) {
    const favoriteList = [...props.favorites, art]
    props.setFavorites(favoriteList)
  }

  // props.setFavorites(1)

  return (
    <>
    {
    props.staticData.map((artwork) => {
      if (artwork.primaryImage !== "")
      return (
      <div className='result-card' key={artwork.objectID}>
        <img src={artwork.primaryImage} alt={artwork.title} className="result-img"/>
        <button className="fav" onClick={() => addFavorite(artwork)}>Add to Favorite</button>
        <div className='card-description'>
          <h4>{artwork.title}</h4>
          <p>{(artwork.artistDisplayName === "") ? (`Artist name not found`) : (`Made by ${artwork.artistDisplayName}`)}</p>
        </div>
      </div>)
    }
    )}
    </>
  )
}

export default ResultCard