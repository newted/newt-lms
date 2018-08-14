import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Components
import Navbar from './items/Navbar'
import Sidebar from './items/Sidebar'
import CourseCard from './items/CourseCard'

class Courses extends Component {
  render() {
    const { courses } = this.props

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='courses-container'>
              <h3 className='header'>Courses</h3>
              <div className='courses-card-container'>
                { Object.keys(courses).map((course) => (
                  <CourseCard key={ course } id={ course }/>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

Courses.PropTypes = {
  authedUser: PropTypes.oneOfType([PropTypes.string, null]),
  courses: PropTypes.object.isRequired
}

function mapStateToProps({ authedUser, courses }) {
  return {
    authedUser,
    courses
  }
}

export default connect(mapStateToProps)(Courses)
