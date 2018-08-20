import {
  _getCourses,
  _getAssignments,
  _getAnnouncements,
  _getQuizzes,
  _getGrades
} from './_DATA.js'
import firebase from '../backend/firebase'

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

const db = firebase.firestore()
const settings = {timestampsInSnapshots: true}
db.settings(settings)

db.collection('courses').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data())
  })
})
