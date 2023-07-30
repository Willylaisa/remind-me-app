import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <ul className='--navbar'>
            <li>
                <h1>Remind Me</h1> 
            </li>
            <li>               
                <Link to='/logout' className='list-item'><h3>logout</h3></Link>                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar