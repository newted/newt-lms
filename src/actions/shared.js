import { API } from 'aws-amplify'

export const REQUEST_INFO = 'REQUEST_INFO'
export const RECEIVE_INFO = 'RECEIVE_INFO'

function requestInfo() {
  return {
    type: REQUEST_INFO
  }
}

function receiveInfo(info) {
  return {
    type: RECEIVE_INFO,
    info
  }
}

export function getInfo() {
  return (dispatch) => {
    dispatch(requestInfo())

    // let init = {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //   }
    // }

    return API.get("students-api-trial", "/courses")
      .then((response) => {
        const info = response

        console.log(info)
      })
  }
}
