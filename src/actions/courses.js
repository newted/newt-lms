import db from '../backend/db'

export const RECEIVE_COURSES = 'RECEIVE_COURSES'

export function receiveCourses(courses) {
  return {
    type: RECEIVE_COURSES,
    courses
  }
}

export function getCourses() {
  return (dispatch) => {
    return db.collection('courses').get()
      .then((snap) => {
        let courses = {}

        snap.forEach((doc) => {
          courses[doc.id] = doc.data()
        })

        dispatch(receiveCourses(courses))
    })
  }
}
