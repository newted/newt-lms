export const RECEIVE_ASSIGNMENTS = 'RECEIVE_ASSIGNMENTS'

export function receiveAssignments(assignments) {
  return {
    type: RECEIVE_ASSIGNMENTS,
    assignments
  }
}
