import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"

function Home() {
  return (
    <div className='Home'>
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <Link to="/library">
        <button>Got to Library</button>
      </Link>
    </div>
  )
}

export default Home