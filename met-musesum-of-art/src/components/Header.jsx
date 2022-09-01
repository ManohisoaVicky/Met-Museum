import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"

function Header() {
  return (
    <header className='Header'>
        <div className='logo'>Logo</div>
        <nav>
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/about">
                <span>About</span>            
            </Link>
            <Link to="/library">
                <span>Library</span>            
            </Link>
            <Link to="/favorites">
                <span>Favorites</span>            
            </Link>
        </nav>
    </header>
  )
}

export default Header