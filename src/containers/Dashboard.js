// Frameworks/Libraries
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// Components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
// API
import { getInfo } from '../actions/shared'
// Helpers
import { formatDataForTable, statusDueDateSort } from '../utils/helpers'

class Dashboard extends Component {
  componentDidMount() {
    const { authedUser, dispatch } = this.props

    if (authedUser.exists) {
      dispatch(getInfo())
    }
  }

  render() {
    const {
      authedUser, announcementFields, announcementList, assignmentFields,
      assignmentList, quizFields, quizList
    } = this.props

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
              <h3 className='header'>Dashboard</h3>
              <div className='items-container'>
                <Table
                  type='Announcements'
                  sizeClass='item-container--sm'
                  fields={ announcementFields }
                  data={ announcementList }
                  title='Announcements'
                />
                <Table
                  type='Assignments'
                  sizeClass='item-container--sm'
                  fields={ assignmentFields }
                  data={ assignmentList }
                  title='Assignments'
                />
                <Table
                  type='Quizzes'
                  sizeClass='item-container--sm'
                  fields={ quizFields }
                  data={ quizList }
                  title='Quizzes'
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps(
  { authedUser, courses, announcements, assignments, quizzes }
) {
  const announcementsByCourseObj = announcements.items
  const assignmentsByCourseObj = assignments.items
  const quizzesByCourseObj = quizzes.items
  const courseItems = courses.items

  const announcementFields = {
    'Course': 'courseShortname',
    'Announcement': 'name'
  }
  const assignmentFields = {
    'Course': 'courseShortname',
    'Assignment': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }
  const quizFields = {
    'Course': 'courseShortname',
    'Quiz': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }

  let announcementList = formatDataForTable(
    announcementsByCourseObj, courseItems, 'creationDate', 'short'
  )
  let assignmentList = formatDataForTable(
    assignmentsByCourseObj, courseItems, 'dueDate', 'short'
  )
  let quizList = formatDataForTable(
    quizzesByCourseObj, courseItems, 'dueDate', 'short'
  )

  assignmentList.sort((a, b) => statusDueDateSort(a, b))
  quizList.sort((a, b) => statusDueDateSort(a, b))

  return {
    authedUser,
    announcementFields,
    assignmentFields,
    quizFields,
    announcementList,
    assignmentList,
    quizList
  }
}

export default connect(mapStateToProps)(Dashboard)
