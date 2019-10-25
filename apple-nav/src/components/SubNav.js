import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavItem from './NavItem'


const SubNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  a {
    padding: 1rem;
  }
`

export default function (props) {
  console.log(props)
  return (
    <div>
      <SubNav>
        {(props) && props.navItems.map((navItem) => {
          return (
            <NavLink key={navItem.id} to={`/${props.pathname}/${navItem.id}`}>{navItem.model}</NavLink>
          )
        })}
      </SubNav>
      {(props) && props.navItems.map((navItem) => {
        return (
          <Route key={navItem.id} path={`/${props.pathname}/${navItem.id}`} render={(props) => <NavItem {...props} details={navItem} />} />
        )
      })}
    </div>
  )
}