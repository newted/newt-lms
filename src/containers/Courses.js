import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// Components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CourseCard from '../components/CourseCard'

class Courses extends Component {
  render() {
    const { authedUser, courses } = this.props

    if (!authedUser.exists) {
      return <Redirect to='/login' />
    }

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='courses-container'>
              <h3 className='header'>Courses</h3>
              <div className='courses-card-container'>
                { Object.keys(courses.items).map((course) => (
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
