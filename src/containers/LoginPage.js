import React, { Component } from 'react'
import firebase from '../backend/firebase'
// API
// import { createUserViaEmail } from '../actions/authedUser'

class LoginPage extends Component {
  state = {
    activeTab: 'Sign Up'
  }

  handleSignUp = (e) => {
    e.preventDefault()

    const auth = firebase.auth()

    const { firstName, lastName, email, password } = e.target.elements
  }

  // Handle tab switching (Sign Up and Sign In) on login panel
  handleTabs = (e) => {
    const tab = e.target.innerHTML

    this.setState(() => ({
      activeTab: tab
    }))
  }

  render() {
    const { activeTab } = this.state

    return (
      <div className='login-page'>
        <div className='title-container'>
          <h1 className='login-title'>newt</h1>
        </div>
        <div className='login-container'>
          { activeTab === 'Sign Up'
            ? <div className='login-panel'>
                <div className='login-panel--tabs'>
                  <div
                    className='login-tab left-tab active-tab'
                    onClick={ this.handleTabs }>
                      Sign Up
                  </div>
                  <div className='login-tab right-tab'
                    onClick={ this.handleTabs }>
                      Sign In
                  </div>
                </div>
                <div className='login-panel--header'>
                  <h3>Create an account</h3>
                </div>
                <div className='login-panel--body'>
                  <form className='login-form' onSubmit={ this.handleSignUp }>
                    <div className='login-form--group'>
                      <input
                        id='login-first-name'
                        name='firstName'
                        className='input'
                        type='text'
                        placeholder='First Name'
                      />
                      <input
                        id='login-last-name'
                        name='lastName'
                        className='input'
                        type='text'
                        placeholder='Last Name'
                      />
                    </div>
                    <input
                      id='login-email'
                      name='email'
                      className='input'
                      type='text'
                      placeholder='Email'
                    />
                    <input
                      id='login-password'
                      name='password'
                      className='input'
                      type='password'
                      placeholder='Password'
                    />
                    <button
                      className='button login-button'
                      type='submit'>
                        Submit
                    </button>
                  </form>
                </div>
              </div>
            : <div className='login-panel'>
                <div className='login-panel--tabs'>
                  <div className='login-tab left-tab'
                    onClick={ this.handleTabs }>
                      Sign Up
                  </div>
                  <div className='login-tab right-tab active-tab'
                    onClick={ this.handleTabs }>
                      Sign In
                  </div>
                </div>
                <div className='login-panel--header'>
                  <h3>Sign In</h3>
                </div>
                <div className='login-panel--body'>
                  <form className='login-form' onSubmit={ this.handleSignIn }>
                    <input
                      id='login-email'
                      name='email'
                      className='input'
                      type='text'
                      placeholder='Email'/>
                    <input
                      id='login-password'
                      name='password'
                      className='input'
                      type='password'
                      placeholder='Password'/>
                    <button
                      className='button login-button'
                      type='submit'>
                        Submit
                    </button>
                  </form>
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default LoginPage
