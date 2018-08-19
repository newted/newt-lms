import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import courses from './courses'
import assignments from './assignments'
import announcements from './announcements'
import quizzes from './quizzes'
import grades from './grades'
import authedUser from './authedUser'

export default combineReducers({
  courses,
  assignments,
  announcements,
  quizzes,
  grades,
  authedUser,
  loadingBar: loadingBarReducer
})
