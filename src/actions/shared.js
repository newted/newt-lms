import { showLoading, hideLoading } from 'react-redux-loading'
import { getCourses } from './courses'
import { getAssignments } from './assignments'
import { getAnnouncements } from './announcements'
import { getQuizzes } from './quizzes'
import { setAuthedUser } from './authedUser'

const INIT_ID = 'nehaludyavar'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    Promise.all([
      dispatch(getCourses()),
      dispatch(getAssignments()),
      dispatch(getAnnouncements()),
      dispatch(getQuizzes()),
      dispatch(setAuthedUser(INIT_ID))
    ])
    .then(() => dispatch(hideLoading()))
  }
}
