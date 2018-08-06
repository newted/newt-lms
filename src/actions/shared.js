import { getInitialData } from '../utils/api'
import { receiveCourses } from './courses'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then((courses) => {
        dispatch(receiveCourses(courses))
      })
  }
}
