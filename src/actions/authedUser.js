import newt from '../backend/newt'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CREATE_USER = 'CREATE_USER'

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
        console.log('On auth change:')
        if (user) {
          console.log('User logged in')
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
