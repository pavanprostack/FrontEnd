import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="#" className='navbar-brand'>Product Navigation App</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-list'><Link to="home" className='nav-link'>Home</Link></li>
        </ul>
    </div>
  </nav>
  </>
}

export default Navbar
