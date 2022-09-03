import React from 'react'

import "../styles/ResultCard.css"

function ResultCard({data}) {

  console.log(data)

  return (
    <>
    {
    data.map((artwork) => {
    return (<div className='result-card' key={artwork.objectID}>
      <img src={artwork.primaryImage} alt={artwork.title} className="result-img"/>
      <p>{artwork.title}</p>
    </div>)
    }
    )}
    </>
  )
}

export default ResultCard