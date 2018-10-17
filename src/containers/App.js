import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// API
import { fetchCurrentUser } from '../actions/authedUser'
// Containers/Components
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'
import Courses from './Courses'
import CoursePage from './CoursePage'
import Assignments from './Assignments'
import Quizzes from './Quizzes'

class App extends Component {
  componentDidMount() {
    const { authedUser, dispatch } = this.props

    if (!authedUser.exists) {
      dispatch(fetchCurrentUser())
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
    loading: authedUser.isFetching === true
  }
}

export default connect(mapStateToProps)(App)
