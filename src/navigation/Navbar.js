import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navBar'>
        <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/recipes">Recipes</NavLink>
        <NavLink exact to="/recipes/new">Add New Recipe</NavLink>
        <NavLink exact to="/about">About</NavLink>
        </nav>
       
    </div>
  )
}

export default Navbar