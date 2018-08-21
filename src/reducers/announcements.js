import { REQUEST_ANNOUNCEMENTS, RECEIVE_ANNOUNCEMENTS } from '../actions/announcements'

export default function announcements(
  state = {
    isFetching: false,
    items: {}
  },
  action
) {
  switch(action.type) {
    case REQUEST_ANNOUNCEMENTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ANNOUNCEMENTS:
      return {
        ...state,
        isFetching: false,
        items: action.announcements
      }
    default:
      return state
  }
}
