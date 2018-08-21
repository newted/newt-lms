import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// API
import { getCourses } from '../actions/courses'
import { getAssignments } from '../actions/assignments'
import { setAuthedUser } from '../actions/authedUser'
// Components
import Dashboard from './Dashboard'
import Courses from './Courses'
import CoursePage from './CoursePage'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getCourses())
    // dispatch(getAssignments())
    dispatch(setAuthedUser('nehaludyavar'))

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
                  <Route path='/courses' exact component={ Courses } />
                  <Route path='/courses/:courseId' component={ CoursePage } />
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
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
