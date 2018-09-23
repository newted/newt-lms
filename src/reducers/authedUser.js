import {
  CREATE_USER,
  REQUEST_SIGN_IN_USER,
  SET_AUTHED_USER
} from '../actions/authedUser'

export default function authedUser(state = {
  isFetching: false,
  exists: false,
  items: {}
},
action
) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_SIGN_IN_USER:
      return {
        ...state,
        isFetching: true
      }
    case SET_AUTHED_USER:
      return {
        ...state,
        isFetching: false,
        exists: true,
        items: action.user
      }
    default:
      return state
  }
}
