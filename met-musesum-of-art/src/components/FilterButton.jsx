import React from 'react'
import "../styles/FilterButton.css"

function FilterButton({ name, filter, setFilter, setArtwork }) {
  const [active, setActive] = React.useState(false);

  function handleClick(e) {
    if (!active) {
      setFilter([...filter, e.target.innerText])
      setArtwork([])
      setActive(!active)
    } else {
      setFilter([...filter.filter((f) => {return f !== e.target.innerText})])
      setArtwork([])
      setActive(!active)
    }
  }

  return (!active ?
    (<button className='FilterButton' onClick={handleClick}>{name}</button>)
  : (<button className='FilterButton active' onClick={handleClick}>{name}</button>)
  )
}

export default FilterButton