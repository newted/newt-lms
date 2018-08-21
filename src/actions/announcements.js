import db from '../backend/db'

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

export function getAnnouncements() {
  return (dispatch) => {
    dispatch(requestAnnouncements())
    return db.collection('announcements').get()
      .then((snap) => {
        let announcements = {}

        snap.forEach((docRef) => {
          announcements[docRef.id] = docRef.data()
        })

        dispatch(receiveAnnouncements(announcements))
      })
  }
}
