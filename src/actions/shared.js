import { showLoading, hideLoading } from 'react-redux-loading'
import { getCourses } from './courses'
import { getAllAssignments } from './assignments'
import { getAllAnnouncements } from './announcements'
import { getAllQuizzes } from './quizzes'

export function handleInitialData(studentId) {
  return (dispatch) => {
    dispatch(showLoading())
    Promise.all([
      dispatch(getCourses()),
      dispatch(getAllAssignments(studentId)),
      dispatch(getAllAnnouncements(studentId)),
      dispatch(getAllQuizzes(studentId))
    ])
    .then(() => dispatch(hideLoading()))
  }
}
