import newt from '../backend/newt'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CREATE_USER = 'CREATE_USER'
export const REQUEST_SIGN_IN_USER = 'REQUEST_SIGN_IN_USER'

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user
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
              dispatch(setAuthedUser(userInfo))
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
