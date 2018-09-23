import { showLoading, hideLoading } from 'react-redux-loading'
import { getCourses } from './courses'
import { getAllAssignments } from './assignments'
import { getAllAnnouncements } from './announcements'
import { getAllQuizzes } from './quizzes'
import { setAuthedUser } from './authedUser'

const STUDENT_ID = 'A01036028'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    Promise.all([
      dispatch(getCourses()),
      dispatch(getAllAssignments(STUDENT_ID)),
      dispatch(getAllAnnouncements(STUDENT_ID)),
      dispatch(getAllQuizzes(STUDENT_ID))
    ])
    .then(() => dispatch(hideLoading()))
  }
}
