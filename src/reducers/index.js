import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import courses from './courses'
import assignments from './assignments'
import authedUser from './authedUser'

export default combineReducers({
  courses,
  assignments,
  authedUser,
  loadingBar: loadingBarReducer
})
