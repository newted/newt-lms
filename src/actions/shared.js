import { showLoading, hideLoading } from 'react-redux-loading'
import { getCourses } from './courses'
import { getAllAssignments } from './assignments'
import { getAllAnnouncements } from './announcements'
import { getQuizzes } from './quizzes'
import { setAuthedUser } from './authedUser'

const INIT_ID = 'nehaludyavar'
const STUDENT_ID = 'A01036028'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    Promise.all([
      dispatch(getCourses()),
      dispatch(getAllAssignments(STUDENT_ID)),
      dispatch(getAllAnnouncements(STUDENT_ID)),
      dispatch(getQuizzes()),
      dispatch(setAuthedUser(INIT_ID))
    ])
    .then(() => dispatch(hideLoading()))
  }
}
