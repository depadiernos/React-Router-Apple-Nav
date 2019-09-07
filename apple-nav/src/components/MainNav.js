import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import SubNav from './SubNav'
import Home from './Home'
import About from './About'
import { nav } from '../utils/menu-data'

export default function () {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/motorcycles">Motorcycles</NavLink>
        <NavLink to="/trucks">Trucks</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/cars" render={props => <SubNav {...props} pathname={"cars"} navItems={nav.cars} />} />
      <Route path="/motorcycles" render={props => <SubNav {...props} pathname={"motorcycles"} navItems={nav.motorcycles} />} />
      <Route path="/trucks" render={props => <SubNav {...props} pathname={"trucks"} navItems={nav.trucks} />} />
      <Route path="/about" component={About} />
    </div>
  )
}