import React from 'react'

import Search from '../components/Search'
import ResultsList from '../components/ResultsList'
import "../styles/Library.css"

function Library(props) {

  return (
    <div className="Library">
      <h1>Library</h1>
      <Search />
      <ResultsList staticData={props.staticData} favorites={props.favorites} setFavorites={props.setFavorites}/>
    </div>
  )
}

export default Library