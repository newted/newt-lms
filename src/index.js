import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Amplify from 'aws-amplify'
import config from './aws-config'
import './index.css'
import App from './containers/App'
import reducer from './reducers'
import middleware from './middleware'

// Configure AWS
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "newt-api-trial",
        endpoint: config.apiGateway.newt.URL,
        region: config.apiGateway.newt.REGION
      },
      {
        name: "students-api-trial",
        endpoint: config.apiGateway.students.URL,
        region: config.apiGateway.students.REGION
      }
    ]
  }
})

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
document.getElementById('root'))
