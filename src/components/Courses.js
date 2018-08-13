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

function mapStateToProps({ authedUser, courses }) {
  return {
    authedUser,
    courses
  }
}

export default connect(mapStateToProps)(Courses)
