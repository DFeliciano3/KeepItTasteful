import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/recipes">Recipes</NavLink>
        <NavLink exact to="/recipes/new">Add New Recipe</NavLink>
        <NavLink exact to="/about">About</NavLink>
    </div>
  )
}

export default Navbar