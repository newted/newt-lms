import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Courses extends Component {
  render() {
    const { courses, authedUser } = this.props
    console.log(courses, authedUser)
    
    return (
      <Fragment>
        <Sidebar />
        <section className='content-container'>
          <Navbar />
          Courses
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, courses }) {
  return {
    authedUser,
    courses
  }
}

export default connect(mapStateToProps)(Courses)
