import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import { receiveCourses } from './courses'
import { receiveAssignments } from './assignments'
import { setAuthedUser } from './authedUser'

const INIT_ID = 'nehaludyavar'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({courses, assignments}) => {
        dispatch(receiveCourses(courses))
        dispatch(receiveAssignments(assignments))
        dispatch(setAuthedUser(INIT_ID))
        dispatch(hideLoading())
      })
  }
}
