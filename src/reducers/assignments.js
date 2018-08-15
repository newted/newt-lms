import { RECEIVE_ASSIGNMENTS } from '../actions/assignments'

export default function assignments(state = {}, action) {
  switch(action.type) {
    case RECEIVE_ASSIGNMENTS:
      return {
        ...state,
        ...action.assignments
      }
    default:
      return state
  }
}
