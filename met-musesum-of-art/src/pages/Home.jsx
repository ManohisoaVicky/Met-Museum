import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <Link to="/library">
        <button>Got to Library</button>
      </Link>
    </div>
  )
}

export default Home