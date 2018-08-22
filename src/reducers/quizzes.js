import { REQUEST_QUIZZES, RECEIVE_QUIZZES } from '../actions/quizzes'

export default function quizzes(
  state = {
    isFetching: false,
    items: {}
  },
  action
) {
  switch(action.type) {
    case REQUEST_QUIZZES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_QUIZZES:
      return {
        ...state,
        isFetching: false,
        items: action.quizzes
      }
    default:
      return state
  }
}
