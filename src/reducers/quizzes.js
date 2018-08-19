import { RECEIVE_QUIZZES } from '../actions/quizzes'

export default function quizzes(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUIZZES:
      return {
        ...state,
        ...action.quizzes
      }
    default:
      return state
  }
}
