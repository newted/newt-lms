import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <aside className='sidebar'>
        <div className='sidebar-navlinks'>
          <ul>
            <li className='navlink'>
              <NavLink to='/' exact activeClassName='active-nav'>
                Dashboard
              </NavLink>
            </li>
            <li className='navlink'>
              <NavLink to='/courses' activeClassName='active-nav'>
                Courses
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}

export default Sidebar
