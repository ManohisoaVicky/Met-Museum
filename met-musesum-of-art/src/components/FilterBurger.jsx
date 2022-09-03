import React from 'react'
import "../styles/FilterBurger.css"

function FilterBurger({ status, changeStatus }) {

  return (!status ? 
    (<div className='FilterBurger close' onClick={changeStatus}>
        <div className='bar-1'></div>
        <div className='bar-2'></div>
        <div className='bar-3'></div>
    </div>)
    :
    (<div className='FilterBurger open' onClick={changeStatus}>
        <div className='bar-1'></div>
        <div className='bar-2'></div>        
        <div className='bar-3'></div>
    </div>)
  )
}

export default FilterBurger