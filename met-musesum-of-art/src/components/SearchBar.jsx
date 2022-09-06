import React from 'react'
import "../styles/SearchBar.css"

function SearchBar(props) {


  return (
    <>
      <input onChange={(event) => props.setSearch(event.target.value)} className='SearchBar' type="text" placeholder='Search'/>
      <span onClick={() => {}} className="material-symbols-outlined">search</span>
    </>
  )
}

export default SearchBar