import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// API
import { handleInitialData } from '../actions/shared'
// Components
import Dashboard from './Dashboard'
import Courses from './Courses'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route path='/' exact component={ Dashboard } />
            <Route path='/courses' component={ Courses } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
