import schoolDb from '../backend/db'

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
    return schoolDb.collection('courses').get()
      .then((snap) => {
        let courses = {}

        snap.forEach((docRef) => {
          courses[docRef.id] = docRef.data()
        })

        dispatch(receiveCourses(courses))
    })
  }
}
