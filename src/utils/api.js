import {
  _getCourses,
  _getAssignments,
  _getAnnouncements,
  _getQuizzes
} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getCourses(),
    _getAssignments(),
    _getAnnouncements(),
    _getQuizzes()
  ]).then(([courses, assignments, announcements, quizzes]) => ({
      courses,
      assignments,
      announcements,
      quizzes
    }))
}
