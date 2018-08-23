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

export function getAllAssignments(studentId) {
  return (dispatch) => {
    dispatch(requestAssignments())
    let assignments = {}

    return db.collection('students').doc(studentId).collection('enrolment').get()
      .then((snap) => {
        let promises = []
        snap.forEach((docRef) => {
          promises.push(db.collection('students')
              .doc(studentId)
            .collection('enrolment')
              .doc(docRef.id)
            .collection('assignments').get().then((snap) => {
              if (!snap.empty) {
                snap.forEach((assgnRef) => {
                  assignments[docRef.id] = {...assignments[docRef.id], [assgnRef.id]: assgnRef.data()}
                })
              }
            })
          )
        })

        return Promise.all(promises)
          .then(() => dispatch(receiveAssignments(assignments)))
      })
  }
}

// export function getAssignments() {
//   return (dispatch) => {
//     dispatch(requestAssignments())
//     return db.collection('assignments').get()
//       .then((snap) => {
//         let assignments = {}
//
//         snap.forEach((docRef) => {
//           assignments[docRef.id] = docRef.data()
//         })
//
//         dispatch(receiveAssignments(assignments))
//       })
//   }
// }
