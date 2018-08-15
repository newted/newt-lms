import { _getCourses, _getAssignments } from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getCourses(),
    _getAssignments(),
  ]).then(([courses, assignments]) => ({
      courses,
      assignments
    }))
}
