import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import "../styles/Header.css"

function Header() {
  return (
    <header className='Header'>
        <Link to="/" className='logo-link'>
            <div className='logo'>Logo</div>
        </Link>
        <nav>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/library">Library</CustomLink>
                <CustomLink to="/favorites">Favorites</CustomLink>
                <CustomLink to="/detailed">Detailed</CustomLink>
            </ul>
        </nav>
    </header>
  )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const active = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={active? "active": ""}>
            <Link to={to} {... props} className="nav-link">
                {children}
            </Link>
        </li>
    )
}

export default Header