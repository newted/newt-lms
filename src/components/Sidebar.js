import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// Icons
import { MdDashboard } from 'react-icons/md'
import { FiBook } from 'react-icons/fi'
import { IoIosSchool } from 'react-icons/io'
import { TiPencil } from 'react-icons/ti'

class Sidebar extends Component {
  render() {
    return (
      <aside className='sidebar'>
        <div className='sidebar-navlinks'>
          <ul>
            <li className='navlink'>
              <NavLink to='/' exact activeClassName='active-nav'>
                <div className='navlink--row'>
                  <MdDashboard className='navlink--icon' size={ 20 }/>
                  <div>Dashboard</div>
                </div>
              </NavLink>
            </li>
            <li className='navlink'>
              <NavLink to='/courses' activeClassName='active-nav'>
                <div className='navlink--row'>
                  <FiBook className='navlink--icon' size={ 20 }/>
                  <div>Courses</div>
                </div>
              </NavLink>
            </li>
            <li className='navlink'>
              <NavLink to='/assignments' activeClassName='active-nav'>
                <div className='navlink--row'>
                  <IoIosSchool className='navlink--icon' size={ 20 }/>
                  <div>Assignments</div>
                </div>
              </NavLink>
            </li>
            <li className='navlink'>
              <NavLink to='/quizzes' activeClassName='active-nav'>
                <div className='navlink--row'>
                  <TiPencil className='navlink--icon' size={ 20 }/>
                  <div>Quizzes</div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}

export default Sidebar
