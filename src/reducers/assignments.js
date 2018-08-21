import { REQUEST_ASSIGNMENTS, RECEIVE_ASSIGNMENTS } from '../actions/assignments'

export default function assignments(
  state = {
    isFetching: false,
    items: {}
  },
  action
) {
  switch(action.type) {
    case REQUEST_ASSIGNMENTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ASSIGNMENTS:
      return {
        ...state,
        isFetching: false,
        items: action.assignments
      }
    default:
      return state
  }
}
