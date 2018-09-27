import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar-container'>
        <div className='navbar'>
          <div>Navbar</div>
          <button className='button logout-button'>Logout</button>
        </div>
      </nav>
    )
  }
}

export default Navbar
