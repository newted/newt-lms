import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import { receiveCourses } from './courses'
import { receiveAssignments } from './assignments'
import { receiveAnnouncements } from './announcements'
import { receiveQuizzes } from './quizzes'
import { setAuthedUser } from './authedUser'

const INIT_ID = 'nehaludyavar'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({courses, assignments, announcements, quizzes}) => {
        dispatch(receiveCourses(courses))
        dispatch(receiveAssignments(assignments))
        dispatch(receiveAnnouncements(announcements))
        dispatch(receiveQuizzes(quizzes))
        dispatch(setAuthedUser(INIT_ID))
        dispatch(hideLoading())
      })
  }
}
