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
