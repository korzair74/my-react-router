import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
  return (

    <div className="Nav">
      <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>

          <NavLink to="/About" activeClassName="nav-link-active">
            About
          </NavLink>

          <NavLink to="/Contact" activeClassName="nav-link-active">
            Contact
          </NavLink>

          <NavLink to="/Blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
      </div>

  )};
}


