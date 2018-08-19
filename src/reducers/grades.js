import { RECEIVE_GRADES } from '../actions/grades'

export default function grades(state = {}, action) {
  switch(action.type) {
    case RECEIVE_GRADES:
      return {
        ...state,
        ...action.grades
      }
    default:
      return state
  }
}
