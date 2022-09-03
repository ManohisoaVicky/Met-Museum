import React from 'react'

import "../styles/ResultsList.css"
import ResultCard from './ResultCard'
import data from '../data.js'

function ResultsList() {

  console.log(data)

  return (
    <section className="results-section">
      <ResultCard data={data}/>
    </section>
  )
}

export default ResultsList