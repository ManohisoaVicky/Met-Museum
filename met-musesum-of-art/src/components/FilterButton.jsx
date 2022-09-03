import React from 'react'
import "../styles/FilterButton.css"

function FilterButton({ name }) {
  const [active, setActive] = React.useState(false);

  function changeStatus() {
    setActive((prevStatus) => (!prevStatus))
  }
  return (!active ?
    (<button className='FilterButton' onClick={changeStatus}>{name}</button>)
  : (<button className='FilterButton active' onClick={changeStatus}>{name}</button>)
  )
}

export default FilterButton