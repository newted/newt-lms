import schoolDb from '../backend/db'

export const REQUEST_ANNOUNCEMENTS = 'REQUEST_ANNOUNCEMENTS'
export const RECEIVE_ANNOUNCEMENTS = 'RECEIVE_ANNOUNCEMENTS'

function requestAnnouncements() {
  return {
    type: REQUEST_ANNOUNCEMENTS
  }
}

function receiveAnnouncements(announcements) {
  return {
    type: RECEIVE_ANNOUNCEMENTS,
    announcements
  }
}

export function getAllAnnouncements(studentId) {
  return (dispatch) => {
    dispatch(requestAnnouncements())
    let announcements = {}

    return schoolDb.collection('students').doc(studentId).collection('enrolment').get()
      .then((snap) => {
        let promises = []
        snap.forEach((docRef) => {
          // .get() returns a promise, so append all promises to an array and
          // run them all afterwards so that announcements object is ready to be
          // dispatched
          promises.push(schoolDb.collection('students')
              .doc(studentId)
            .collection('enrolment')
              .doc(docRef.id)
            .collection('announcements').get().then((snap) => {
              if (!snap.empty) {
                snap.forEach((anncRef) => {
                  announcements[docRef.id] = {...announcements[docRef.id], [anncRef.id]: anncRef.data()}
                })
              }
            })
        )})

        return Promise.all(promises)
          .then(() => dispatch(receiveAnnouncements(announcements)))
      })
  }
}
