import { _getCourses, _getAssignments, _getAnnouncements } from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getCourses(),
    _getAssignments(),
    _getAnnouncements()
  ]).then(([courses, assignments, announcements]) => ({
      courses,
      assignments,
      announcements
    }))
}
