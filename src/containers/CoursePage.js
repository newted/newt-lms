import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ItemAccordion from '../components/Accordion'
import Panel from '../components/Panel'

class CoursePage extends Component {
  render() {
    const {
      isFetching, course, assignmentObj, announcementObj, quizObj
    } = this.props

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
                  infoObj={ announcementObj }
                  sizeClass='item-container--sm'
                />
                <ItemAccordion
                  title='Assignments'
                  infoObj={ assignmentObj }
                  sizeClass='item-container--sm'
                />
                <Panel
                  title='Quizzes'
                  infoObj={ quizObj }
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
  const assignmentObj = assignments.items[courseId]
    ? assignments.items[courseId]
    : {}
  const announcementObj = announcements.items[courseId]
    ? announcements.items[courseId]
    : {}
  const quizObj = quizzes.items[courseId]
    ? quizzes.items[courseId]
    : {}

  return {
    courseId,
    isFetching,
    course,
    assignmentObj,
    announcementObj,
    quizObj
  }
}

export default connect(mapStateToProps)(CoursePage)
