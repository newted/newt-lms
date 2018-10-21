import { Auth } from 'aws-amplify'

export const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

function requestAuthentication() {
  return {
    type: REQUEST_AUTHENTICATION
  }
}

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

export function createUserViaEmail(email, password, firstName, lastName) {
  return (dispatch) => {
    dispatch(requestAuthentication())

    return Auth.signUp({
      username: email,
      password: password
    })
      .then((data) => {
        console.log(data)

        const userInfo = {
          username: data.user.username,
          userId: data.userSub,
          // This info would actually be added to the Newt database
          name: {
            first: firstName,
            last: lastName
          },
          email: data.user.username,
          // This info should be added once user selects Institution
          enrolments: {
            BCIT: {
              databaseName: "bcit-students",
              name: "British Columbia Institute of Technology",
              studentId: "A01036028"
            }
          },
          currentInstitution: "BCIT"
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
    dispatch(requestAuthentication())

    return Auth.signIn(email, password)
      .then((user) => {
        console.log('User signed in', user)

        const userInfo = {
          username: user.signInUserSession.idToken.payload.email,
          userId: user.signInUserSession.idToken.payload.sub,
          // This info would actually be fetched from the Newt database
          name: {
            first: 'Nehal',
            last: 'Udyavar'
          },
          email: user.signInUserSession.idToken.payload.email,
          enrolments: {
            BCIT: {
              databaseName: "bcit-students",
              name: "British Columbia Institute of Technology",
              studentId: "A01036028"
            }
          },
          currentInstitution: "BCIT"
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
    dispatch(requestAuthentication())

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
    dispatch(requestAuthentication())

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
