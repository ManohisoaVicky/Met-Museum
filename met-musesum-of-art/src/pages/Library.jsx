import React from 'react'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

function Library() {

  return (
    <div>
      <h1>Library</h1>
      <SearchBar />
      <ResultsList />
    </div>
  )
}

export default Library