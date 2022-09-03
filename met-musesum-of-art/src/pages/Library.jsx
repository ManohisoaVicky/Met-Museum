import React from 'react'

import Search from '../components/Search'
import ResultsList from '../components/ResultsList'
import "../styles/Library.css"

function Library() {

  return (
    <div className="Library">
      <h1>Library</h1>
      <Search />
      <ResultsList />
    </div>
  )
}

export default Library