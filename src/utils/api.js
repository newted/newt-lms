import {
  _getCourses,
  _getAssignments,
  _getAnnouncements,
  _getQuizzes,
  _getGrades
} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getCourses(),
    _getAssignments(),
    _getAnnouncements(),
    _getQuizzes(),
    _getGrades()
  ]).then(([courses, assignments, announcements, quizzes, grades]) => ({
      courses,
      assignments,
      announcements,
      quizzes,
      grades
    }))
}
