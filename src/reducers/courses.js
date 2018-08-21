import { REQUEST_COURSES, RECEIVE_COURSES } from '../actions/courses'

export default function courses(
  state = {
    isFetching: false,
    items: {}
  },
  action
) {
  switch(action.type) {
    case REQUEST_COURSES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_COURSES:
      return {
        ...state,
        isFetching: false,
        items: action.courses
      }
    default:
      return state
  }
}
