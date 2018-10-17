import {
  REQUEST_CREATE_USER,
  REQUEST_SIGN_IN_USER,
  REQUEST_SIGN_OUT_USER,
  REQUEST_CURRENT_USER,
  SET_AUTHED_USER,
  REMOVE_AUTHED_USER
} from '../actions/authedUser'

export default function authedUser(state = {
  isFetching: false,
  exists: false,
  items: {}
},
action
) {
  switch (action.type) {
    case REQUEST_CREATE_USER:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_SIGN_IN_USER:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_SIGN_OUT_USER:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_CURRENT_USER:
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
    case REMOVE_AUTHED_USER:
      return {
        isFetching: false,
        exists: false,
        items: {}
      }
    default:
      return state
  }
}
