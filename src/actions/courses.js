import db from '../backend/db'

export const REQUEST_COURSES = 'REQUEST_COURSES'
export const RECEIVE_COURSES = 'RECEIVE_COURSES'

function requestCourses() {
  return {
    type: REQUEST_COURSES
  }
}

function receiveCourses(courses) {
  return {
    type: RECEIVE_COURSES,
    courses
  }
}

export function getCourses() {
  return (dispatch) => {
    dispatch(requestCourses())
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
