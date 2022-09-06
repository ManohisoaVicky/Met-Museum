import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"

function Home() {
  return (
    <div className='Home'>
      <div className='hero-cover'>
      <h1>Metropolitan Museum of Art</h1>
      <h2>Subtitle</h2>
      <Link to="/library">
        <button>Explore Library</button>
      </Link>
      </div>
    </div>
  )
}

export default Home