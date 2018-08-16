export const RECEIVE_ANNOUNCEMENTS = 'RECEIVE_ANNOUNCEMENTS'

export function receiveAnnouncements(announcements) {
  return {
    type: RECEIVE_ANNOUNCEMENTS,
    announcements
  }
}
