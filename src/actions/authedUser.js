import { Auth } from 'aws-amplify'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER'
export const REQUEST_SIGN_IN_USER = 'REQUEST_SIGN_IN_USER'
export const REQUEST_SIGN_OUT_USER = 'REQUEST_SIGN_OUT_USER'
export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER'

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user
  }
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER
  }
}

function requestCreateUser() {
  return {
    type: REQUEST_CREATE_USER
  }
}

function requestSignInUser() {
  return {
    type: REQUEST_SIGN_IN_USER
  }
}

function requestSignOutUser() {
  return {
    type: REQUEST_SIGN_OUT_USER
  }
}

function requestCurrentUser() {
  return {
    type: REQUEST_CURRENT_USER
  }
}

export function createUserViaEmail(email, password, firstName, lastName) {
  return (dispatch) => {
    dispatch(requestCreateUser())

    return Auth.signUp({
      username: email,
      password: password
    })
      .then((user) => {
        console.log(user)

        const userInfo = {
          username: user.username,
          userId: user.sub
        }
        dispatch(setAuthedUser(userInfo))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function signInUserViaEmail(email, password) {
  return (dispatch) => {
    dispatch(requestSignInUser())

    return Auth.signIn(email, password)
      .then((user) => {
        console.log('User signed in', user)

        const userInfo = {
          username: user.username
        }
        dispatch(setAuthedUser(userInfo))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function retrieveCurrentUser() {
  return (dispatch) => {
    dispatch(requestCurrentUser())

    return Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)

        const userInfo = {
          username: user.username
        }
        dispatch(setAuthedUser(userInfo))
      })
      .catch((error) => {
        console.log(error)
        dispatch(removeAuthedUser())
      })
  }
}

export function signOutUser() {
  return (dispatch) => {
    dispatch(requestSignOutUser())

    Auth.signOut()
    .then((data) => {
      console.log(data)

      dispatch(removeAuthedUser())
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function signInDemoUser() {
  return (dispatch) => {
    const userInfo = {
      id: 'demouser',
      firstName: 'Demo',
      lastName: 'User',
      email: 'demouser@newt.com'
    }

    dispatch(setAuthedUser(userInfo))
  }
}
