import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from './items/Navbar'
import Sidebar from './items/Sidebar'
import AssignmentSection from './items/AssignmentSection'
import Panel from './items/Panel'

class CoursePage extends Component {
  render() {
    const { courseId, isFetching, course, announcementList, quizList } = this.props

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
                <Panel
                  title='Announcements'
                  type='announcements'
                  courseId={ courseId }
                  list={ announcementList }
                  sizeClass='item-container--sm'
                />
                <AssignmentSection courseId={ courseId } />
                <Panel
                  title='Quizzes'
                  type='quizzes'
                  courseId={ courseId }
                  list={ quizList }
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
  { courses, assignments, announcements, quizzes },
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
  let announcementList = []
  let quizList = []

  if (course) {
    announcementList = course.announcements
    quizList = course.quizzes
  }

  return {
    courseId,
    isFetching,
    course,
    announcementList,
    quizList
  }
}

export default connect(mapStateToProps)(CoursePage)
