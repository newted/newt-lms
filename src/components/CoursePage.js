import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from './items/Navbar'
import Sidebar from './items/Sidebar'
import AssignmentSection from './items/AssignmentSection'
import Panel from './items/Panel'

class CoursePage extends Component {
  render() {
    const { courseId, isFetching, course } = this.props

    if (isFetching) {
      return <p>Loading...</p>
    }

    return (
      <Fragment>
        <Sidebar />
        <section className='main-container'>
          <Navbar />
          <div className='content-container'>
            <div className='course-page-container'>
              <h3 className='header--2'>{ course.shortname } &ndash; { course.name}</h3>
              <div className='items-container'>
                {/* <Panel
                  title='Announcements'
                  type='announcements'
                  courseId={ courseId }
                  sizeClass='item-container--sm'
                /> */}
                <AssignmentSection courseId={ courseId } />
                {/* <Panel
                  title='Quizzes'
                  type='quizzes'
                  courseId={ courseId }
                  sizeClass='item-container--sm'
                />
                <Panel
                  title='Grades'
                  type='grades'
                  courseId={ courseId }
                  sizeClass='item-container--sm'
                /> */}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ courses, assignments }, props) {
  const { courseId } = props.match.params

  const fetchingCourses = courses.isFetching
  const fetchingAssignments = assignments.isFetching
  const isFetching = fetchingCourses || fetchingAssignments

  const course = courses.items[courseId]

  return {
    courseId,
    isFetching,
    course
  }
}

export default connect(mapStateToProps)(CoursePage)
