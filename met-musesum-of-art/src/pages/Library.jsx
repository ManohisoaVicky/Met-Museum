import React from 'react'

import Search from '../components/Search'
import ResultsList from '../components/ResultsList'
import "../styles/Library.css"

function Library(props) {

  return (
    <div className="Library">
      <h1>Library</h1>
      <p>Explore the works of Art . . .</p>
      <Search search={props.search} setSearch={props.setSearch} filter={props.filter} setFilter={props.setFilter} load={props.load} setLoad={props.setLoad} setArtwork={props.setArtwork}/>
      <ResultsList artwork={props.artwork} favorites={props.favorites} setFavorites={props.setFavorites} reviews={props.reviews} setReviews={props.setReviews}
      load={props.load} setLoad={props.setLoad} />
    </div>
  )
}

export default Library