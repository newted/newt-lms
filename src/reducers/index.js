import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import courses from './courses'
import authedUser from './authedUser'

export default combineReducers({
  courses,
  authedUser,
  loadingBar: loadingBarReducer
})
