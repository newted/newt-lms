import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import courses from './courses'
import assignments from './assignments'
import announcements from './announcements'
import quizzes from './quizzes'
import authedUser from './authedUser'

export default combineReducers({
  courses,
  assignments,
  announcements,
  quizzes,
  authedUser,
  loadingBar: loadingBarReducer
})
