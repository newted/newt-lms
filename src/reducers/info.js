import { REQUEST_INFO, RECEIVE_INFO } from '../actions/shared'

export default function info(
  state = {
    isFetching: false,
    items: {}
  },
  action
) {
  switch(action.type) {
    case REQUEST_INFO:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_INFO:
      return {
        ...state,
        isFetching: false,
        items: action.info
      }
    default:
      return state
  }
}
