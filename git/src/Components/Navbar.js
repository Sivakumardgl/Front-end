import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (

    <div className="head">
      <div className="logo">
      
      </div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/gallary"}>Gallary</NavLink>

      </div>
      <div>
        




      </div>
    </div>
  );
}