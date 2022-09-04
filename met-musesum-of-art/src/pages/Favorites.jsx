import React from 'react'

import ResultCard from '../components/ResultCard'
import "../styles/Favourites.css"

function Favorites(props) {
  return (
    <div className=".favorites">
      <h1>Favorites</h1>
      <section className="favorite-section">
        {
          (props.favorites.length === 0) ? 
          (<h3>No Favorites</h3>) :
          (props.favorites.map(artwork => {
            return (
              <ResultCard favorites={props.favorites} setFavorites={props.setFavorites} artKey={artwork.objectID} 
              src={artwork.primaryImage} title={artwork.title} key={artwork.GalleryNumber}/>
            )
          }))
        }
      
      </section>
    </div>
  )
}

export default Favorites