import React from 'react'
import SearchBar from '../components/SearchBar';
import FilterBurger from '../components/FilterBurger';
import FilterButton from "../components/FilterButton";
import "../styles/Search.css";

function Search(props) {
  
  const [active, setActive] = React.useState(false);
  const options = ["Paintings", "Sculpture", "Drawings", "Ceramics", "Textiles", "Furniture"]

  function changeStatus() {
    setActive((prevStatus) => (!prevStatus))
  }


  return (
    <div className='Search'>
        <SearchBar search={props.search} setSearch={props.setSearch} load={props.load} setLoad={props.setLoad} setArtwork={props.setArtwork}/>
        <FilterBurger status={active} changeStatus={changeStatus} filter={props.filter} setFilter={props.setFilter}/>
        {active && 
            (<>
                {options.map((option, index) => {
                  return <FilterButton key={index} name={option} filter={props.filter} setFilter={props.setFilter} setArtwork={props.setArtwork} load={props.load} setLoad={props.setLoad}/>
                  })
                }          
            </>)
        }
    </div>
  )
}

export default Search