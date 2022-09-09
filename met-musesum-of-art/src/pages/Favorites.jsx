import React from 'react'

import ResultCard from '../components/ResultCard'
import "../styles/Favourites.css"

function Favorites(props) {

  function removeFavorite(index) {
    const newFavList = [...props.favorites.slice(0, index), ...props.favorites.slice(index + 1)]
    props.setFavorites(newFavList)
  }

  return (
    <div className="Favorites">
      <h1>Favorites</h1>
      <p>All of your favorite artwork, in one place.</p>
      <section className="favorite-section">
        {
          (props.favorites.length === 0) ? 
          (<h3>No Favorites</h3>) :
          (props.favorites.map((artwork, index) => {
            return (
              <ResultCard favorites={props.favorites} setFavorites={props.setFavorites} artKey={artwork.objectID} 
              src={artwork.primaryImage} title={artwork.title} key={artwork.GalleryNumber} icon={"delete"} displayName={artwork.artistDisplayName}
              clickHandler={() => removeFavorite(index)} />
            )
          }))
        }
      
      </section>
    </div>
  )
}

export default Favorites