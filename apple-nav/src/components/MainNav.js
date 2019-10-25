import React from "react"
import { Route, NavLink } from "react-router-dom"
import styled from "styled-components"
import SubNav from "./SubNav"
import Home from "./Home"
import About from "./About"
import { nav } from "../utils/menu-data"

const MainNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  a {
    padding: 1rem;
  }
`

export default function() {
  return (
    <div>
      <MainNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/motorcycles">Motorcycles</NavLink>
        <NavLink to="/trucks">Trucks</NavLink>
        <NavLink to="/about">About</NavLink>
      </MainNav>
      <Route path="/" exact component={Home} />
      <nav>
        <Route
          path="/cars"
          render={(props) => (
            <SubNav {...props} pathname={"cars"} navItems={nav.cars} />
          )}
        />
        <Route
          path="/motorcycles"
          render={(props) => (
            <SubNav
              {...props}
              pathname={"motorcycles"}
              navItems={nav.motorcycles}
            />
          )}
        />
        <Route
          path="/trucks"
          render={(props) => (
            <SubNav {...props} pathname={"trucks"} navItems={nav.trucks} />
          )}
        />
      </nav>
      <Route path="/about" component={About} />
    </div>
  )
}
