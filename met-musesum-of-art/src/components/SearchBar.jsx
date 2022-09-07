import React from 'react'
import "../styles/SearchBar.css"

function SearchBar(props) {

  function handleChange(event) {
    props.setSearch(event.target.value)
    props.setLoad(10)
    props.setArtwork([])
  }    

  return (
    <>
      {/* <input onChange={(event) => (props.setSearch(event.target.value)) && (props.setLoad(10)) && (props.setArtwork([]))} className='SearchBar' type="text" placeholder='Search'/> */}
      <input onChange={(event) => handleChange(event)} className='SearchBar' type="text" placeholder='Search'/>
    </>
  )
}

export default SearchBar