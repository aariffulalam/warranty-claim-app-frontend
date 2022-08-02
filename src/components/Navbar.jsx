import React from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css"

const Navbar = () => {
  return (
    <header className='navbar' style={{backgroundColor:"black", height:"3rem", margin:0}}>
        <nav>
            <ul style={{backgroundColor:"black",  margin:"0" }}>
                <button className='li' style={{backgroundColor:"black"}}>
                    <Link to="/" className='link'>Home</Link>
                </button>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar