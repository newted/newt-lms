// Frameworks/Libraries
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// Components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
// Helpers
import { formatDataForTable, statusDueDateSort } from '../utils/helpers'

class Dashboard extends Component {
  render() {
    const { assignmentFields, assignmentList } = this.props

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
                  sizeClass='item-container--sm'
                  fields={ assignmentFields }
                  data={ assignmentList }
                  title='Assignments'
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

function mapStateToProps({ courses, assignments }) {
  const assignmentsByCourseObj = assignments.items
  const courseItems = courses.items

  const assignmentFields = {
    'Course': 'courseShortname',
    'Assignment': 'name',
    'Due Date': 'dueDate',
    'Status': 'status'
  }

  let assignmentList = formatDataForTable(
    assignmentsByCourseObj, courseItems, 'dueDate', 'short')

  assignmentList.sort((a, b) => statusDueDateSort(a, b))

  return {
    assignmentFields,
    assignmentList
  }
}

export default connect(mapStateToProps)(Dashboard)
