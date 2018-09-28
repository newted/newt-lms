import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// API
import {
  createUserViaEmail,
  signInUserViaEmail,
  signInDemoUser
} from '../actions/authedUser'

class LoginPage extends Component {
  state = {
    activeTab: 'Sign In'
  }

  // Handle account creation
  handleSignUp = (e) => {
    e.preventDefault()

    const { dispatch } = this.props
    const { firstName, lastName, email, password } = e.target.elements

    // Create new user
    dispatch(createUserViaEmail(
      email.value,
      password.value,
      firstName.value,
      lastName.value
    ))
  }

  // Handle signing in
  handleSignIn = (e) => {
    e.preventDefault()

    const { dispatch } = this.props
    const { email, password } = e.target.elements

    // Sign In user
    dispatch(signInUserViaEmail(email.value, password.value))
  }

  // Handle Demo sign in
  handleDemoSignIn = () => {
    const { dispatch } = this.props

    dispatch(signInDemoUser())
  }

  // Handle tab switching (Sign Up and Sign In) on login panel
  handleTabs = (e) => {
    const tab = e.target.innerHTML

    this.setState(() => ({
      activeTab: tab
    }))
  }

  componentDidMount() {
    const { authedUser } = this.props
    console.log(authedUser)
  }

  render() {
    const { activeTab } = this.state
    const { authedUser } = this.props

    if (authedUser.exists) {
      return <Redirect to='/' />
    }

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
                  <div style={{ display: 'flex', justifyContent: 'center' }}>OR</div>
                  <button
                    className='button login-button'
                    onClick={ this.handleDemoSignIn }>
                      Demo Sign In
                  </button>
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(LoginPage)
