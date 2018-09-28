import React, { Component } from 'react'
import { connect } from 'react-redux'
// API
import { signOutUser } from '../actions/authedUser'

class Navbar extends Component {
  // Method to handle signing out user
  handleSignOut = () => {
    const { dispatch } = this.props

    dispatch(signOutUser())
  }

  render() {
    return (
      <nav className='navbar-container'>
        <div className='navbar'>
          <div>Navbar</div>
          <button
            className='button logout-button'
            onClick={ this.handleSignOut }>
              Logout
          </button>
        </div>
      </nav>
    )
  }
}

export default connect()(Navbar)
