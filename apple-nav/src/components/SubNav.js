import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import NavItem from './NavItem'


export default function (props) {
  console.log(props)
  return (
    <div>
      <nav>
        {(props) && props.navItems.map((navItem) => {
          return (
            <NavLink key={navItem.id} to={`/${props.pathname}/${navItem.id}`}>{navItem.model}</NavLink>
          )
        })}
      </nav>
      {(props) && props.navItems.map((navItem) => {
        return (
          <Route key={navItem.id} path={`/${props.pathname}/${navItem.id}`} render={(props) => <NavItem {...props} details={navItem} />} />
        )
      })}
    </div>
  )
}