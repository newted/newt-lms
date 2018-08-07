import { combineReducers } from 'redux'
import courses from './courses'
import authedUser from './authedUser'

export default combineReducers({
  courses,
  authedUser
})
