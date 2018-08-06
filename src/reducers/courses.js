import { RECEIVE_COURSES } from '../actions/courses'

export default function courses(state = {}, action) {
  switch(action.type) {
    case RECEIVE_COURSES:
      return {
        ...state,
        ...action.courses
      }
    default:
      return state
  }
}
