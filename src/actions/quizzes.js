export const RECEIVE_QUIZZES = 'RECEIVE_QUIZZES'

export function receiveQuizzes(quizzes) {
  return {
    type: RECEIVE_QUIZZES,
    quizzes
  }
}
