import { RECEIVE_ANNOUNCEMENTS } from '../actions/announcements'

export default function announcements(state = {}, action) {
  switch(action.type) {
    case RECEIVE_ANNOUNCEMENTS:
      return {
        ...state,
        ...action.announcements
      }
    default:
      return state
  }
}
