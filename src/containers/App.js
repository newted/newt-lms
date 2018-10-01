import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// API
import { handleInitialData } from '../actions/shared.js'
// Containers/Components
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'
import Courses from './Courses'
import CoursePage from './CoursePage'
import Assignments from './Assignments'
import Quizzes from './Quizzes'

class App extends Component {
  componentDidUpdate() {
    const { authedUser, dispatch } = this.props

    if (authedUser.exists) {
      const { currentInstitution } = authedUser.items

      if (currentInstitution) {
        const { studentId } = authedUser.items.institutions[currentInstitution]
        // Fetch course data
        dispatch(handleInitialData(studentId))
      }
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="app-container">
            { this.props.loading === true
              ? null
              : <Switch>
                  <Route path='/' exact component={ Dashboard } />
                  <Route path='/login' component={ LoginPage } />
                  <Route path='/courses' exact component={ Courses } />
                  <Route path='/courses/:courseId' component={ CoursePage } />
                  <Route path='/assignments' component={ Assignments } />
                  <Route path='/quizzes' component={ Quizzes } />
                </Switch>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
