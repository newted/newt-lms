import db from '../backend/db'

export const REQUEST_ASSIGNMENTS = 'REQUEST_ASSIGNMENTS'
export const RECEIVE_ASSIGNMENTS = 'RECEIVE_ASSIGNMENTS'

function requestAssignments() {
  return {
    type: REQUEST_ASSIGNMENTS
  }
}

function receiveAssignments(assignments) {
  return {
    type: RECEIVE_ASSIGNMENTS,
    assignments
  }
}

export function getAssignments() {
  return (dispatch) => {
    dispatch(requestAssignments())
    return db.collection('assignments').get()
      .then((snap) => {
        let assignments = {}

        snap.forEach((doc) => {
          assignments[doc.id] = doc.data()
        })

        dispatch(receiveAssignments(assignments))
      })
  }
}
