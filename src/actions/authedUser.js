import newt from '../backend/newt'
import newtDb from '../backend/newtDb'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'
export const CREATE_USER = 'CREATE_USER'
export const REQUEST_SIGN_IN_USER = 'REQUEST_SIGN_IN_USER'
export const REQUEST_SIGN_OUT_USER = 'REQUEST_SIGN_OUT_USER'

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

function createUser() {
  return {
    type: CREATE_USER
  }
}

export function createUserViaEmail(email, password, firstName, lastName) {
  const auth = newt.auth()

  return (dispatch) => {
    dispatch(createUser())

    return auth.createUserWithEmailAndPassword(email, password)
      .then(() => auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('User signed up')
          // add name and email to user profile
          user.updateProfile({
            displayName: firstName + ' ' + lastName,
            email: email
          }).then(() => auth.onAuthStateChanged((user) => {
            if (user) {
              const name = user.displayName

              const userInfo = {
                id: user.uid,
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1],
                email: user.email
              }
              // Dispatch info to store
              dispatch(setAuthedUser(userInfo))

              // Add data to Newt User database
              newtDb.collection('users').doc(user.uid).set({
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1],
                id: user.uid,
                email: user.email
              })
            }
          }))
        }
      }))
      .catch((error) => {
        console.log(error)
      })
  }
}

function requestSignInUser() {
  return {
    type: REQUEST_SIGN_IN_USER
  }
}

export function signInUserViaEmail(email, password) {
  const auth = newt.auth()

  return (dispatch) => {
    dispatch(requestSignInUser())

    return auth.signInWithEmailAndPassword(email, password)
      .then(() => auth.onAuthStateChanged((user) => {
        console.log('User signed in')
        if (user) {
          const name = user.displayName

          const userInfo = {
            id: user.uid,
            firstName: name.split(' ')[0],
            lastName: name.split(' ')[1],
            email: user.email
          }

          dispatch(setAuthedUser(userInfo))
        }
      }))
      .catch((error) => {
        console.log(error)
      })
  }
}

function requestSignOutUser() {
  return {
    type: REQUEST_SIGN_OUT_USER
  }
}

export function signOutUser() {
  const auth = newt.auth()

  return (dispatch) => {
    dispatch(requestSignOutUser())

    auth.signOut()
    .then(() => auth.onAuthStateChanged(() => {
      console.log('User signed out')

      dispatch(removeAuthedUser())
    }))
    .catch((error) => {
      console.log(error)
    })
  }
}
