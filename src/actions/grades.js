export const RECEIVE_GRADES = 'RECEIVE_GRADES'

export function receiveGrades(grades) {
  return {
    type: RECEIVE_GRADES,
    grades
  }
}
