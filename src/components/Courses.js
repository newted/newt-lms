import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import CourseCard from './CourseCard'

class Courses extends Component {
  render() {
    const { courses } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='content-container'>
          <Navbar />
          <div className='courses-container'>
            { Object.keys(courses).map((course) => (
              <CourseCard key={ course }/>
            ))}
          </div>
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
