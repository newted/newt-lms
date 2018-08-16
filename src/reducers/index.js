import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import courses from './courses'
import assignments from './assignments'
import announcements from './announcements'
import authedUser from './authedUser'

export default combineReducers({
  courses,
  assignments,
  announcements,
  authedUser,
  loadingBar: loadingBarReducer
})
