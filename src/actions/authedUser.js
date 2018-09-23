import newt from '../backend/newt'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CREATE_USER = 'CREATE_USER'

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
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
    return auth.createUserWithEmailAndPassword(email, password)
      .then(() => auth.onAuthStateChanged((user) => {
        console.log('On auth change:')
        if (user) {
          console.log('User logged in')
          user.updateProfile({
            displayName: firstName + ' ' + lastName,
            email: email
          }).then(() => auth.onAuthStateChanged((user) => {
            if (user) {
              dispatch(setAuthedUser(user.uid))
            }
          }))
        }
      }))
      .catch((error) => {
        console.log(error)
      })
  }
}
