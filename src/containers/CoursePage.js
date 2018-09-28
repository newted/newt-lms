import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// Components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ItemAccordion from '../components/Accordion'
import Panel from '../components/Panel'
// Other
import { objectToArray } from '../utils/helpers'

class CoursePage extends Component {
  render() {
    const {
      authedUser, isFetching, course, assignmentArray,
      announcementArray, quizArray
    } = this.props

    if (isFetching) {
      return <p>Loading...</p>
    }

    if (!authedUser.exists) {
      return <Redirect to='/login' />
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
                <Panel
                  title='Announcements'
                  data={ announcementArray }
                  sizeClass='item-container--sm'
                />
                <ItemAccordion
                  title='Assignments'
                  data={ assignmentArray }
                  sizeClass='item-container--sm'
                />
                <Panel
                  title='Quizzes'
                  data={ quizArray }
                  sizeClass='item-container--sm'
                />
                {/* <Panel
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

function mapStateToProps(
  { authedUser, courses, assignments, announcements, quizzes },
  props
) {
  const { courseId } = props.match.params

  const fetchingCourses = courses.isFetching
  const fetchingAssignments = assignments.isFetching
  const fetchingAnnouncements = announcements.isFetching
  const fetchingQuizzes = quizzes.isFetching
  const isFetching = fetchingCourses ||
    fetchingAssignments ||
    fetchingAnnouncements ||
    fetchingQuizzes

  const course = courses.items[courseId]
  const assignmentObj = assignments.items[courseId]
    ? assignments.items[courseId]
    : {}
  const announcementObj = announcements.items[courseId]
    ? announcements.items[courseId]
    : {}
  const quizObj = quizzes.items[courseId]
    ? quizzes.items[courseId]
    : {}

  // Convert object of objects into sorted array of objects
  const assignmentArray = objectToArray(assignmentObj, 'dueDate')
  const announcementArray = objectToArray(announcementObj, 'creationDate')
  const quizArray = objectToArray(quizObj, 'dueDate')

  return {
    authedUser,
    courseId,
    isFetching,
    course,
    assignmentArray,
    announcementArray,
    quizArray
  }
}

export default connect(mapStateToProps)(CoursePage)
