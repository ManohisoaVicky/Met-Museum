import React from 'react'
import "../styles/FilterButton.css"

function FilterButton({ name, filter, setFilter }) {
  const [active, setActive] = React.useState(false);

  function handleClick(e) {
    if (!active) {
      setFilter((prevFilter) => (prevFilter.push(e.target.innerText)))
      setActive((prevStatus) => (!prevStatus))
      console.log(filter)
      console.log(filter.join())
    } else {
      setFilter((prevFilter) => (prevFilter.filter((filter) => filter !== e.target.innerText)))
      setActive((prevStatus) => (!prevStatus))
      console.log(filter)      
      console.log(filter.join())
    }
  }

  return (!active ?
    (<button className='FilterButton' onClick={handleClick}>{name}</button>)
  : (<button className='FilterButton active' onClick={handleClick}>{name}</button>)
  )
}

export default FilterButton