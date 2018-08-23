import db from '../backend/db'

export const REQUEST_QUIZZES = 'REQUEST_QUIZZES'
export const RECEIVE_QUIZZES = 'RECEIVE_QUIZZES'

function requestQuizzes() {
  return {
    type: REQUEST_QUIZZES
  }
}

function receiveQuizzes(quizzes) {
  return {
    type: RECEIVE_QUIZZES,
    quizzes
  }
}

export function getAllQuizzes(studentId) {
  return (dispatch) => {
    dispatch(requestQuizzes())
    let quizzes = {}

    return db.collection('students').doc(studentId).collection('enrolment').get()
      .then((snap) => {
        let promises = []
        snap.forEach((docRef) => {
          promises.push(db.collection('students')
              .doc(studentId)
            .collection('enrolment')
              .doc(docRef.id)
            .collection('quizzes').get().then((snap) => {
              if (!snap.empty) {
                snap.forEach((quizRef) => {
                  quizzes[docRef.id] = {...quizzes[docRef.id], [quizRef.id]: quizRef.data()}
                })
              }
            })
          )
        })

        return Promise.all(promises)
          .then(() => dispatch(receiveQuizzes(quizzes)))
      })
  }
}

export function getQuizzes() {
  return (dispatch) => {
    dispatch(requestQuizzes())
    return db.collection('quizzes').get()
      .then((snap) => {
        let quizzes = {}

        snap.forEach((docRef) => {
          quizzes[docRef.id] = docRef.data()
        })

        dispatch(receiveQuizzes(quizzes))
      })
  }
}
