import React from 'react'
import "../styles/FilterButton.css"

function FilterButton({ name, filter, setFilter }) {
  const [active, setActive] = React.useState(false);

  function handleClick(e) {
    if (!active) {
      setFilter(e.target.innerText)
      setActive((prevStatus) => (!prevStatus))
    } else {
      setFilter("")
      setActive((prevStatus) => (!prevStatus))      
    }
  }

  return (!active ?
    (<button className='FilterButton' onClick={handleClick}>{name}</button>)
  : (<button className='FilterButton active' onClick={handleClick}>{name}</button>)
  )
}

export default FilterButton