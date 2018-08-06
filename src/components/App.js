import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import Dashboard from './Dashboard'
import Courses from './Courses'

class App extends Component {
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

export default App;
