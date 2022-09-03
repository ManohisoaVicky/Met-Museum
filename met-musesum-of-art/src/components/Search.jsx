import React from 'react'
import SearchBar from '../components/SearchBar';
import FilterBurger from '../components/FilterBurger';
import FilterButton from "../components/FilterButton";
import "../styles/Search.css";

function Search() {
  
  const [active, setActive] = React.useState(false);
  const options = ["Paintings", "Sculptures", "Drawings", "Blah Blah Blah"]

  function changeStatus() {
    setActive((prevStatus) => (!prevStatus))
  }


  return (
    <div className='Search'>
        <SearchBar/>
        <FilterBurger status={active} changeStatus={changeStatus}/>
        {active && 
            (<>
                {options.map((option, index) => {
                  return <FilterButton key={index} name={option}/>
                  })
                }          
            </>)
        }
    </div>
  )
}

export default Search